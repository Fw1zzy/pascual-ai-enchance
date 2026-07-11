import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { solutionConfigs } from "@/components/site/page-configs";

const cfg = solutionConfigs["education"];

export const Route = createFileRoute("/solutions/education")({
  head: () => ({
    meta: [
      { title: `${cfg.title} — Pascual.ai` },
      { name: "description", content: cfg.description ?? "" },
      { property: "og:title", content: `${cfg.title} — Pascual.ai` },
      { property: "og:description", content: cfg.description ?? "" },
    ],
  }),
  component: () => <ContentPage {...cfg} />,
});
