import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  Sparkles,
  User,
  RefreshCw,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { chatWithGemini } from "@/lib/chat";

/* ─── Types ─────────────────────────────────────────────────── */
type ChatRole = "user" | "model";

type Message = {
  id: string;
  sender: "user" | "bot";
  text: string;           // final full text (may include [CTA:...] tokens)
  displayText: string;    // what's rendered (CTA tokens stripped, being streamed in)
  hasCta: boolean;
  ctaType?: "book-demo";
  timestamp: Date;
  streaming?: boolean;
};

/* ─── Constants ──────────────────────────────────────────────── */
const SUGGESTED_PROMPTS = [
  "What AI solutions do you build?",
  "How fast can you deploy an agent?",
  "Do you support SOC 2 / HIPAA?",
  "How can I book a demo?",
];

const WELCOME: Message[] = [
  {
    id: "welcome-1",
    sender: "bot",
    text: "👋 Welcome to Pascual.ai! Want to deploy autonomous AI agents in your enterprise?",
    displayText: "👋 Welcome to Pascual.ai! Want to deploy autonomous AI agents in your enterprise?",
    hasCta: false,
    timestamp: new Date(),
  },
  {
    id: "welcome-2",
    sender: "bot",
    text: "Let me help you figure out what we can build for your team.",
    displayText: "Let me help you figure out what we can build for your team.",
    hasCta: false,
    timestamp: new Date(),
  },
];

/* ─── Helpers ────────────────────────────────────────────────── */
function formatTime(date: Date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function parseCta(text: string): { displayText: string; hasCta: boolean; ctaType?: "book-demo" } {
  const ctaMatch = text.match(/\[CTA:([\w-]+)\]/);
  if (!ctaMatch) return { displayText: text.trim(), hasCta: false };
  const ctaType = ctaMatch[1] as "book-demo";
  const displayText = text.replace(/\[CTA:[\w-]+\]/g, "").trim();
  return { displayText, hasCta: true, ctaType };
}

/* ─── Sub-components ─────────────────────────────────────────── */
function CtaButton({ type }: { type: "book-demo" }) {
  if (type === "book-demo") {
    return (
      <Link
        to="/resources/contact"
        className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-px hover:shadow-glow"
      >
        <Calendar className="h-3.5 w-3.5" />
        Book a free demo
        <ArrowRight className="h-3 w-3" />
      </Link>
    );
  }
  return null;
}

function MessageBubble({ msg }: { msg: Message }) {
  const isUser = msg.sender === "user";
  return (
    <div className={`flex gap-2.5 ${isUser ? "flex-row-reverse" : ""}`}>
      {/* Avatar */}
      <div
        className={`grid h-7 w-7 shrink-0 place-items-center self-end rounded-full text-xs font-semibold ${
          isUser
            ? "bg-primary text-primary-foreground"
            : "border border-border bg-muted"
        }`}
      >
        {isUser ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5 text-primary" />}
      </div>

      {/* Bubble + meta */}
      <div className={`flex max-w-[80%] flex-col gap-1 ${isUser ? "items-end" : "items-start"}`}>
        <div
          className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-soft ${
            isUser
              ? "rounded-tr-none bg-primary text-primary-foreground"
              : "rounded-tl-none border border-border bg-card text-foreground"
          }`}
        >
          <p className="whitespace-pre-line">{msg.displayText}</p>
          {/* Streaming cursor */}
          {msg.streaming && (
            <span className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse rounded-full bg-current opacity-70" />
          )}
          {/* CTA button inside bot bubble */}
          {!isUser && msg.hasCta && msg.ctaType && !msg.streaming && (
            <CtaButton type={msg.ctaType} />
          )}
        </div>
        <span className="text-[10px] text-muted-foreground/60">{formatTime(msg.timestamp)}</span>
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-2.5">
      <div className="grid h-7 w-7 shrink-0 place-items-center self-end rounded-full border border-border bg-muted">
        <Bot className="h-3.5 w-3.5 text-primary" />
      </div>
      <div className="rounded-2xl rounded-tl-none border border-border bg-card px-4 py-3 shadow-soft">
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/40 [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/40 [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/40" />
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */
export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(WELCOME);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* ── Notification bubble after 5 s ── */
  useEffect(() => {
    const t = setTimeout(() => {
      if (!isOpen) {
        setShowNotification(true);
        setUnreadCount(1);
      }
    }, 5000);
    return () => clearTimeout(t);
  }, [isOpen]);

  /* ── Escape key to close ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen]);

  /* ── Scroll to bottom ── */
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  /* ── Focus input when opened ── */
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setUnreadCount(0);
    }
  }, [isOpen]);

  /* ── Fake character-by-character streaming ── */
  const streamText = useCallback((msgId: string, fullText: string) => {
    const { displayText, hasCta, ctaType } = parseCta(fullText);
    let i = 0;
    const chunkSize = 3; // chars per tick for snappy feel

    const tick = () => {
      i = Math.min(i + chunkSize, displayText.length);
      const chunk = displayText.slice(0, i);
      const done = i >= displayText.length;

      setMessages((prev) =>
        prev.map((m) =>
          m.id === msgId
            ? {
                ...m,
                displayText: chunk,
                hasCta: done ? hasCta : false,
                ctaType: done ? ctaType : undefined,
                streaming: !done,
              }
            : m,
        ),
      );

      if (!done) setTimeout(tick, 16); // ~60 fps
    };
    tick();
  }, []);

  /* ── Send message ── */
  const handleSend = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading) return;

      const userMsg: Message = {
        id: `user-${Date.now()}`,
        sender: "user",
        text,
        displayText: text,
        hasCta: false,
        timestamp: new Date(),
      };

      // Build history for Gemini (user+model alternating, skip system welcome messages that aren't from real chat)
      const history = messages
        .filter((m) => m.id !== "welcome-1" && m.id !== "welcome-2")
        .map((m): { role: ChatRole; text: string } => ({
          role: m.sender === "user" ? "user" : "model",
          text: m.text,
        }));

      setMessages((prev) => [...prev, userMsg]);
      setInputValue("");
      setIsLoading(true);

      try {
        const result = await chatWithGemini({
          data: {
            messages: [...history, { role: "user" as ChatRole, text }],
          },
        });

        const botMsgId = `bot-${Date.now()}`;
        const { displayText: initialDisplay, hasCta, ctaType } = parseCta(result.text);

        const botMsg: Message = {
          id: botMsgId,
          sender: "bot",
          text: result.text,
          displayText: "",
          hasCta,
          ctaType,
          streaming: true,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMsg]);
        setIsLoading(false);

        // Start streaming animation
        streamText(botMsgId, result.text);
        void initialDisplay; // used inside streamText
      } catch {
        const errMsg: Message = {
          id: `err-${Date.now()}`,
          sender: "bot",
          text: "Sorry, I ran into a hiccup. Please try again or reach out via our contact page.",
          displayText: "Sorry, I ran into a hiccup. Please try again or reach out via our contact page.",
          hasCta: false,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errMsg]);
        setIsLoading(false);
      }
    },
    [isLoading, messages, streamText],
  );

  const handleReset = () => {
    setMessages(WELCOME);
  };

  const toggleOpen = () => {
    setIsOpen((v) => !v);
    setShowNotification(false);
    setUnreadCount(0);
  };

  /* ─── Render ─────────────────────────────────────────────── */
  return (
    <>
      {/* ── Mobile overlay backdrop ── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end sm:bottom-6 sm:right-6">
        {/* ── Notification popup ── */}
        {showNotification && !isOpen && (
          <div className="mb-3 w-72 animate-fade-up rounded-2xl border border-border bg-white p-4 shadow-elevated">
            <div className="flex items-start gap-3">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary-soft text-primary">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-foreground">Pascual AI Agent</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Hey! Ask me anything about our enterprise AI solutions.
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNotification(false);
                  setUnreadCount(0);
                }}
                className="rounded p-0.5 text-muted-foreground/50 hover:text-foreground"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          </div>
        )}

        {/* ── Chat panel ── */}
        {isOpen && (
          <div
            className="
              animate-fade-up
              mb-3 flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-elevated
              /* Mobile: full-screen */
              fixed bottom-0 left-0 right-0 top-0 rounded-none
              /* sm+: fixed-size widget above the button */
              sm:relative sm:bottom-auto sm:left-auto sm:right-auto sm:top-auto
              sm:h-[580px] sm:w-[380px] sm:rounded-3xl
            "
          >
            {/* Header */}
            <div className="relative shrink-0 bg-gradient-to-r from-primary to-blue-700 px-5 py-4 text-white">
              <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_60%)]" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-tight">Pascual AI Agent</h3>
                    <div className="mt-0.5 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                      <span className="text-[10px] text-white/75">Always active</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleReset}
                    title="Reset conversation"
                    className="rounded-lg p-2 transition-colors hover:bg-white/10"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg p-2 transition-colors hover:bg-white/10"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4">
              {messages.map((msg) => (
                <MessageBubble key={msg.id} msg={msg} />
              ))}
              {isLoading && <TypingIndicator />}
              <div ref={chatEndRef} />
            </div>

            {/* Footer: suggestions + input */}
            <div className="shrink-0 space-y-2.5 border-t border-border bg-card px-3 pb-3 pt-3">
              {/* Suggestion chips — shown only near start of conversation */}
              {messages.length <= 3 && (
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_PROMPTS.map((p) => (
                    <button
                      key={p}
                      disabled={isLoading}
                      onClick={() => handleSend(p)}
                      className="rounded-full border border-border bg-muted/30 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-50"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputValue);
                }}
                className="flex items-center gap-2 rounded-xl border border-border bg-muted/30 px-3 py-1.5 transition-all focus-within:border-primary/50 focus-within:bg-card focus-within:ring-1 focus-within:ring-primary/20"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask anything about Pascual.ai…"
                  disabled={isLoading}
                  className="flex-1 bg-transparent py-1.5 text-sm focus:outline-none disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-soft transition-all hover:opacity-90 disabled:opacity-40"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>

              <p className="flex items-center justify-center gap-1 text-[10px] text-muted-foreground/60">
                <Sparkles className="h-2.5 w-2.5 text-primary/60" />
                Powered by Pascual Enterprise AI
              </p>
            </div>
          </div>
        )}

        {/* ── Toggle button with unread badge ── */}
        <button
          onClick={toggleOpen}
          aria-label="Toggle chat"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-glow transition-all hover:scale-105 active:scale-95"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
          {/* Unread badge */}
          {!isOpen && unreadCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white ring-2 ring-white">
              {unreadCount}
            </span>
          )}
        </button>
      </div>
    </>
  );
}
