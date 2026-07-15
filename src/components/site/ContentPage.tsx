import type { LucideIcon } from "lucide-react";
import { SiteLayout } from "./SiteLayout";
import {
  PageHero,
  Section,
  SectionHeading,
  FeatureGrid,
  SplitBullets,
  StepList,
  Timeline,
  StatsBand,
  FAQ,
  CTASection,
  CardGrid,
  MockPanel,
  type Feature,
} from "./sections";

export type ContentPageConfig = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  heroAlign?: "center" | "left";

  features?: {
    heading?: string;
    subheading?: string;
    eyebrow?: string;
    items: Feature[];
    columns?: 2 | 3 | 4;
  };
  splits?: { eyebrow?: string; title: string; description?: string; bullets: string[] }[];
  steps?: { heading: string; eyebrow?: string; items: { title: string; desc: string }[] };
  timeline?: {
    heading: string;
    eyebrow?: string;
    items: { title: string; desc: string; tag?: string }[];
  };
  stats?: { heading?: string; items: { value: string; label: string }[] };
  cards?: {
    heading: string;
    eyebrow?: string;
    description?: string;
    items: { icon?: LucideIcon; title: string; desc: string; href?: string; tag?: string }[];
  };
  faqs?: { q: string; a: string }[];
  cta?: {
    title: string;
    description?: string;
    primary?: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
};

export function ContentPage(cfg: ContentPageConfig) {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={cfg.eyebrow}
        title={cfg.title}
        description={cfg.description}
        primary={cfg.primaryCTA ?? { label: "Book a demo", href: "/resources/contact" }}
        secondary={cfg.secondaryCTA ?? { label: "See pricing", href: "/pricing" }}
        align={cfg.heroAlign ?? "center"}
      />

      {cfg.features && (
        <Section>
          <SectionHeading
            eyebrow={cfg.features.eyebrow ?? "Capabilities"}
            title={cfg.features.heading ?? "Everything you need, one platform"}
            description={cfg.features.subheading}
          />
          <div className="mt-14">
            <FeatureGrid items={cfg.features.items} columns={cfg.features.columns} />
          </div>
        </Section>
      )}

      {cfg.splits?.map((s, i) => (
        <Section key={s.title} surface={i % 2 === 0}>
          <SplitBullets
            eyebrow={s.eyebrow}
            title={s.title}
            description={s.description}
            bullets={s.bullets}
            reverse={i % 2 === 1}
            visual={<MockPanel label={s.eyebrow ?? "Pascual.ai"} />}
          />
        </Section>
      ))}

      {cfg.steps && (
        <Section surface>
          <SectionHeading eyebrow={cfg.steps.eyebrow ?? "How it works"} title={cfg.steps.heading} />
          <div className="mt-14">
            <StepList steps={cfg.steps.items} />
          </div>
        </Section>
      )}

      {cfg.timeline && (
        <Section>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              align="left"
              eyebrow={cfg.timeline.eyebrow ?? "Process"}
              title={cfg.timeline.heading}
            />
            <div className="mt-10">
              <Timeline items={cfg.timeline.items} />
            </div>
          </div>
        </Section>
      )}

      {cfg.stats && (
        <Section>
          {cfg.stats.heading && <SectionHeading title={cfg.stats.heading} />}
          <div className={cfg.stats.heading ? "mt-10" : ""}>
            <StatsBand items={cfg.stats.items} />
          </div>
        </Section>
      )}

      {cfg.cards && (
        <Section surface>
          <SectionHeading
            eyebrow={cfg.cards.eyebrow}
            title={cfg.cards.heading}
            description={cfg.cards.description}
          />
          <div className="mt-14">
            <CardGrid items={cfg.cards.items} />
          </div>
        </Section>
      )}

      {cfg.faqs && (
        <Section>
          <SectionHeading eyebrow="FAQ" title="Frequently asked" />
          <div className="mt-10">
            <FAQ items={cfg.faqs} />
          </div>
        </Section>
      )}

      <CTASection
        title={cfg.cta?.title ?? "Ready to see Pascual.ai in action?"}
        description={
          cfg.cta?.description ??
          "Book a personalized demo and see how leading teams deploy enterprise AI in weeks, not quarters."
        }
        primary={cfg.cta?.primary ?? { label: "Book a demo", href: "/resources/contact" }}
        secondary={cfg.cta?.secondary ?? { label: "Contact sales", href: "/company/contact" }}
      />
    </SiteLayout>
  );
}
