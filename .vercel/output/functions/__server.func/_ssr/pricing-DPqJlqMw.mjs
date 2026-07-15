import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { tt as Check, ut as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-Ci_UNRs4.mjs";
import { c as SectionHeading, o as PageHero, r as FAQ, s as Section } from "./sections-D1NAD9E3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-DPqJlqMw.js
var import_jsx_runtime = require_jsx_runtime();
var tiers = [
	{
		name: "Starter",
		price: "$1,500",
		unit: "/mo",
		desc: "For teams starting their AI journey.",
		features: [
			"Up to 10 users",
			"Core automation & agents",
			"Email support",
			"Standard integrations"
		],
		cta: "Start free trial"
	},
	{
		name: "Growth",
		price: "$4,900",
		unit: "/mo",
		desc: "For scaling product & ops teams.",
		features: [
			"Up to 50 users",
			"Advanced agents & workflows",
			"Priority support",
			"All integrations",
			"SSO"
		],
		cta: "Book a demo",
		featured: true
	},
	{
		name: "Enterprise",
		price: "Custom",
		unit: "",
		desc: "For global organizations.",
		features: [
			"Unlimited users",
			"Dedicated deployment",
			"24/7 support & CSM",
			"SSO, SCIM, audit",
			"SOC 2 / HIPAA / ISO"
		],
		cta: "Contact sales"
	}
];
var comparison = [
	{
		section: "Platform",
		rows: [
			[
				"Users included",
				"10",
				"50",
				"Unlimited"
			],
			[
				"Agents & workflows",
				"Core",
				"Advanced",
				"Advanced + custom"
			],
			[
				"Integrations",
				"Standard",
				"All",
				"All + custom"
			]
		]
	},
	{
		section: "Security & Compliance",
		rows: [
			[
				"SSO",
				"—",
				"✓",
				"✓"
			],
			[
				"SCIM provisioning",
				"—",
				"—",
				"✓"
			],
			[
				"SOC 2 / ISO / HIPAA",
				"—",
				"SOC 2",
				"All"
			],
			[
				"Audit logs",
				"30 days",
				"1 year",
				"Custom"
			]
		]
	},
	{
		section: "Support",
		rows: [[
			"Support channel",
			"Email",
			"Priority",
			"24/7 + CSM"
		], [
			"Uptime SLA",
			"99.9%",
			"99.95%",
			"99.99%"
		]]
	}
];
function PricingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Pricing",
			title: "Plans that scale with you",
			description: "Flexible pricing built for teams of every size. Enterprise plans include dedicated deployment, security review and 24/7 support.",
			primary: {
				label: "Contact sales",
				href: "/resources/contact"
			},
			secondary: {
				label: "See enterprise",
				href: "/products/enterprise-ai-solutions"
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 lg:grid-cols-3",
			children: tiers.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `relative flex flex-col rounded-3xl border p-8 shadow-soft ${t.featured ? "border-primary/30 bg-card shadow-elevated ring-1 ring-primary/10" : "border-border bg-card"}`,
				children: [
					t.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -top-3 left-8 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground",
						children: "Most popular"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: t.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: t.desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-4xl font-bold tracking-tight",
							children: t.price
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: t.unit
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 flex-1 space-y-3",
						children: t.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2.5 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), f]
						}, f))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/resources/contact",
						className: `mt-8 inline-flex items-center justify-center gap-1.5 rounded-lg px-5 py-3 text-sm font-medium transition-all ${t.featured ? "bg-primary text-primary-foreground shadow-soft hover:shadow-elevated" : "border border-border bg-white text-foreground hover:bg-muted"}`,
						children: [
							t.cta,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						]
					})
				]
			}, t.name))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			surface: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Compare plans",
				title: "Features side by side"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-surface text-left",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
							"Feature",
							"Starter",
							"Growth",
							"Enterprise"
						].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: h
						}, h)) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: comparison.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
						className: "border-t border-border bg-muted/30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: 4,
							className: "px-6 py-3 text-xs font-semibold uppercase tracking-widest text-primary",
							children: s.section
						})
					}, s.section), s.rows.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3 font-medium",
								children: r[0]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3 text-muted-foreground",
								children: r[1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3 text-muted-foreground",
								children: r[2]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3 text-muted-foreground",
								children: r[3]
							})
						]
					}, s.section + i))] })) })]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "FAQ",
			title: "Pricing questions"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, { items: [
				{
					q: "Can I switch plans later?",
					a: "Yes, you can move between plans any time. We'll prorate the difference."
				},
				{
					q: "Do you offer custom enterprise pricing?",
					a: "Yes — Enterprise plans are scoped to your usage, security and support requirements."
				},
				{
					q: "Is there a free trial?",
					a: "Starter includes a 14-day free trial. Growth & Enterprise start with a live guided demo."
				},
				{
					q: "How does support work?",
					a: "Starter includes email support, Growth adds priority response, Enterprise includes 24/7 and a dedicated CSM."
				}
			] })
		})] })
	] });
}
//#endregion
export { PricingPage as component };
