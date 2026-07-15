import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SiteLayout } from "./SiteLayout-Ci_UNRs4.mjs";
import { a as MockPanel, c as SectionHeading, d as StepList, f as Timeline, i as FeatureGrid, l as SplitBullets, n as CardGrid, o as PageHero, r as FAQ, s as Section, t as CTASection, u as StatsBand } from "./sections-D1NAD9E3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ContentPage-C5JvwQHi.js
var import_jsx_runtime = require_jsx_runtime();
function ContentPage(cfg) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: cfg.eyebrow,
			title: cfg.title,
			description: cfg.description,
			primary: cfg.primaryCTA ?? {
				label: "Book a demo",
				href: "/resources/contact"
			},
			secondary: cfg.secondaryCTA ?? {
				label: "See pricing",
				href: "/pricing"
			},
			align: cfg.heroAlign ?? "center"
		}),
		cfg.features && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: cfg.features.eyebrow ?? "Capabilities",
			title: cfg.features.heading ?? "Everything you need, one platform",
			description: cfg.features.subheading
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureGrid, {
				items: cfg.features.items,
				columns: cfg.features.columns
			})
		})] }),
		cfg.splits?.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			surface: i % 2 === 0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitBullets, {
				eyebrow: s.eyebrow,
				title: s.title,
				description: s.description,
				bullets: s.bullets,
				reverse: i % 2 === 1,
				visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MockPanel, { label: s.eyebrow ?? "Pascual.ai" })
			})
		}, s.title)),
		cfg.steps && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			surface: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: cfg.steps.eyebrow ?? "How it works",
				title: cfg.steps.heading
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepList, { steps: cfg.steps.items })
			})]
		}),
		cfg.timeline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "left",
				eyebrow: cfg.timeline.eyebrow ?? "Process",
				title: cfg.timeline.heading
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, { items: cfg.timeline.items })
			})]
		}) }),
		cfg.stats && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [cfg.stats.heading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: cfg.stats.heading }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cfg.stats.heading ? "mt-10" : "",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsBand, { items: cfg.stats.items })
		})] }),
		cfg.cards && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			surface: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: cfg.cards.eyebrow,
				title: cfg.cards.heading,
				description: cfg.cards.description
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardGrid, { items: cfg.cards.items })
			})]
		}),
		cfg.faqs && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "FAQ",
			title: "Frequently asked"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, { items: cfg.faqs })
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			title: cfg.cta?.title ?? "Ready to see Pascual.ai in action?",
			description: cfg.cta?.description ?? "Book a personalized demo and see how leading teams deploy enterprise AI in weeks, not quarters.",
			primary: cfg.cta?.primary ?? {
				label: "Book a demo",
				href: "/resources/contact"
			},
			secondary: cfg.cta?.secondary ?? {
				label: "Contact sales",
				href: "/company/contact"
			}
		})
	] });
}
//#endregion
export { ContentPage as t };
