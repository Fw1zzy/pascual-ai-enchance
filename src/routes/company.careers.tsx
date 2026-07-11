import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, Section, SectionHeading, FeatureGrid, StepList } from "@/components/site/sections";
import { Heart, Globe2, Sparkles, Zap, Users, Shield, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/company/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Pascual.ai" },
      { name: "description", content: "Join Pascual.ai. Work with senior operators solving the hardest problems in enterprise AI." },
    ],
  }),
  component: CareersPage,
});

const roles = [
  { title: "Staff AI Engineer", team: "AI Research", location: "Remote / SF" },
  { title: "Senior Product Designer", team: "Design", location: "Remote / London" },
  { title: "Full-Stack Engineer (React/TS)", team: "Product Engineering", location: "Remote / EU" },
  { title: "Solutions Architect", team: "Delivery", location: "Remote / NYC" },
  { title: "DevOps / Platform Engineer", team: "Platform", location: "Remote / Global" },
  { title: "Enterprise Account Executive", team: "Go-to-Market", location: "NYC / London" },
];

function CareersPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Careers" title="Build the future of enterprise AI" description="We're hiring senior engineers, designers, researchers and operators to help the world's largest teams reinvent how they work." primary={{ label: "View open roles", href: "#roles" }} secondary={{ label: "Meet the team", href: "/company/team" }} />
      <Section>
        <SectionHeading eyebrow="Culture" title="What working here feels like" />
        <div className="mt-14">
          <FeatureGrid items={[
            { icon: Zap, title: "Small teams, big scope", desc: "Senior teams that own outcomes end-to-end." },
            { icon: Globe2, title: "Remote-first, globally", desc: "Work from wherever you do your best work." },
            { icon: Sparkles, title: "Research meets product", desc: "Ship what our research invents." },
            { icon: Heart, title: "Real customers, real impact", desc: "Your work reaches millions of end users." },
            { icon: Users, title: "Grown-up defaults", desc: "Async, calm, focused. No performative hustle." },
            { icon: Shield, title: "Great benefits", desc: "Health, equity, learning budget, 6 weeks PTO." },
          ]} />
        </div>
      </Section>
      <Section surface>
        <SectionHeading eyebrow="Process" title="How we hire" />
        <div className="mt-14">
          <StepList steps={[
            { title: "Intro call", desc: "30 min with our talent team. Two-way conversation about fit." },
            { title: "Deep dive", desc: "Meet the hiring manager. Understand the team and the work." },
            { title: "Skill session", desc: "A practical, take-home or live exercise tied to the role." },
            { title: "Meet the team", desc: "Peer conversations. Ask us anything." },
          ]} />
        </div>
      </Section>
      <Section id="roles">
        <SectionHeading eyebrow="Open positions" title="Roles we're hiring for" />
        <div className="mx-auto mt-10 max-w-4xl divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
          {roles.map((r) => (
            <a key={r.title} href="#" className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-6 transition-colors hover:bg-muted/40">
              <div>
                <p className="text-[15px] font-semibold">{r.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{r.team} · <MapPin className="mr-0.5 inline h-3 w-3" />{r.location}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-1.5 text-xs font-medium">Apply <ArrowRight className="h-3 w-3" /></span>
            </a>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
