import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  MessageSquare,
  Zap,
  Shield,
  BarChart3,
  Workflow,
  Globe2,
  Bot,
  Check,
  X,
  Star,
  Linkedin,
  Mail,
  CalendarCheck,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import showcase1 from "@/assets/showcase-1.jpg";
import showcase2 from "@/assets/showcase-2.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <Showcase />
        <WhyUs />
        <Comparison />
        <Stats />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* NAV */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary-gradient text-primary-foreground shadow-soft">
            <span className="text-sm font-bold">V7</span>
          </div>
          <span className="text-[15px] font-semibold tracking-tight">Version Seven</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {["Product", "Solutions", "Pricing", "Customers", "Resources"].map((l) => (
            <a key={l} href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#" className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline">
            Sign in
          </a>
          <a
            href="#cta"
            className="group inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-elevated hover:-translate-y-px"
          >
            Book a demo
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* HERO */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pb-24 pt-16 sm:pt-24">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur-sm animate-fade-up"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary" />
            New · Proof-First Outbound is live
            <ChevronRight className="h-3 w-3" />
          </a>
          <h1
            className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl animate-fade-up"
            style={{ animationDelay: "60ms" }}
          >
            Enterprise AI that books <span className="text-gradient">5x more meetings</span>
          </h1>
          <p
            className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Victoria is your AI SDR. She personalizes every message across LinkedIn and email,
            responds to replies, and follows up until the meeting is booked — so your team can focus on closing.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up" style={{ animationDelay: "180ms" }}>
            <a
              href="#cta"
              className="group inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-elevated transition-all hover:-translate-y-px hover:shadow-glow sm:w-auto"
            >
              Book a demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#features"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border bg-white px-5 py-3 text-sm font-medium text-foreground shadow-soft transition-all hover:bg-muted sm:w-auto"
            >
              See how it works
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground animate-fade-up" style={{ animationDelay: "240ms" }}>
            ✓ First month $10 · ✓ Live in 5 minutes · ✓ Cancel anytime
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-6xl animate-fade-up" style={{ animationDelay: "300ms" }}>
          <div className="absolute -inset-x-8 -top-8 bottom-0 -z-10 rounded-[3rem] bg-primary-gradient opacity-10 blur-3xl" />
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-elevated ring-1 ring-black/5">
            <img src={heroDashboard} alt="Version Seven AI outbound dashboard" width={1600} height={1104} className="h-auto w-full" />
          </div>
          <div className="pointer-events-none absolute -left-2 top-1/4 hidden animate-float rounded-xl border border-border bg-white/95 p-3 shadow-elevated backdrop-blur-md sm:block">
            <div className="flex items-center gap-2.5">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
                <CalendarCheck className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold">Meeting booked</p>
                <p className="text-[10px] text-muted-foreground">+1 just now</p>
              </div>
            </div>
          </div>
          <div
            className="pointer-events-none absolute -right-2 top-1/3 hidden animate-float rounded-xl border border-border bg-white/95 p-3 shadow-elevated backdrop-blur-md sm:block"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="flex items-center gap-2.5">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary-soft text-primary">
                <MessageSquare className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold">New reply</p>
                <p className="text-[10px] text-muted-foreground">Sarah C. · "Tuesday works"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* TRUSTED BY */
function TrustedBy() {
  const logos = ["ACME CORP", "NORTHWIND", "STEEL & SONS", "SUMMIT", "INITECH", "GLOBEX", "UMBRELLA"];
  return (
    <section className="border-y border-border bg-surface py-14">
      <div className="container-page">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by high-performance revenue teams
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-7">
          {logos.map((l) => (
            <div key={l} className="text-center text-sm font-bold tracking-wider text-muted-foreground/70 transition-colors hover:text-foreground">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* FEATURES */
function Features() {
  const items = [
    { icon: Bot, title: "AI SDR that thinks", desc: "Victoria writes hyper-personalized outreach, understands replies, and books meetings without human touch." },
    { icon: Linkedin, title: "LinkedIn + Email in one", desc: "Unified multichannel sequences that reach prospects where they actually respond." },
    { icon: Workflow, title: "Automated follow-ups", desc: "Every conversation stays warm with intelligent follow-up cadences until the meeting is booked." },
    { icon: BarChart3, title: "Real-time analytics", desc: "Track reply rates, meetings booked, and pipeline generated across every campaign." },
    { icon: Shield, title: "Enterprise-grade security", desc: "SOC 2 Type II, GDPR, and role-based access — built for teams that can't compromise." },
    { icon: Globe2, title: "Global data enrichment", desc: "Access verified contacts across 200M+ profiles with intent signals and firmographics." },
  ];
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Product</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Everything your SDR team wishes they had</h2>
          <p className="mt-4 text-muted-foreground">One AI-native platform to replace the tangle of tools your team stitches together today.</p>
        </div>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
              <div className="absolute inset-0 -z-10 bg-primary-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03]" />
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary ring-1 ring-primary/10">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SHOWCASE */
function Showcase() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="container-page space-y-24 sm:space-y-32">
        <ShowcaseRow
          eyebrow="Conversations"
          title="Every reply, handled intelligently"
          desc="Victoria classifies intent, drafts contextual responses, and hands warm leads directly to your sellers with full conversation history."
          bullets={["Sentiment-aware reply detection", "Auto-draft or fully autonomous modes", "Instant handoff with context"]}
          image={showcase1}
        />
        <ShowcaseRow
          reverse
          eyebrow="Workflows"
          title="Build enterprise automations without code"
          desc="Compose multi-step AI workflows — triage, enrich, route, respond — with a visual builder your ops team will actually use."
          bullets={["Drag-and-drop workflow builder", "Native integrations with 100+ tools", "Custom AI prompts per branch"]}
          image={showcase2}
        />
      </div>
    </section>
  );
}
function ShowcaseRow({ eyebrow, title, desc, bullets, image, reverse }: { eyebrow: string; title: string; desc: string; bullets: string[]; image: string; reverse?: boolean }) {
  return (
    <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
        <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h3>
        <p className="mt-4 text-muted-foreground">{desc}</p>
        <ul className="mt-6 space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                <Check className="h-3 w-3" />
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <a href="#cta" className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
      <div className="relative">
        <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary-gradient opacity-[0.08] blur-2xl" />
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-elevated ring-1 ring-black/5">
          <img src={image} alt={title} width={1400} height={1008} loading="lazy" className="h-auto w-full" />
        </div>
      </div>
    </div>
  );
}

/* WHY US */
function WhyUs() {
  const items = [
    { icon: Shield, title: "Enterprise security", desc: "SOC 2 Type II & GDPR compliant." },
    { icon: Zap, title: "Sub-second latency", desc: "Real-time AI responses at scale." },
    { icon: Globe2, title: "Global infrastructure", desc: "99.99% uptime SLA guaranteed." },
    { icon: Sparkles, title: "Proprietary AI models", desc: "Fine-tuned on billions of messages." },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Why Version Seven</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Built for the way modern revenue teams operate</h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
              <i.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-sm font-semibold">{i.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* COMPARISON */
function Comparison() {
  const traditional = ["Manual research per prospect", "Generic copy-paste templates", "Missed follow-ups & cold replies", "Weeks to launch a campaign", "Fragmented tools & handoffs"];
  const v7 = ["AI-personalized at scale", "Custom messaging for every prospect", "Autonomous replies & follow-ups", "Live in 5 minutes", "One unified platform"];
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">The upgrade</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Old outbound vs. Version Seven</h2>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
              Traditional outbound
            </div>
            <ul className="mt-6 space-y-4">
              {traditional.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl border border-primary/20 bg-card p-8 shadow-elevated">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-primary-gradient opacity-[0.04]" />
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Version Seven
            </div>
            <ul className="mt-6 space-y-4">
              {v7.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm font-medium">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3 w-3" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* STATS */
function Stats() {
  const stats = [
    { value: 5, suffix: "x", label: "More meetings booked" },
    { value: 70, suffix: "%", label: "LinkedIn acceptance rate" },
    { value: 80, suffix: "%", label: "Positive reply rate" },
    { value: 99.99, suffix: "%", label: "Uptime SLA" },
  ];
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="grid gap-8 rounded-3xl border border-border bg-card p-10 shadow-soft sm:grid-cols-2 lg:grid-cols-4 lg:p-14">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold tracking-tight sm:text-5xl">
                <Counter to={s.value} />
                {s.suffix}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Counter({ to }: { to: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1400;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  const display = to % 1 === 0 ? Math.round(n) : n.toFixed(2);
  return <span ref={ref}>{display}</span>;
}

/* TESTIMONIALS */
function Testimonials() {
  const items = [
    { quote: "Victoria has driven an 80% increase in our leads. The speed leads start coming in lets our sales team work way faster.", name: "Nick Marblestone", role: "COO at Steel & Sons", initials: "NM" },
    { quote: "We closed a $40k deal in the first month. Version Seven pays for itself many times over — it's not close.", name: "Elena Ruiz", role: "Head of Sales at Summit Growth", initials: "ER" },
    { quote: "The best AI SDR platform we've evaluated. Enterprise-ready with a level of polish we haven't seen elsewhere.", name: "David Chen", role: "VP Revenue at Northwind", initials: "DC" },
  ];
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Loved by revenue teams</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Real results, from day one</h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-gradient text-sm font-semibold text-primary-foreground">
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{t.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* FAQ */
function FAQ() {
  const items = [
    { q: "How quickly can we go live?", a: "Most teams launch their first campaign in under 5 minutes. Our onboarding specialists help enterprise teams roll out across the org in days, not months." },
    { q: "Is Version Seven enterprise-secure?", a: "Yes. We're SOC 2 Type II certified, GDPR compliant, and offer SSO, role-based access controls, and dedicated infrastructure for enterprise plans." },
    { q: "Which channels does the AI SDR run?", a: "LinkedIn and email today, with SMS and voice on the roadmap. Everything runs from a single unified inbox." },
    { q: "How does pricing work for enterprise teams?", a: "We offer flexible seat-based and usage-based pricing. Book a demo and our team will scope a plan that fits your motion." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Answers, up front</h2>
          </div>
          <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={it.q}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-4 p-6 text-left transition-colors hover:bg-muted/40"
                >
                  <div className="min-w-0">
                    <p className="text-[15px] font-semibold">{it.q}</p>
                    {isOpen && <p className="mt-3 text-sm leading-relaxed text-muted-foreground animate-fade-up">{it.a}</p>}
                  </div>
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground">
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* FINAL CTA */
function FinalCTA() {
  return (
    <section id="cta" className="pb-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-primary-gradient px-8 py-16 text-center shadow-glow sm:px-16 sm:py-24">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 0%, rgba(255,255,255,0.3), transparent 50%), radial-gradient(circle at 80% 100%, rgba(255,255,255,0.2), transparent 50%)",
            }}
          />
          <div className="relative mx-auto max-w-2xl text-primary-foreground">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Ready to book 5x more meetings?</h2>
            <p className="mt-4 text-primary-foreground/85">
              Talk to our team about deploying Version Seven across your revenue org. Live demo, custom scoping, and pricing built for enterprise.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="group inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary shadow-soft transition-all hover:-translate-y-px sm:w-auto"
              >
                Book a demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
              >
                Contact sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* FOOTER */
function Footer() {
  const cols = [
    { title: "Product", links: ["Features", "Integrations", "Pricing", "Changelog", "Roadmap"] },
    { title: "Company", links: ["About", "Customers", "Careers", "Press", "Contact"] },
    { title: "Resources", links: ["Docs", "Blog", "Guides", "Help center", "API"] },
    { title: "Legal", links: ["Privacy", "Terms", "Security", "DPA", "Cookies"] },
  ];
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary-gradient text-primary-foreground shadow-soft">
                <span className="text-sm font-bold">V7</span>
              </div>
              <span className="font-semibold tracking-tight">Version Seven</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Enterprise AI SDR that books 5x more meetings across LinkedIn and email.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex max-w-sm items-center gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  required
                  placeholder="Work email"
                  className="w-full rounded-lg border border-border bg-white py-2.5 pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button type="submit" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-elevated">
                Subscribe
              </button>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground">{c.title}</p>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Version Seven. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              All systems operational
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-2.5 py-1">
              SOC 2 Type II
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
