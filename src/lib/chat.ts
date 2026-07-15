import { createServerFn } from "@tanstack/react-start";
import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `You are the Pascual AI Agent — a knowledgeable, friendly, and professional AI assistant for Pascual.ai, an enterprise AI engineering company.

About Pascual.ai:
- We build custom AI agents, autonomous workflows, cloud platforms, and data systems for enterprises
- We serve healthcare, finance, retail, logistics, manufacturing, education, and government sectors
- We deploy live enterprise AI use cases in as little as 2–4 weeks
- Our platform is enterprise-grade: SOC 2 Type II, ISO 27001, GDPR, HIPAA compliant
- We offer: AI Solutions, Software Solutions, Cloud & Infrastructure, Data & Analytics
- We have 200+ enterprise deployments, 99.99% uptime SLA, 60% avg ops cost reduction, 4x faster time-to-value
- Our tech stack: LLMs, multi-agent frameworks, cloud-native infrastructure, custom APIs and integrations
- Pricing is custom/enterprise — prospects should book a demo for a custom proposal

Your personality:
- Concise: respond in 2–4 sentences max unless the question genuinely requires more
- Professional but warm — you're a trusted AI advisor, not a rigid bot
- Always guide users toward booking a demo for complex or custom requirements
- Use "we" and "our" — you represent the Pascual.ai team
- Never make up specific pricing numbers, client names, or stats beyond what's provided above

If someone asks to book a demo or contact the team, always end your response with exactly this token on its own line:
[CTA:book-demo]

If someone asks about pricing or cost, end with:
[CTA:book-demo]`;

// Preferred model priority order — newest/best first.
// When one is deprecated, the next in line is tried automatically.
const PREFERRED_MODELS = [
  "gemini-3.5-flash",
  "gemini-3.1-flash-lite",
  "gemini-3-flash-preview",
  "gemini-2.5-flash",
  "gemini-flash-latest",
];

// Keywords that identify a capable Flash/text-generation model from the ListModels response
const MODEL_QUALITY_KEYWORDS = ["flash", "pro"];

/**
 * Fetches the list of available models from the Gemini API and returns
 * the best one suitable for generateContent (prefers flash models).
 */
async function pickBestAvailableModel(apiKey: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`,
    );
    if (!res.ok) return null;

    const data = (await res.json()) as { models?: { name: string; supportedGenerationMethods?: string[] }[] };
    const models = data.models ?? [];

    // Filter to only models that support generateContent
    const generatable = models
      .filter((m) => m.supportedGenerationMethods?.includes("generateContent"))
      .map((m) => m.name.replace("models/", ""));

    // Score models: prefer those with "flash" or "pro" in the name
    const scored = generatable
      .map((name) => {
        // Extract version number to prefer newer models (e.g., 3.5 > 3 > 2.5)
        const versionMatch = name.match(/(\d+(?:\.\d+)?)/);
        const version = versionMatch ? parseFloat(versionMatch[1]) : 0;
        const hasKeyword = MODEL_QUALITY_KEYWORDS.some((kw) => name.includes(kw));
        return { name, score: hasKeyword ? version + 100 : version };
      })
      .sort((a, b) => b.score - a.score);

    return scored[0]?.name ?? null;
  } catch {
    return null;
  }
}

/**
 * Checks whether a Gemini API error is a "model not available" error
 * (404 deprecation or "no longer available to new users").
 */
function isModelUnavailableError(err: unknown): boolean {
  if (!(err instanceof Error)) return false;
  const msg = err.message.toLowerCase();
  return (
    msg.includes("404") ||
    msg.includes("not found") ||
    msg.includes("no longer available") ||
    msg.includes("deprecated")
  );
}

/**
 * Attempts to run a Gemini generateContent chat with automatic model fallback.
 * Tries each model in PREFERRED_MODELS in order. If all fail with a
 * "not available" error, dynamically fetches the best available model and
 * retries once more.
 */
async function runChatWithFallback(
  genAI: GoogleGenerativeAI,
  apiKey: string,
  history: { role: string; parts: { text: string }[] }[],
  lastMessage: string,
): Promise<string> {
  const modelsToTry = [...PREFERRED_MODELS];

  for (const modelName of modelsToTry) {
    try {
      const model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: SYSTEM_PROMPT,
      });

      const chat = model.startChat({
        history,
        generationConfig: {
          maxOutputTokens: 1024,
          temperature: 0.7,
        },
      });

      const result = await chat.sendMessage(lastMessage);
      console.log(`[Chatbot] Using model: ${modelName}`);
      return result.response.text();
    } catch (err) {
      if (isModelUnavailableError(err)) {
        console.warn(`[Chatbot] Model "${modelName}" unavailable, trying next...`);
        continue; // try next in list
      }
      throw err; // real error, re-throw
    }
  }

  // All preferred models exhausted — dynamically discover best available model
  console.warn("[Chatbot] All preferred models exhausted. Fetching available models from API...");
  const bestModel = await pickBestAvailableModel(apiKey);

  if (!bestModel) {
    throw new Error("No available Gemini models could be found for this API key.");
  }

  console.log(`[Chatbot] Dynamically selected model: ${bestModel}`);
  const model = genAI.getGenerativeModel({
    model: bestModel,
    systemInstruction: SYSTEM_PROMPT,
  });

  const chat = model.startChat({
    history,
    generationConfig: {
      maxOutputTokens: 1024,
      temperature: 0.7,
    },
  });

  const result = await chat.sendMessage(lastMessage);
  return result.response.text();
}

/* ─── Server Function ─────────────────────────────────────────── */
export const chatWithGemini = createServerFn({ method: "POST" })
  .validator((data: { messages: { role: "user" | "model"; text: string }[] }) => data)
  .handler(async ({ data }) => {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey || apiKey === "your_gemini_api_key_here") {
      return {
        text: "I'd love to help! I'm currently being set up. In the meantime, please reach out via our Contact page or click 'Book a demo' to talk with our team directly.\n[CTA:book-demo]",
      };
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // Build Gemini history (all except the last user message)
    const history = data.messages.slice(0, -1).map((m) => ({
      role: m.role,
      parts: [{ text: m.text }],
    }));

    const lastMessage = data.messages[data.messages.length - 1];
    const text = await runChatWithFallback(genAI, apiKey, history, lastMessage.text);

    return { text };
  });
