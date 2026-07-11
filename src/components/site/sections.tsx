import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Plus, Minus, type LucideIcon } from "lucide-react";
import { useState, type ReactNode } from "react";

/* ---------- Page shell ---------- */
export function PageShell({ children }: { children: ReactNode }) {
  return <main className="min-h-screen bg-background text-foreground antialiased">{children}</main>;
}

/* ---------- PageHero ---------- */
export function PageHero({
  eyebrow, title, description, primary, secondary, align = "center",
}: {
  eyebrow?: string; title: ReactNode; description?: string;
  primary?: { label: string; href: string }; secondary?: { label: string; href: string };
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <section className="relative overflow-hidden bg-hero-gradient pb-16 pt-16 sm:pb-24 sm:pt-24">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="container-page relative">
        <div className={`${alignCls} max-w-3xl`}>
          {eyebrow && (
            <p className="animate-fade-up text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
          )}
          <h1 className="mt-4 animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" style={{ animationDelay: "60ms" }}>
            {title}
          </h1>
          {description && (
            <p className={`mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg animate-fade-up ${align === "center" ? "mx-auto" : ""}`} style={{ animationDelay: "120ms" }}>
              {description}
            </p>
          )}
          {(primary || secondary) && (
            <div className={`mt-8 flex flex-col gap-3 sm:flex-row ${align === "center" ? "justify-center" : ""} animate-fade-up`} style={{ animationDelay: "180ms" }}>
              {primary && (
                <Link to={primary.href} className="group inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-elevated transition-all hover:-translate-y-px hover:shadow-glow">
                  {primary.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
              {secondary && (
                <Link to={secondary.href} className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-white px-5 py-3 text-sm font-medium text-foreground shadow-soft transition-all hover:bg-muted">
                  {secondary.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section wrapper ---------- */
export function Section({ children, className = "", surface = false, id }: { children: ReactNode; className?: string; surface?: boolean; id?: string }) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${surface ? "bg-surface" : ""} ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "center" }: { eyebrow?: string; title: ReactNode; description?: string; align?: "center" | "left" }) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : "text-left"} max-w-2xl`}>
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground">{description}</p>}
    </div>
  );
}

/* ---------- Feature grid ---------- */
export type Feature = { icon?: LucideIcon; title: string; desc: string };
export function FeatureGrid({ items, columns = 3 }: { items: Feature[]; columns?: 2 | 3 | 4 }) {
  const cols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[columns];
  return (
    <div className={`grid gap-5 ${cols}`}>
      {items.map((f) => (
        <div key={f.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
          <div className="absolute inset-0 -z-10 bg-primary-gradient opacity-0 transition-opacity group-hover:opacity-[0.03]" />
          {f.icon && (
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary ring-1 ring-primary/10">
              <f.icon className="h-5 w-5" />
            </div>
          )}
          <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- Bullet split ---------- */
export function SplitBullets({ eyebrow, title, description, bullets, reverse, visual }: {
  eyebrow?: string; title: string; description?: string; bullets: string[]; reverse?: boolean; visual?: ReactNode;
}) {
  return (
    <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <div>
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>}
        <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h3>
        {description && <p className="mt-4 text-muted-foreground">{description}</p>}
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
        {visual ?? <MockPanel />}
      </div>
    </div>
  );
}

/* ---------- Steps / Process ---------- */
export function StepList({ steps }: { steps: { title: string; desc: string }[] }) {
  return (
    <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.title} className="relative rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="mb-4 grid h-9 w-9 place-items-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground shadow-soft">{i + 1}</div>
          <h3 className="text-base font-semibold">{s.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Timeline ---------- */
export function Timeline({ items }: { items: { title: string; desc: string; tag?: string }[] }) {
  return (
    <ol className="relative border-l border-border pl-8">
      {items.map((it, i) => (
        <li key={i} className="relative pb-10 last:pb-0">
          <span className="absolute -left-[37px] top-1 grid h-6 w-6 place-items-center rounded-full border border-border bg-white text-[11px] font-semibold text-primary shadow-soft">{i + 1}</span>
          {it.tag && <p className="text-xs font-semibold uppercase tracking-widest text-primary">{it.tag}</p>}
          <h3 className="mt-1 text-lg font-semibold">{it.title}</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Stats band ---------- */
export function StatsBand({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="grid gap-8 rounded-3xl border border-border bg-card p-10 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s) => (
        <div key={s.label}>
          <p className="text-4xl font-bold tracking-tight sm:text-5xl">{s.value}</p>
          <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- FAQ ---------- */
export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <button key={it.q} onClick={() => setOpen(isOpen ? null : i)} className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-4 p-6 text-left transition-colors hover:bg-muted/40">
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
  );
}

/* ---------- CTA ---------- */
export function CTASection({ title, description, primary, secondary }: {
  title: string; description?: string; primary?: { label: string; href: string }; secondary?: { label: string; href: string };
}) {
  return (
    <section className="pb-24 pt-4">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-primary-gradient px-8 py-14 text-center shadow-glow sm:px-16 sm:py-20">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 0%, rgba(255,255,255,0.3), transparent 50%), radial-gradient(circle at 80% 100%, rgba(255,255,255,0.2), transparent 50%)",
            }}
          />
          <div className="relative mx-auto max-w-2xl text-primary-foreground">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
            {description && <p className="mt-4 text-primary-foreground/85">{description}</p>}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {primary && (
                <Link to={primary.href} className="group inline-flex items-center justify-center gap-1.5 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary shadow-soft transition-all hover:-translate-y-px">
                  {primary.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
              {secondary && (
                <Link to={secondary.href} className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20">
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Card grid (industries/resources) ---------- */
export function CardGrid({ items }: { items: { icon?: LucideIcon; title: string; desc: string; href?: string; tag?: string }[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => {
        const inner = (
          <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
            {c.tag && <span className="inline-flex rounded-full border border-border bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{c.tag}</span>}
            {c.icon && (
              <div className="mt-3 grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary ring-1 ring-primary/10">
                <c.icon className="h-5 w-5" />
              </div>
            )}
            <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            {c.href && (
              <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </p>
            )}
          </div>
        );
        return c.href ? <Link key={c.title} to={c.href}>{inner}</Link> : <div key={c.title}>{inner}</div>;
      })}
    </div>
  );
}

/* ---------- Decorative mock panel ---------- */
export function MockPanel({ label = "Pascual.ai Console" }: { label?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-elevated ring-1 ring-black/5">
      <div className="flex items-center gap-1.5 border-b border-border bg-surface px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-3 text-xs text-muted-foreground">{label}</span>
      </div>
      <div className="grid grid-cols-6 gap-4 p-6">
        <div className="col-span-2 space-y-2">
          {["Overview", "Workflows", "Agents", "Data", "Reports", "Settings"].map((l) => (
            <div key={l} className="rounded-md bg-muted/60 px-2 py-1.5 text-[11px] font-medium text-muted-foreground">{l}</div>
          ))}
        </div>
        <div className="col-span-4 space-y-3">
          <div className="grid grid-cols-3 gap-3">
            {[
              { v: "12.4k", l: "Runs" }, { v: "98.7%", l: "Success" }, { v: "312ms", l: "p95" },
            ].map((k) => (
              <div key={k.l} className="rounded-lg border border-border p-3">
                <p className="text-lg font-semibold">{k.v}</p>
                <p className="text-[10px] text-muted-foreground">{k.l}</p>
              </div>
            ))}
          </div>
          <div className="h-32 rounded-lg border border-border p-3">
            <div className="flex h-full items-end gap-1.5">
              {[40, 55, 38, 62, 70, 58, 78, 66, 82, 74, 90, 84].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-primary-gradient opacity-80" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="space-y-1.5">
            {["Enrichment pipeline · completed", "Agent handoff · in progress", "Data sync · scheduled"].map((r, i) => (
              <div key={i} className="flex items-center justify-between rounded-md bg-muted/50 px-3 py-2 text-[11px]">
                <span>{r}</span>
                <span className="rounded-full bg-white px-2 py-0.5 text-[10px] text-muted-foreground border border-border">just now</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
