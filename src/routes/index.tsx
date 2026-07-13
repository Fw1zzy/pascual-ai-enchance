import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Sparkles, Zap, Shield, BarChart3, Workflow, Globe2, Bot, Check, X, Star,
  ChevronRight, Cpu, Layers, Cloud, Database, Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MockPanel } from "@/components/site/sections";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import showcase1 from "@/assets/showcase-1.jpg";
import showcase2 from "@/assets/showcase-2.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <SiteLayout>
      <Hero />
      <TrustedBy />
      <Pillars />
      <Features />
      <Showcase />
      <Industries />
      <Comparison />
      <Stats />
      <Testimonials />
      <FinalCTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pb-24 pt-16 sm:pt-24">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <Link to="/products/enterprise-ai-solutions" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur-sm animate-fade-up">
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary" />
            New · Pascual.ai Enterprise AI Platform
            <ChevronRight className="h-3 w-3" />
          </Link>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl animate-fade-up" style={{ animationDelay: "60ms" }}>
            Enterprise AI that <span className="text-gradient">transforms how you operate</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg animate-fade-up" style={{ animationDelay: "120ms" }}>
            Pascual.ai builds AI agents, custom software, cloud platforms and data systems for the world's most demanding organizations — designed, engineered and deployed as one enterprise-grade stack.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up" style={{ animationDelay: "180ms" }}>
            <Link to="/resources/contact" className="group inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-elevated transition-all hover:-translate-y-px hover:shadow-glow sm:w-auto">
              Book a demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link to="/products/enterprise-ai-solutions" className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border bg-white px-5 py-3 text-sm font-medium text-foreground shadow-soft transition-all hover:bg-muted sm:w-auto">
              Explore the platform
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-6xl animate-fade-up" style={{ animationDelay: "300ms" }}>
          <div className="absolute -inset-x-8 -top-8 bottom-0 -z-10 rounded-[3rem] bg-primary-gradient opacity-10 blur-3xl" />
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-elevated ring-1 ring-black/5">
            <img src={heroDashboard} alt="Pascual.ai enterprise AI console" width={1600} height={1104} className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  const logos = ["ATLASCORP", "NORTHWIND", "STELLARIS", "SUMMITBANK", "INITECH", "GLOBEX", "UMBRELLA"];
  return (
    <section className="border-y border-border bg-surface py-14">
      <div className="container-page">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by enterprise teams across industries
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

function Pillars() {
  const items = [
    { icon: Bot, title: "AI Solutions", desc: "Agents, automation & custom AI models built for enterprise scale.", href: "/products/enterprise-ai-solutions" },
    { icon: Layers, title: "Software Solutions", desc: "Web, mobile and SaaS platforms engineered end-to-end.", href: "/products/saas-platforms" },
    { icon: Cloud, title: "Cloud & Infrastructure", desc: "Cloud integration, APIs, DevOps and system architecture.", href: "/products/cloud-integration" },
    { icon: Database, title: "Data & Analytics", desc: "BI, analytics and AI insights that drive decisions.", href: "/products/business-intelligence" },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">The platform</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">One enterprise stack. Four pillars.</h2>
          <p className="mt-4 text-muted-foreground">Pascual.ai unifies AI, software, cloud and data so leaders can move faster without stitching together vendors.</p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f) => (
            <Link to={f.href} key={f.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
              <div className="absolute inset-0 -z-10 bg-primary-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03]" />
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary ring-1 ring-primary/10">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: Cpu, title: "AI Agents", desc: "Autonomous, tool-using agents that execute real work across your stack." },
    { icon: Workflow, title: "Automation", desc: "Composable workflows that eliminate repetitive operations across teams." },
    { icon: BarChart3, title: "Analytics", desc: "Real-time BI and predictive insights baked into every product surface." },
    { icon: Shield, title: "Enterprise security", desc: "SOC 2 Type II, ISO 27001, GDPR, HIPAA and SSO out of the box." },
    { icon: Globe2, title: "Global infrastructure", desc: "99.99% uptime SLA on multi-region cloud with edge acceleration." },
    { icon: Users, title: "Expert delivery", desc: "Senior AI, product and engineering pods embedded with your team." },
  ];
  return (
    <section id="features" className="bg-surface py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Capabilities</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Everything modern enterprises need</h2>
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

function Showcase() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page space-y-24 sm:space-y-32">
        <Row
          eyebrow="AI Agents"
          title="Agents that do the work, not just answer"
          desc="Deploy production-grade AI agents that reason, use tools, take actions across systems and hand off to humans with full context."
          bullets={["Tool-using autonomous execution", "Grounded on your enterprise data", "Human-in-the-loop when it matters"]}
          image={showcase1}
        />
        <Row
          reverse
          eyebrow="Enterprise Automation"
          title="Workflow orchestration without the fragility"
          desc="Compose AI-powered workflows in a visual builder your ops team can own — with observability, versioning and rollbacks."
          bullets={["Drag-and-drop workflow builder", "100+ native integrations", "Full audit trail & governance"]}
          image={showcase2}
        />
      </div>
    </section>
  );
}
function Row({ eyebrow, title, desc, bullets, image, reverse }: { eyebrow: string; title: string; desc: string; bullets: string[]; image: string; reverse?: boolean }) {
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

function Industries() {
  const items = [
    { name: "Healthcare", href: "/solutions/healthcare" },
    { name: "Finance", href: "/solutions/finance" },
    { name: "Retail", href: "/solutions/retail" },
    { name: "Manufacturing", href: "/solutions/manufacturing" },
    { name: "Logistics", href: "/solutions/logistics" },
    { name: "Education", href: "/solutions/education" },
    { name: "Government", href: "/solutions/government" },
    { name: "Enterprise", href: "/solutions/enterprise" },
  ];
  return (
    <section className="bg-surface py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Industries</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Built for the industries you lead</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((i) => (
            <Link key={i.name} to={i.href} className="group flex items-center justify-between rounded-xl border border-border bg-card px-4 py-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated">
              <span className="text-sm font-semibold">{i.name}</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  const traditional = ["Vendor sprawl & handoffs", "Months to ship AI features", "Brittle prototypes in production", "Compliance gaps", "Unclear ROI"];
  const p = ["One integrated platform", "Live use cases in weeks", "Enterprise-grade from day one", "SOC 2, HIPAA, GDPR built-in", "Measured business outcomes"];
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">The upgrade</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Legacy IT vs. Pascual.ai</h2>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-muted-foreground/40" /> Traditional approach
            </div>
            <ul className="mt-6 space-y-4">
              {traditional.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl border border-primary/20 bg-card p-8 shadow-elevated">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-primary-gradient opacity-[0.04]" />
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" /> Pascual.ai
            </div>
            <ul className="mt-6 space-y-4">
              {p.map((t) => (
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

function Stats() {
  const stats = [
    { value: 4, suffix: "x", label: "Faster time-to-value", icon: Zap, tint: "from-blue-500/15 to-blue-500/0" },
    { value: 60, suffix: "%", label: "Ops cost reduction", icon: BarChart3, tint: "from-emerald-500/15 to-emerald-500/0" },
    { value: 200, suffix: "+", label: "Enterprise deployments", icon: Layers, tint: "from-violet-500/15 to-violet-500/0" },
    { value: 99.99, suffix: "%", label: "Uptime SLA", icon: Shield, tint: "from-amber-500/15 to-amber-500/0" },
  ];
  return (
    <section className="relative overflow-hidden bg-surface py-24">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>

      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="h-3 w-3" /> By the numbers
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Enterprise outcomes, measured in weeks — not quarters
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Real results from teams deploying Pascual.ai across AI, software, cloud & data.
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-border/70 bg-white/70 p-2 shadow-elevated ring-1 ring-black/5 backdrop-blur">
          <div className="grid gap-px overflow-hidden rounded-[calc(1.5rem-4px)] bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="group relative overflow-hidden bg-card p-8 transition-colors hover:bg-white"
              >
                <div
                  className={`pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br ${s.tint} opacity-70 blur-2xl transition-opacity group-hover:opacity-100`}
                />
                <div className="relative flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary ring-1 ring-primary/15 shadow-soft">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="relative mt-8 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
                  <Counter to={s.value} />
                  <span className="text-primary">{s.suffix}</span>
                </p>
                <p className="relative mt-3 text-sm font-medium text-muted-foreground">{s.label}</p>
                <div className="relative mt-6 h-1 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-2/3 rounded-full bg-primary-gradient shadow-[0_0_12px_rgba(59,130,246,0.55)] transition-all duration-700 group-hover:w-full" />
                </div>
              </div>
            ))}
          </div>
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
    const io = new IntersectionObserver(([e]) => {
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
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  const display = to % 1 === 0 ? Math.round(n) : n.toFixed(2);
  return <span ref={ref}>{display}</span>;
}

function Testimonials() {
  const items = [
    { quote: "Pascual.ai delivered our AI automation platform in eight weeks. We projected six months.", name: "Nick Marblestone", role: "COO, Steel & Sons", initials: "NM" },
    { quote: "Their agent framework is doing work our team simply couldn't scale to before.", name: "Elena Ruiz", role: "Head of Operations, Summit Health", initials: "ER" },
    { quote: "The most enterprise-ready AI partner we've evaluated — governance, security and speed.", name: "David Chen", role: "VP Engineering, Northwind", initials: "DC" },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Loved by teams</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Real outcomes, from day one</h2>
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

function FinalCTA() {
  return (
    <section id="cta" className="pb-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-primary-gradient px-8 py-16 text-center shadow-glow sm:px-16 sm:py-24">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 0%, rgba(255,255,255,0.3), transparent 50%), radial-gradient(circle at 80% 100%, rgba(255,255,255,0.2), transparent 50%)" }} />
          <div className="relative mx-auto max-w-2xl text-primary-foreground">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Ready to deploy enterprise AI?</h2>
            <p className="mt-4 text-primary-foreground/85">Talk to our team about your AI, software or cloud initiative. Live demo, custom scoping, and pricing built for enterprise.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/resources/contact" className="group inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary shadow-soft transition-all hover:-translate-y-px sm:w-auto">
                Book a demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/pricing" className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto">
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
