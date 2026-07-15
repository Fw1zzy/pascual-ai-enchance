import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { H as FileText } from "../_libs/lucide-react.mjs";
import { n as caseStudies } from "./page-configs-B6HUmGrp.mjs";
import { t as SiteLayout } from "./SiteLayout-Ci_UNRs4.mjs";
import { c as SectionHeading, n as CardGrid, o as PageHero, s as Section, u as StatsBand } from "./sections-D1NAD9E3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources.case-studies-1D2GYwin.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Resources · Case Studies",
		title: "Real customers. Real outcomes.",
		description: "How leading enterprises deploy Pascual.ai — with the metrics, timelines and quotes to prove it."
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsBand, { items: [
		{
			value: "60%",
			label: "Average ops cost reduction"
		},
		{
			value: "4×",
			label: "Faster time-to-value"
		},
		{
			value: "95%",
			label: "Customer retention"
		},
		{
			value: "200+",
			label: "Enterprise programs"
		}
	] }) }),
	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		surface: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Featured",
			title: "Case studies"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardGrid, { items: caseStudies.map((c) => ({
				icon: FileText,
				title: c.title,
				desc: c.desc,
				tag: c.tag,
				href: "#"
			})) })
		})]
	})
] });
//#endregion
export { SplitComponent as component };
