import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, Section, SectionHeading, StatsBand, CardGrid } from "@/components/site/sections";
import { caseStudies } from "@/components/site/page-configs";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/resources/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Pascual.ai" },
      {
        name: "description",
        content:
          "How leading enterprises win with Pascual.ai — metrics, before/after and customer quotes.",
      },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="Resources · Case Studies"
        title="Real customers. Real outcomes."
        description="How leading enterprises deploy Pascual.ai — with the metrics, timelines and quotes to prove it."
      />
      <Section>
        <StatsBand
          items={[
            { value: "60%", label: "Average ops cost reduction" },
            { value: "4×", label: "Faster time-to-value" },
            { value: "95%", label: "Customer retention" },
            { value: "200+", label: "Enterprise programs" },
          ]}
        />
      </Section>
      <Section surface>
        <SectionHeading eyebrow="Featured" title="Case studies" />
        <div className="mt-14">
          <CardGrid
            items={caseStudies.map((c) => ({
              icon: FileText,
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
