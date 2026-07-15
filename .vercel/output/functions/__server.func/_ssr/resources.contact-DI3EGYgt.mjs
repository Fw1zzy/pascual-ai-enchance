import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { O as MapPin, k as Mail, x as Phone } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-Ci_UNRs4.mjs";
import { o as PageHero, s as Section } from "./sections-D1NAD9E3.mjs";
import { t as ContactForm } from "./ContactForm-BeSf037S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources.contact-DI3EGYgt.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: "Let's talk about your project",
		description: "Tell us a bit about your organization and what you're trying to achieve. A senior member of our team will reply within one business day."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-10 lg:grid-cols-[1.2fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "space-y-4",
			children: [[
				{
					icon: Mail,
					label: "Email",
					value: "emmanuelpascua.ph@gmail.com"
				},
				{
					icon: Phone,
					label: "Phone",
					value: "+1 (555) 010-2026"
				},
				{
					icon: MapPin,
					label: "HQ",
					value: "San Francisco · London · Singapore"
				}
			].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary ring-1 ring-primary/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
						children: c.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-medium break-all",
						children: c.value
					})
				]
			}, c.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/pricing",
				className: "block rounded-2xl border border-primary/20 bg-primary-soft p-6 shadow-soft transition-all hover:-translate-y-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-primary",
					children: "Pricing"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm font-medium",
					children: "See enterprise packages →"
				})]
			})]
		})]
	}) })] });
}
//#endregion
export { ContactPage as component };
