import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, Section, CardGrid } from "@/components/site/sections";
import { BookOpen, Code2, Zap, Shield, Cloud, Plug } from "lucide-react";

export const Route = createFileRoute("/resources/documentation")({
  head: () => ({ meta: [{ title: "Documentation — Pascual.ai" }, { name: "description", content: "Developer and administrator documentation for the Pascual.ai platform." }] }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Resources · Docs" title="Developer & admin documentation" description="Guides, API references and administration docs to build, deploy and operate on Pascual.ai." />
      <Section>
        <CardGrid items={[
          { icon: Zap, title: "Getting started", desc: "Set up your first workspace in under 10 minutes.", href: "#" },
          { icon: Code2, title: "API reference", desc: "REST & GraphQL APIs with typed SDKs.", href: "#" },
          { icon: BookOpen, title: "Guides", desc: "How-to guides for the most common workflows.", href: "#" },
          { icon: Plug, title: "Integrations", desc: "Salesforce, Slack, Snowflake and 100+ more.", href: "#" },
          { icon: Shield, title: "Security & compliance", desc: "SOC 2, SSO, RBAC and audit logs.", href: "#" },
          { icon: Cloud, title: "Deployment", desc: "SaaS, VPC and self-hosted options.", href: "#" },
        ]} />
      </Section>
    </SiteLayout>
  ),
});
