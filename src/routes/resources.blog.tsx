import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, Section, CardGrid } from "@/components/site/sections";
import { blogPosts } from "@/components/site/page-configs";
import { BookOpen } from "lucide-react";

export const Route = createFileRoute("/resources/blog")({
  head: () => ({ meta: [{ title: "Blog — Pascual.ai" }, { name: "description", content: "Insights, engineering, governance and case studies from the Pascual.ai team." }] }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Resources · Blog" title="Insights from the Pascual.ai team" description="Deep dives on enterprise AI, engineering practices, governance and real-world customer outcomes." />
      <Section>
        <CardGrid items={blogPosts.map((p) => ({ icon: BookOpen, title: p.title, desc: p.desc, tag: p.tag, href: "#" }))} />
      </Section>
    </SiteLayout>
  ),
});
