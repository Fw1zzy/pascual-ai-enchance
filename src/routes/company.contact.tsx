import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, Section } from "@/components/site/sections";
import { ContactForm } from "@/components/site/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

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
          <ContactForm />
          <aside className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "emmanuelpascua.ph@gmail.com" },
              { icon: Phone, label: "Phone", value: "+1 (555) 010-2026" },
              { icon: MapPin, label: "HQ", value: "San Francisco · London · Singapore" },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary ring-1 ring-primary/10">
                  <c.icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.label}</p>
                <p className="mt-1 text-sm font-medium break-all">{c.value}</p>
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
