import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, Section, CardGrid } from "@/components/site/sections";
import { HelpCircle, Zap, Shield, Users, Settings2, Plug } from "lucide-react";

export const Route = createFileRoute("/resources/help-center")({
  head: () => ({
    meta: [
      { title: "Help Center — Pascual.ai" },
      { name: "description", content: "Guides, how-tos and support for the Pascual.ai platform." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="Resources · Help"
        title="How can we help?"
        description="Browse guides and how-tos or reach out to our support team any time."
      />
      <Section>
        <CardGrid
          items={[
            {
              icon: Zap,
              title: "Onboarding",
              desc: "Everything you need to launch your first project.",
              href: "#",
            },
            {
              icon: Users,
              title: "Users & permissions",
              desc: "Manage teams, roles and access.",
              href: "#",
            },
            {
              icon: Settings2,
              title: "Admin & billing",
              desc: "Workspace settings, billing and invoices.",
              href: "#",
            },
            {
              icon: Plug,
              title: "Integrations",
              desc: "Set up and troubleshoot integrations.",
              href: "#",
            },
            {
              icon: Shield,
              title: "Security",
              desc: "SSO, SCIM and audit configuration.",
              href: "#",
            },
            {
              icon: HelpCircle,
              title: "Contact support",
              desc: "Reach a human 24/7.",
              href: "/resources/contact",
            },
          ]}
        />
      </Section>
    </SiteLayout>
  ),
});
