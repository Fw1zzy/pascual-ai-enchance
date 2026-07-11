import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, Section } from "@/components/site/sections";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/company/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pascual.ai" },
      { name: "description", content: "Talk to the Pascual.ai team about your enterprise AI, software or cloud initiative." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Let's talk about your project" description="Tell us a bit about your organization and what you're trying to achieve. A senior member of our team will reply within one business day." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First name" />
              <Field label="Last name" />
              <Field label="Work email" type="email" />
              <Field label="Company" />
              <Field label="Job title" />
              <Field label="Team size">
                <select className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option>1-50</option><option>51-250</option><option>251-1000</option><option>1000+</option>
                </select>
              </Field>
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-semibold text-foreground">How can we help?</label>
              <textarea rows={5} className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
            <button type="submit" className="group mt-6 inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-px hover:shadow-elevated">
              Send message <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
          <aside className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "hello@pascual.ai" },
              { icon: Phone, label: "Phone", value: "+1 (555) 010-2026" },
              { icon: MapPin, label: "HQ", value: "San Francisco · London · Singapore" },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary ring-1 ring-primary/10">
                  <c.icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.label}</p>
                <p className="mt-1 text-sm font-medium">{c.value}</p>
              </div>
            ))}
            <Link to="/pricing" className="block rounded-2xl border border-primary/20 bg-primary-soft p-6 shadow-soft transition-all hover:-translate-y-0.5">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Pricing</p>
              <p className="mt-1 text-sm font-medium">See enterprise packages →</p>
            </Link>
          </aside>
        </div>
      </Section>
    </SiteLayout>
  );
}

function Field({ label, type = "text", children }: { label: string; type?: string; children?: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-foreground">{label}</span>
      {children ?? <input type={type} className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />}
    </label>
  );
}
