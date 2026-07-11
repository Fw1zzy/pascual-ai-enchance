import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { productConfigs } from "@/components/site/page-configs";

const cfg = productConfigs["enterprise-ai-solutions"];

export const Route = createFileRoute("/products/enterprise-ai-solutions")({
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
