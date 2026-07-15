import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { lt as BookOpen } from "../_libs/lucide-react.mjs";
import { t as blogPosts } from "./page-configs-B6HUmGrp.mjs";
import { t as SiteLayout } from "./SiteLayout-Ci_UNRs4.mjs";
import { n as CardGrid, o as PageHero, s as Section } from "./sections-D1NAD9E3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources.blog-Cm2w10ey.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
	eyebrow: "Resources · Blog",
	title: "Insights from the Pascual.ai team",
	description: "Deep dives on enterprise AI, engineering practices, governance and real-world customer outcomes."
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardGrid, { items: blogPosts.map((p) => ({
	icon: BookOpen,
	title: p.title,
	desc: p.desc,
	tag: p.tag,
	href: "#"
})) }) })] });
//#endregion
export { SplitComponent as component };
