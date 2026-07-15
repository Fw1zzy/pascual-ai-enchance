import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { G as Earth, I as Heart, O as MapPin, i as Users, p as Shield, t as Zap, u as Sparkles, ut as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-Ci_UNRs4.mjs";
import { c as SectionHeading, d as StepList, i as FeatureGrid, o as PageHero, s as Section } from "./sections-D1NAD9E3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/company.careers-IO3FNnSc.js
var import_jsx_runtime = require_jsx_runtime();
var roles = [
	{
		title: "Staff AI Engineer",
		team: "AI Research",
		location: "Remote / SF"
	},
	{
		title: "Senior Product Designer",
		team: "Design",
		location: "Remote / London"
	},
	{
		title: "Full-Stack Engineer (React/TS)",
		team: "Product Engineering",
		location: "Remote / EU"
	},
	{
		title: "Solutions Architect",
		team: "Delivery",
		location: "Remote / NYC"
	},
	{
		title: "DevOps / Platform Engineer",
		team: "Platform",
		location: "Remote / Global"
	},
	{
		title: "Enterprise Account Executive",
		team: "Go-to-Market",
		location: "NYC / London"
	}
];
function CareersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Careers",
			title: "Build the future of enterprise AI",
			description: "We're hiring senior engineers, designers, researchers and operators to help the world's largest teams reinvent how they work.",
			primary: {
				label: "View open roles",
				href: "#roles"
			},
			secondary: {
				label: "Meet the team",
				href: "/company/team"
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Culture",
			title: "What working here feels like"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureGrid, { items: [
				{
					icon: Zap,
					title: "Small teams, big scope",
					desc: "Senior teams that own outcomes end-to-end."
				},
				{
					icon: Earth,
					title: "Remote-first, globally",
					desc: "Work from wherever you do your best work."
				},
				{
					icon: Sparkles,
					title: "Research meets product",
					desc: "Ship what our research invents."
				},
				{
					icon: Heart,
					title: "Real customers, real impact",
					desc: "Your work reaches millions of end users."
				},
				{
					icon: Users,
					title: "Grown-up defaults",
					desc: "Async, calm, focused. No performative hustle."
				},
				{
					icon: Shield,
					title: "Great benefits",
					desc: "Health, equity, learning budget, 6 weeks PTO."
				}
			] })
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			surface: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Process",
				title: "How we hire"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepList, { steps: [
					{
						title: "Intro call",
						desc: "30 min with our talent team. Two-way conversation about fit."
					},
					{
						title: "Deep dive",
						desc: "Meet the hiring manager. Understand the team and the work."
					},
					{
						title: "Skill session",
						desc: "A practical, take-home or live exercise tied to the role."
					},
					{
						title: "Meet the team",
						desc: "Peer conversations. Ask us anything."
					}
				] })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "roles",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Open positions",
				title: "Roles we're hiring for"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-10 max-w-4xl divide-y divide-border rounded-2xl border border-border bg-card shadow-soft",
				children: roles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-6 transition-colors hover:bg-muted/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[15px] font-semibold",
						children: r.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: [
							r.team,
							" · ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mr-0.5 inline h-3 w-3" }),
							r.location
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-1.5 text-xs font-medium",
						children: ["Apply ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
					})]
				}, r.title))
			})]
		})
	] });
}
//#endregion
export { CareersPage as component };
