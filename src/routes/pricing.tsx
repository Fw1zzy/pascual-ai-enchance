import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, Section, SectionHeading, FAQ } from "@/components/site/sections";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Pascual.ai" },
      { name: "description", content: "Flexible plans for teams of every size — from growing companies to global enterprises." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  { name: "Starter", price: "$1,500", unit: "/mo", desc: "For teams starting their AI journey.", features: ["Up to 10 users", "Core automation & agents", "Email support", "Standard integrations"], cta: "Start free trial" },
  { name: "Growth", price: "$4,900", unit: "/mo", desc: "For scaling product & ops teams.", features: ["Up to 50 users", "Advanced agents & workflows", "Priority support", "All integrations", "SSO"], cta: "Book a demo", featured: true },
  { name: "Enterprise", price: "Custom", unit: "", desc: "For global organizations.", features: ["Unlimited users", "Dedicated deployment", "24/7 support & CSM", "SSO, SCIM, audit", "SOC 2 / HIPAA / ISO"], cta: "Contact sales" },
];

const comparison = [
  { section: "Platform", rows: [["Users included", "10", "50", "Unlimited"], ["Agents & workflows", "Core", "Advanced", "Advanced + custom"], ["Integrations", "Standard", "All", "All + custom"]] },
  { section: "Security & Compliance", rows: [["SSO", "—", "✓", "✓"], ["SCIM provisioning", "—", "—", "✓"], ["SOC 2 / ISO / HIPAA", "—", "SOC 2", "All"], ["Audit logs", "30 days", "1 year", "Custom"]] },
  { section: "Support", rows: [["Support channel", "Email", "Priority", "24/7 + CSM"], ["Uptime SLA", "99.9%", "99.95%", "99.99%"]] },
];

function PricingPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Pricing" title="Plans that scale with you" description="Flexible pricing built for teams of every size. Enterprise plans include dedicated deployment, security review and 24/7 support." primary={{ label: "Contact sales", href: "/resources/contact" }} secondary={{ label: "See enterprise", href: "/products/enterprise-ai-solutions" }} />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`relative flex flex-col rounded-3xl border p-8 shadow-soft ${t.featured ? "border-primary/30 bg-card shadow-elevated ring-1 ring-primary/10" : "border-border bg-card"}`}>
              {t.featured && <span className="absolute -top-3 left-8 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">Most popular</span>}
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              <p className="mt-6"><span className="text-4xl font-bold tracking-tight">{t.price}</span><span className="text-sm text-muted-foreground">{t.unit}</span></p>
              <ul className="mt-6 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{f}</li>
                ))}
              </ul>
              <Link to="/resources/contact" className={`mt-8 inline-flex items-center justify-center gap-1.5 rounded-lg px-5 py-3 text-sm font-medium transition-all ${t.featured ? "bg-primary text-primary-foreground shadow-soft hover:shadow-elevated" : "border border-border bg-white text-foreground hover:bg-muted"}`}>
                {t.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>
      <Section surface>
        <SectionHeading eyebrow="Compare plans" title="Features side by side" />
        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          <table className="w-full text-sm">
            <thead className="bg-surface text-left">
              <tr>{["Feature", "Starter", "Growth", "Enterprise"].map((h) => <th key={h} className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{h}</th>)}</tr>
            </thead>
            <tbody>
              {comparison.map((s) => (
                <><tr key={s.section} className="border-t border-border bg-muted/30"><td colSpan={4} className="px-6 py-3 text-xs font-semibold uppercase tracking-widest text-primary">{s.section}</td></tr>
                {s.rows.map((r, i) => <tr key={s.section + i} className="border-t border-border"><td className="px-6 py-3 font-medium">{r[0]}</td><td className="px-6 py-3 text-muted-foreground">{r[1]}</td><td className="px-6 py-3 text-muted-foreground">{r[2]}</td><td className="px-6 py-3 text-muted-foreground">{r[3]}</td></tr>)}</>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Section>
        <SectionHeading eyebrow="FAQ" title="Pricing questions" />
        <div className="mt-10">
          <FAQ items={[
            { q: "Can I switch plans later?", a: "Yes, you can move between plans any time. We'll prorate the difference." },
            { q: "Do you offer custom enterprise pricing?", a: "Yes — Enterprise plans are scoped to your usage, security and support requirements." },
            { q: "Is there a free trial?", a: "Starter includes a 14-day free trial. Growth & Enterprise start with a live guided demo." },
            { q: "How does support work?", a: "Starter includes email support, Growth adds priority response, Enterprise includes 24/7 and a dedicated CSM." },
          ]} />
        </div>
      </Section>
    </SiteLayout>
  );
}
