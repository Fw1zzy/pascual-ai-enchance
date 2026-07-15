import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, Section, FAQ } from "@/components/site/sections";

export const Route = createFileRoute("/resources/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Pascual.ai" },
      {
        name: "description",
        content:
          "Answers to the most common questions about the Pascual.ai platform, security, pricing and support.",
      },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="Resources · FAQ"
        title="Frequently asked questions"
        description="Everything you might want to know about Pascual.ai — platform, security, pricing and support."
      />
      <Section>
        <FAQ
          items={[
            {
              q: "What does Pascual.ai actually do?",
              a: "We're an enterprise AI platform and delivery partner. We build AI agents, automation, custom software, cloud platforms and data systems for large organizations.",
            },
            {
              q: "How is Pascual.ai different from generic AI tools?",
              a: "We combine an enterprise-grade platform with senior delivery pods. You get the software and the team to make it work in your context.",
            },
            {
              q: "How secure is the platform?",
              a: "SOC 2 Type II, ISO 27001, GDPR and HIPAA compliant. SSO, SCIM, RBAC and audit logs. Private and on-prem deployment available.",
            },
            {
              q: "What integrations do you support?",
              a: "100+ native integrations across CRMs, ERPs, cloud data warehouses, messaging and identity — plus custom connectors on request.",
            },
            {
              q: "How does pricing work?",
              a: "Three tiers: Starter, Growth and Enterprise. Enterprise pricing is scoped to your usage and security requirements.",
            },
            {
              q: "How quickly can we get to production?",
              a: "Most teams launch a first use case within 4-8 weeks.",
            },
            {
              q: "Do you support regulated industries?",
              a: "Yes. We have deep experience in finance, healthcare, government and other regulated sectors.",
            },
            {
              q: "Who owns the IP we build together?",
              a: "You do. Custom software, models and pipelines are yours with full source access.",
            },
          ]}
        />
      </Section>
    </SiteLayout>
  ),
});
