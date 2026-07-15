import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, Section, SectionHeading, CardGrid } from "@/components/site/sections";
import { caseStudies } from "@/components/site/page-configs";
import { Trophy } from "lucide-react";

export const Route = createFileRoute("/resources/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Pascual.ai" },
      {
        name: "description",
        content:
          "Customer success stories from teams transforming their organizations with Pascual.ai.",
      },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="Resources · Success Stories"
        title="Outcomes our customers are proud of"
        description="Success stories from teams who chose Pascual.ai as their enterprise AI partner."
      />
      <Section>
        <SectionHeading eyebrow="Stories" title="Every story starts with a customer" />
        <div className="mt-14">
          <CardGrid
            items={caseStudies.map((c) => ({
              icon: Trophy,
              title: c.title,
              desc: c.desc,
              tag: c.tag,
              href: "#",
            }))}
          />
        </div>
      </Section>
    </SiteLayout>
  ),
});
