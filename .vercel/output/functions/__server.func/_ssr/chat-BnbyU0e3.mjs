import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
import { t as GoogleGenerativeAI } from "../_libs/google__generative-ai.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chat-BnbyU0e3.js
var SYSTEM_PROMPT = `You are the Pascual AI Agent — a knowledgeable, friendly, and professional AI assistant for Pascual.ai, an enterprise AI engineering company.

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
var PREFERRED_MODELS = [
	"gemini-3.5-flash",
	"gemini-3.1-flash-lite",
	"gemini-3-flash-preview",
	"gemini-2.5-flash",
	"gemini-flash-latest"
];
var MODEL_QUALITY_KEYWORDS = ["flash", "pro"];
/**
* Fetches the list of available models from the Gemini API and returns
* the best one suitable for generateContent (prefers flash models).
*/
async function pickBestAvailableModel(apiKey) {
	try {
		const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
		if (!res.ok) return null;
		return ((await res.json()).models ?? []).filter((m) => m.supportedGenerationMethods?.includes("generateContent")).map((m) => m.name.replace("models/", "")).map((name) => {
			const versionMatch = name.match(/(\d+(?:\.\d+)?)/);
			const version = versionMatch ? parseFloat(versionMatch[1]) : 0;
			return {
				name,
				score: MODEL_QUALITY_KEYWORDS.some((kw) => name.includes(kw)) ? version + 100 : version
			};
		}).sort((a, b) => b.score - a.score)[0]?.name ?? null;
	} catch {
		return null;
	}
}
/**
* Checks whether a Gemini API error is a "model not available" error
* (404 deprecation or "no longer available to new users").
*/
function isModelUnavailableError(err) {
	if (!(err instanceof Error)) return false;
	const msg = err.message.toLowerCase();
	return msg.includes("404") || msg.includes("not found") || msg.includes("no longer available") || msg.includes("deprecated");
}
/**
* Attempts to run a Gemini generateContent chat with automatic model fallback.
* Tries each model in PREFERRED_MODELS in order. If all fail with a
* "not available" error, dynamically fetches the best available model and
* retries once more.
*/
async function runChatWithFallback(genAI, apiKey, history, lastMessage) {
	const modelsToTry = [...PREFERRED_MODELS];
	for (const modelName of modelsToTry) try {
		const result = await genAI.getGenerativeModel({
			model: modelName,
			systemInstruction: SYSTEM_PROMPT
		}).startChat({
			history,
			generationConfig: {
				maxOutputTokens: 1024,
				temperature: .7
			}
		}).sendMessage(lastMessage);
		console.log(`[Chatbot] Using model: ${modelName}`);
		return result.response.text();
	} catch (err) {
		if (isModelUnavailableError(err)) {
			console.warn(`[Chatbot] Model "${modelName}" unavailable, trying next...`);
			continue;
		}
		throw err;
	}
	console.warn("[Chatbot] All preferred models exhausted. Fetching available models from API...");
	const bestModel = await pickBestAvailableModel(apiKey);
	if (!bestModel) throw new Error("No available Gemini models could be found for this API key.");
	console.log(`[Chatbot] Dynamically selected model: ${bestModel}`);
	return (await genAI.getGenerativeModel({
		model: bestModel,
		systemInstruction: SYSTEM_PROMPT
	}).startChat({
		history,
		generationConfig: {
			maxOutputTokens: 1024,
			temperature: .7
		}
	}).sendMessage(lastMessage)).response.text();
}
var chatWithGemini_createServerFn_handler = createServerRpc({
	id: "0952badcfed43ea827490e266f3e43f74749baa0ce7fc0d4704f688a048804a0",
	name: "chatWithGemini",
	filename: "src/lib/chat.ts"
}, (opts) => chatWithGemini.__executeServer(opts));
var chatWithGemini = createServerFn({ method: "POST" }).validator((data) => data).handler(chatWithGemini_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.GEMINI_API_KEY;
	if (!apiKey || apiKey === "your_gemini_api_key_here") return { text: "I'd love to help! I'm currently being set up. In the meantime, please reach out via our Contact page or click 'Book a demo' to talk with our team directly.\n[CTA:book-demo]" };
	const genAI = new GoogleGenerativeAI(apiKey);
	const history = data.messages.slice(0, -1).map((m) => ({
		role: m.role,
		parts: [{ text: m.text }]
	}));
	const lastMessage = data.messages[data.messages.length - 1];
	return { text: await runChatWithFallback(genAI, apiKey, history, lastMessage.text) };
});
//#endregion
export { chatWithGemini_createServerFn_handler };
