import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as Trophy } from "../_libs/lucide-react.mjs";
import { n as caseStudies } from "./page-configs-B6HUmGrp.mjs";
import { t as SiteLayout } from "./SiteLayout-Ci_UNRs4.mjs";
import { c as SectionHeading, n as CardGrid, o as PageHero, s as Section } from "./sections-D1NAD9E3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources.success-stories-BA_U6j0Z.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
	eyebrow: "Resources · Success Stories",
	title: "Outcomes our customers are proud of",
	description: "Success stories from teams who chose Pascual.ai as their enterprise AI partner."
}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
	eyebrow: "Stories",
	title: "Every story starts with a customer"
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "mt-14",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardGrid, { items: caseStudies.map((c) => ({
		icon: Trophy,
		title: c.title,
		desc: c.desc,
		tag: c.tag,
		href: "#"
	})) })
})] })] });
//#endregion
export { SplitComponent as component };
