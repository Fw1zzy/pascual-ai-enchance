import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as cfg } from "./company.about-BUxksfpi.mjs";
import { t as cfg$1 } from "./company.news-BZjnVeuE.mjs";
import { t as cfg$2 } from "./company.partners-D3zJughY.mjs";
import { t as cfg$3 } from "./company.team-D8oU2QXH.mjs";
import { t as cfg$4 } from "./products.ai-agents-DL0VLwW4.mjs";
import { t as cfg$5 } from "./products.ai-automation-B-NbbM-K.mjs";
import { t as cfg$6 } from "./products.ai-insights-CRWlxEQB.mjs";
import { t as cfg$7 } from "./products.api-development-D0s9ATlU.mjs";
import { t as cfg$8 } from "./products.business-intelligence-BOYojW2C.mjs";
import { t as cfg$9 } from "./products.cloud-integration-CJFN-u07.mjs";
import { t as cfg$10 } from "./products.custom-ai-development-B5SZW0qK.mjs";
import { t as cfg$11 } from "./products.data-analytics-DqhLJ5dJ.mjs";
import { t as cfg$12 } from "./products.devops-Bc3k-oB2.mjs";
import { t as cfg$13 } from "./products.enterprise-ai-solutions-D0Cf9jVb.mjs";
import { t as cfg$14 } from "./products.internal-business-systems-VMmp0MYG.mjs";
import { t as cfg$15 } from "./products.mobile-applications-4kyqGIdz.mjs";
import { t as cfg$16 } from "./products.reporting-dashboard-SgEkmKHN.mjs";
import { t as cfg$17 } from "./products.saas-platforms-CFPf7tsW.mjs";
import { t as cfg$18 } from "./products.system-architecture-SUjHgqH0.mjs";
import { t as cfg$19 } from "./products.web-applications-DIdxDVkq.mjs";
import { t as cfg$20 } from "./solutions.retail-DFdmgIso.mjs";
import { t as cfg$21 } from "./solutions.manufacturing-CEKcqSjF.mjs";
import { t as cfg$22 } from "./solutions.logistics-sleDZqmS.mjs";
import { t as cfg$23 } from "./solutions.healthcare-BwEfo6Rn.mjs";
import { t as cfg$24 } from "./solutions.government-C8cez5uD.mjs";
import { t as cfg$25 } from "./solutions.finance-BxqbJRFV.mjs";
import { t as cfg$26 } from "./solutions.enterprise-C26dqsl2.mjs";
import { t as cfg$27 } from "./solutions.education-BJWXKWaG.mjs";
import { t as cfg$28 } from "./services.ux-ui-design-BPZReQtI.mjs";
import { t as cfg$29 } from "./services.software-development-De2l31Zk.mjs";
import { t as cfg$30 } from "./services.product-strategy-BB30SijC.mjs";
import { t as cfg$31 } from "./services.maintenance-support-DBdXZGZ1.mjs";
import { t as cfg$32 } from "./services.digital-transformation-BoXCLdqi.mjs";
import { t as cfg$33 } from "./services.cloud-migration-DK3pRPs-.mjs";
import { t as cfg$34 } from "./services.ai-consulting-Zewntqn_.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D2LzydH1.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BToEhmSQ.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$46 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Pascual.ai — Enterprise AI, Software & Cloud Solutions" },
			{
				name: "description",
				content: "Pascual.ai builds enterprise-grade AI agents, automation, software and cloud platforms that transform how the world's largest teams operate."
			},
			{
				name: "author",
				content: "Pascual.ai"
			},
			{
				property: "og:site_name",
				content: "Pascual.ai"
			},
			{
				property: "og:title",
				content: "Pascual.ai — Enterprise AI, Software & Cloud Solutions"
			},
			{
				property: "og:description",
				content: "Pascual.ai builds enterprise-grade AI agents, automation, software and cloud platforms that transform how the world's largest teams operate."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Pascual.ai — Enterprise AI, Software & Cloud Solutions"
			},
			{
				name: "twitter:description",
				content: "Pascual.ai builds enterprise-grade AI agents, automation, software and cloud platforms that transform how the world's largest teams operate."
			},
			{
				property: "og:image",
				content: "/og-image.png"
			},
			{
				name: "twitter:image",
				content: "/og-image.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$46.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$45 = () => import("./pricing-DPqJlqMw.mjs");
var Route$45 = createFileRoute("/pricing")({
	head: () => ({ meta: [{ title: "Pricing — Pascual.ai" }, {
		name: "description",
		content: "Flexible plans for teams of every size — from growing companies to global enterprises."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$45, "component")
});
var $$splitComponentImporter$44 = () => import("./routes-CLsd5NCH.mjs");
var Route$44 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$44, "component") });
var $$splitComponentImporter$43 = () => import("./solutions.retail-Dg4meRHf.mjs");
var Route$43 = createFileRoute("/solutions/retail")({
	head: () => ({ meta: [
		{ title: `${cfg$20.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$20.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$20.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$20.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$43, "component")
});
var $$splitComponentImporter$42 = () => import("./solutions.manufacturing-CBSII3hC.mjs");
var Route$42 = createFileRoute("/solutions/manufacturing")({
	head: () => ({ meta: [
		{ title: `${cfg$21.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$21.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$21.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$21.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$42, "component")
});
var $$splitComponentImporter$41 = () => import("./solutions.logistics-DlmwjmiB.mjs");
var Route$41 = createFileRoute("/solutions/logistics")({
	head: () => ({ meta: [
		{ title: `${cfg$22.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$22.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$22.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$22.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$41, "component")
});
var $$splitComponentImporter$40 = () => import("./solutions.healthcare-BAhmnOd8.mjs");
var Route$40 = createFileRoute("/solutions/healthcare")({
	head: () => ({ meta: [
		{ title: `${cfg$23.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$23.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$23.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$23.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$40, "component")
});
var $$splitComponentImporter$39 = () => import("./solutions.government-BvFjqPwO.mjs");
var Route$39 = createFileRoute("/solutions/government")({
	head: () => ({ meta: [
		{ title: `${cfg$24.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$24.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$24.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$24.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$39, "component")
});
var $$splitComponentImporter$38 = () => import("./solutions.finance-DPGCTIFF.mjs");
var Route$38 = createFileRoute("/solutions/finance")({
	head: () => ({ meta: [
		{ title: `${cfg$25.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$25.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$25.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$25.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$38, "component")
});
var $$splitComponentImporter$37 = () => import("./solutions.enterprise-DqN8UFX_.mjs");
var Route$37 = createFileRoute("/solutions/enterprise")({
	head: () => ({ meta: [
		{ title: `${cfg$26.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$26.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$26.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$26.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$37, "component")
});
var $$splitComponentImporter$36 = () => import("./solutions.education-DAnxiKdF.mjs");
var Route$36 = createFileRoute("/solutions/education")({
	head: () => ({ meta: [
		{ title: `${cfg$27.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$27.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$27.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$27.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$36, "component")
});
var $$splitComponentImporter$35 = () => import("./services.ux-ui-design-BgIxyJa_.mjs");
var Route$35 = createFileRoute("/services/ux-ui-design")({
	head: () => ({ meta: [
		{ title: `${cfg$28.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$28.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$28.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$28.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$35, "component")
});
var $$splitComponentImporter$34 = () => import("./services.software-development-BTBKys7q.mjs");
var Route$34 = createFileRoute("/services/software-development")({
	head: () => ({ meta: [
		{ title: `${cfg$29.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$29.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$29.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$29.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$34, "component")
});
var $$splitComponentImporter$33 = () => import("./services.product-strategy-DYwoYCmd.mjs");
var Route$33 = createFileRoute("/services/product-strategy")({
	head: () => ({ meta: [
		{ title: `${cfg$30.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$30.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$30.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$30.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$33, "component")
});
var $$splitComponentImporter$32 = () => import("./services.maintenance-support-BqYSb0av.mjs");
var Route$32 = createFileRoute("/services/maintenance-support")({
	head: () => ({ meta: [
		{ title: `${cfg$31.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$31.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$31.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$31.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$32, "component")
});
var $$splitComponentImporter$31 = () => import("./services.digital-transformation-q60pQXgz.mjs");
var Route$31 = createFileRoute("/services/digital-transformation")({
	head: () => ({ meta: [
		{ title: `${cfg$32.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$32.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$32.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$32.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$31, "component")
});
var $$splitComponentImporter$30 = () => import("./services.cloud-migration-E-szrQo6.mjs");
var Route$30 = createFileRoute("/services/cloud-migration")({
	head: () => ({ meta: [
		{ title: `${cfg$33.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$33.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$33.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$33.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
var $$splitComponentImporter$29 = () => import("./services.ai-consulting-Ddy53ucU.mjs");
var Route$29 = createFileRoute("/services/ai-consulting")({
	head: () => ({ meta: [
		{ title: `${cfg$34.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$34.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$34.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$34.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$29, "component")
});
var $$splitComponentImporter$28 = () => import("./resources.success-stories-BA_U6j0Z.mjs");
var Route$28 = createFileRoute("/resources/success-stories")({
	head: () => ({ meta: [{ title: "Success Stories — Pascual.ai" }, {
		name: "description",
		content: "Customer success stories from teams transforming their organizations with Pascual.ai."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
var $$splitComponentImporter$27 = () => import("./resources.help-center-COolcfv-.mjs");
var Route$27 = createFileRoute("/resources/help-center")({
	head: () => ({ meta: [{ title: "Help Center — Pascual.ai" }, {
		name: "description",
		content: "Guides, how-tos and support for the Pascual.ai platform."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./resources.faqs-CyKws-1F.mjs");
var Route$26 = createFileRoute("/resources/faqs")({
	head: () => ({ meta: [{ title: "FAQs — Pascual.ai" }, {
		name: "description",
		content: "Answers to the most common questions about the Pascual.ai platform, security, pricing and support."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./resources.documentation-C6MLtcDa.mjs");
var Route$25 = createFileRoute("/resources/documentation")({
	head: () => ({ meta: [{ title: "Documentation — Pascual.ai" }, {
		name: "description",
		content: "Developer and administrator documentation for the Pascual.ai platform."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./resources.contact-DI3EGYgt.mjs");
var Route$24 = createFileRoute("/resources/contact")({
	head: () => ({ meta: [{ title: "Contact — Pascual.ai" }, {
		name: "description",
		content: "Talk to the Pascual.ai team about your enterprise AI, software or cloud initiative."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./resources.case-studies-1D2GYwin.mjs");
var Route$23 = createFileRoute("/resources/case-studies")({
	head: () => ({ meta: [{ title: "Case Studies — Pascual.ai" }, {
		name: "description",
		content: "How leading enterprises win with Pascual.ai — metrics, before/after and customer quotes."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./resources.blog-Cm2w10ey.mjs");
var Route$22 = createFileRoute("/resources/blog")({
	head: () => ({ meta: [{ title: "Blog — Pascual.ai" }, {
		name: "description",
		content: "Insights, engineering, governance and case studies from the Pascual.ai team."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./products.web-applications-D-2wKIPX.mjs");
var Route$21 = createFileRoute("/products/web-applications")({
	head: () => ({ meta: [
		{ title: `${cfg$19.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$19.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$19.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$19.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./products.system-architecture-Ca6LuFNH.mjs");
var Route$20 = createFileRoute("/products/system-architecture")({
	head: () => ({ meta: [
		{ title: `${cfg$18.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$18.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$18.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$18.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./products.saas-platforms-BEA0CK2i.mjs");
var Route$19 = createFileRoute("/products/saas-platforms")({
	head: () => ({ meta: [
		{ title: `${cfg$17.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$17.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$17.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$17.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./products.reporting-dashboard-lV1sAUpR.mjs");
var Route$18 = createFileRoute("/products/reporting-dashboard")({
	head: () => ({ meta: [
		{ title: `${cfg$16.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$16.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$16.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$16.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./products.mobile-applications-BDQfeRnN.mjs");
var Route$17 = createFileRoute("/products/mobile-applications")({
	head: () => ({ meta: [
		{ title: `${cfg$15.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$15.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$15.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$15.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./products.internal-business-systems-Bxk3AkaJ.mjs");
var Route$16 = createFileRoute("/products/internal-business-systems")({
	head: () => ({ meta: [
		{ title: `${cfg$14.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$14.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$14.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$14.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./products.enterprise-ai-solutions-BZQpyt6l.mjs");
var Route$15 = createFileRoute("/products/enterprise-ai-solutions")({
	head: () => ({ meta: [
		{ title: `${cfg$13.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$13.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$13.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$13.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./products.devops-BWtDRSRG.mjs");
var Route$14 = createFileRoute("/products/devops")({
	head: () => ({ meta: [
		{ title: `${cfg$12.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$12.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$12.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$12.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./products.data-analytics-DfB09aMg.mjs");
var Route$13 = createFileRoute("/products/data-analytics")({
	head: () => ({ meta: [
		{ title: `${cfg$11.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$11.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$11.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$11.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./products.custom-ai-development-BtIccQZW.mjs");
var Route$12 = createFileRoute("/products/custom-ai-development")({
	head: () => ({ meta: [
		{ title: `${cfg$10.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$10.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$10.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$10.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./products.cloud-integration-DwITNuso.mjs");
var Route$11 = createFileRoute("/products/cloud-integration")({
	head: () => ({ meta: [
		{ title: `${cfg$9.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$9.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$9.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$9.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./products.business-intelligence-BzfIhF5F.mjs");
var Route$10 = createFileRoute("/products/business-intelligence")({
	head: () => ({ meta: [
		{ title: `${cfg$8.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$8.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$8.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$8.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./products.api-development-ByD7x5MV.mjs");
var Route$9 = createFileRoute("/products/api-development")({
	head: () => ({ meta: [
		{ title: `${cfg$7.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$7.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$7.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$7.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./products.ai-insights-DLTG72hw.mjs");
var Route$8 = createFileRoute("/products/ai-insights")({
	head: () => ({ meta: [
		{ title: `${cfg$6.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$6.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$6.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$6.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./products.ai-automation-BHHZVav_.mjs");
var Route$7 = createFileRoute("/products/ai-automation")({
	head: () => ({ meta: [
		{ title: `${cfg$5.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$5.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$5.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$5.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./products.ai-agents-xRCxjyfx.mjs");
var Route$6 = createFileRoute("/products/ai-agents")({
	head: () => ({ meta: [
		{ title: `${cfg$4.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$4.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$4.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$4.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./company.team-CdoyDLKR.mjs");
var Route$5 = createFileRoute("/company/team")({
	head: () => ({ meta: [
		{ title: `${cfg$3.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$3.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$3.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$3.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./company.partners-BRqdLEJE.mjs");
var Route$4 = createFileRoute("/company/partners")({
	head: () => ({ meta: [
		{ title: `${cfg$2.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$2.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$2.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$2.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./company.news-Dkb3OA4N.mjs");
var Route$3 = createFileRoute("/company/news")({
	head: () => ({ meta: [
		{ title: `${cfg$1.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg$1.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg$1.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg$1.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./company.contact-DlGAWZLD.mjs");
var Route$2 = createFileRoute("/company/contact")({
	head: () => ({ meta: [{ title: "Contact — Pascual.ai" }, {
		name: "description",
		content: "Talk to the Pascual.ai team about your enterprise AI, software or cloud initiative."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./company.careers-IO3FNnSc.mjs");
var Route$1 = createFileRoute("/company/careers")({
	head: () => ({ meta: [{ title: "Careers — Pascual.ai" }, {
		name: "description",
		content: "Join Pascual.ai. Work with senior operators solving the hardest problems in enterprise AI."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./company.about-CDVnkYuZ.mjs");
var Route = createFileRoute("/company/about")({
	head: () => ({ meta: [
		{ title: `${cfg.title} — Pascual.ai` },
		{
			name: "description",
			content: cfg.description ?? ""
		},
		{
			property: "og:title",
			content: `${cfg.title} — Pascual.ai`
		},
		{
			property: "og:description",
			content: cfg.description ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var PricingRoute = Route$45.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$46
});
var IndexRoute = Route$44.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$46
});
var SolutionsRetailRoute = Route$43.update({
	id: "/solutions/retail",
	path: "/solutions/retail",
	getParentRoute: () => Route$46
});
var SolutionsManufacturingRoute = Route$42.update({
	id: "/solutions/manufacturing",
	path: "/solutions/manufacturing",
	getParentRoute: () => Route$46
});
var SolutionsLogisticsRoute = Route$41.update({
	id: "/solutions/logistics",
	path: "/solutions/logistics",
	getParentRoute: () => Route$46
});
var SolutionsHealthcareRoute = Route$40.update({
	id: "/solutions/healthcare",
	path: "/solutions/healthcare",
	getParentRoute: () => Route$46
});
var SolutionsGovernmentRoute = Route$39.update({
	id: "/solutions/government",
	path: "/solutions/government",
	getParentRoute: () => Route$46
});
var SolutionsFinanceRoute = Route$38.update({
	id: "/solutions/finance",
	path: "/solutions/finance",
	getParentRoute: () => Route$46
});
var SolutionsEnterpriseRoute = Route$37.update({
	id: "/solutions/enterprise",
	path: "/solutions/enterprise",
	getParentRoute: () => Route$46
});
var SolutionsEducationRoute = Route$36.update({
	id: "/solutions/education",
	path: "/solutions/education",
	getParentRoute: () => Route$46
});
var ServicesUxUiDesignRoute = Route$35.update({
	id: "/services/ux-ui-design",
	path: "/services/ux-ui-design",
	getParentRoute: () => Route$46
});
var ServicesSoftwareDevelopmentRoute = Route$34.update({
	id: "/services/software-development",
	path: "/services/software-development",
	getParentRoute: () => Route$46
});
var ServicesProductStrategyRoute = Route$33.update({
	id: "/services/product-strategy",
	path: "/services/product-strategy",
	getParentRoute: () => Route$46
});
var ServicesMaintenanceSupportRoute = Route$32.update({
	id: "/services/maintenance-support",
	path: "/services/maintenance-support",
	getParentRoute: () => Route$46
});
var ServicesDigitalTransformationRoute = Route$31.update({
	id: "/services/digital-transformation",
	path: "/services/digital-transformation",
	getParentRoute: () => Route$46
});
var ServicesCloudMigrationRoute = Route$30.update({
	id: "/services/cloud-migration",
	path: "/services/cloud-migration",
	getParentRoute: () => Route$46
});
var ServicesAiConsultingRoute = Route$29.update({
	id: "/services/ai-consulting",
	path: "/services/ai-consulting",
	getParentRoute: () => Route$46
});
var ResourcesSuccessStoriesRoute = Route$28.update({
	id: "/resources/success-stories",
	path: "/resources/success-stories",
	getParentRoute: () => Route$46
});
var ResourcesHelpCenterRoute = Route$27.update({
	id: "/resources/help-center",
	path: "/resources/help-center",
	getParentRoute: () => Route$46
});
var ResourcesFaqsRoute = Route$26.update({
	id: "/resources/faqs",
	path: "/resources/faqs",
	getParentRoute: () => Route$46
});
var ResourcesDocumentationRoute = Route$25.update({
	id: "/resources/documentation",
	path: "/resources/documentation",
	getParentRoute: () => Route$46
});
var ResourcesContactRoute = Route$24.update({
	id: "/resources/contact",
	path: "/resources/contact",
	getParentRoute: () => Route$46
});
var ResourcesCaseStudiesRoute = Route$23.update({
	id: "/resources/case-studies",
	path: "/resources/case-studies",
	getParentRoute: () => Route$46
});
var ResourcesBlogRoute = Route$22.update({
	id: "/resources/blog",
	path: "/resources/blog",
	getParentRoute: () => Route$46
});
var ProductsWebApplicationsRoute = Route$21.update({
	id: "/products/web-applications",
	path: "/products/web-applications",
	getParentRoute: () => Route$46
});
var ProductsSystemArchitectureRoute = Route$20.update({
	id: "/products/system-architecture",
	path: "/products/system-architecture",
	getParentRoute: () => Route$46
});
var ProductsSaasPlatformsRoute = Route$19.update({
	id: "/products/saas-platforms",
	path: "/products/saas-platforms",
	getParentRoute: () => Route$46
});
var ProductsReportingDashboardRoute = Route$18.update({
	id: "/products/reporting-dashboard",
	path: "/products/reporting-dashboard",
	getParentRoute: () => Route$46
});
var ProductsMobileApplicationsRoute = Route$17.update({
	id: "/products/mobile-applications",
	path: "/products/mobile-applications",
	getParentRoute: () => Route$46
});
var ProductsInternalBusinessSystemsRoute = Route$16.update({
	id: "/products/internal-business-systems",
	path: "/products/internal-business-systems",
	getParentRoute: () => Route$46
});
var ProductsEnterpriseAiSolutionsRoute = Route$15.update({
	id: "/products/enterprise-ai-solutions",
	path: "/products/enterprise-ai-solutions",
	getParentRoute: () => Route$46
});
var ProductsDevopsRoute = Route$14.update({
	id: "/products/devops",
	path: "/products/devops",
	getParentRoute: () => Route$46
});
var ProductsDataAnalyticsRoute = Route$13.update({
	id: "/products/data-analytics",
	path: "/products/data-analytics",
	getParentRoute: () => Route$46
});
var ProductsCustomAiDevelopmentRoute = Route$12.update({
	id: "/products/custom-ai-development",
	path: "/products/custom-ai-development",
	getParentRoute: () => Route$46
});
var ProductsCloudIntegrationRoute = Route$11.update({
	id: "/products/cloud-integration",
	path: "/products/cloud-integration",
	getParentRoute: () => Route$46
});
var ProductsBusinessIntelligenceRoute = Route$10.update({
	id: "/products/business-intelligence",
	path: "/products/business-intelligence",
	getParentRoute: () => Route$46
});
var ProductsApiDevelopmentRoute = Route$9.update({
	id: "/products/api-development",
	path: "/products/api-development",
	getParentRoute: () => Route$46
});
var ProductsAiInsightsRoute = Route$8.update({
	id: "/products/ai-insights",
	path: "/products/ai-insights",
	getParentRoute: () => Route$46
});
var ProductsAiAutomationRoute = Route$7.update({
	id: "/products/ai-automation",
	path: "/products/ai-automation",
	getParentRoute: () => Route$46
});
var ProductsAiAgentsRoute = Route$6.update({
	id: "/products/ai-agents",
	path: "/products/ai-agents",
	getParentRoute: () => Route$46
});
var CompanyTeamRoute = Route$5.update({
	id: "/company/team",
	path: "/company/team",
	getParentRoute: () => Route$46
});
var CompanyPartnersRoute = Route$4.update({
	id: "/company/partners",
	path: "/company/partners",
	getParentRoute: () => Route$46
});
var CompanyNewsRoute = Route$3.update({
	id: "/company/news",
	path: "/company/news",
	getParentRoute: () => Route$46
});
var CompanyContactRoute = Route$2.update({
	id: "/company/contact",
	path: "/company/contact",
	getParentRoute: () => Route$46
});
var CompanyCareersRoute = Route$1.update({
	id: "/company/careers",
	path: "/company/careers",
	getParentRoute: () => Route$46
});
var rootRouteChildren = {
	IndexRoute,
	PricingRoute,
	CompanyAboutRoute: Route.update({
		id: "/company/about",
		path: "/company/about",
		getParentRoute: () => Route$46
	}),
	CompanyCareersRoute,
	CompanyContactRoute,
	CompanyNewsRoute,
	CompanyPartnersRoute,
	CompanyTeamRoute,
	ProductsAiAgentsRoute,
	ProductsAiAutomationRoute,
	ProductsAiInsightsRoute,
	ProductsApiDevelopmentRoute,
	ProductsBusinessIntelligenceRoute,
	ProductsCloudIntegrationRoute,
	ProductsCustomAiDevelopmentRoute,
	ProductsDataAnalyticsRoute,
	ProductsDevopsRoute,
	ProductsEnterpriseAiSolutionsRoute,
	ProductsInternalBusinessSystemsRoute,
	ProductsMobileApplicationsRoute,
	ProductsReportingDashboardRoute,
	ProductsSaasPlatformsRoute,
	ProductsSystemArchitectureRoute,
	ProductsWebApplicationsRoute,
	ResourcesBlogRoute,
	ResourcesCaseStudiesRoute,
	ResourcesContactRoute,
	ResourcesDocumentationRoute,
	ResourcesFaqsRoute,
	ResourcesHelpCenterRoute,
	ResourcesSuccessStoriesRoute,
	ServicesAiConsultingRoute,
	ServicesCloudMigrationRoute,
	ServicesDigitalTransformationRoute,
	ServicesMaintenanceSupportRoute,
	ServicesProductStrategyRoute,
	ServicesSoftwareDevelopmentRoute,
	ServicesUxUiDesignRoute,
	SolutionsEducationRoute,
	SolutionsEnterpriseRoute,
	SolutionsFinanceRoute,
	SolutionsGovernmentRoute,
	SolutionsHealthcareRoute,
	SolutionsLogisticsRoute,
	SolutionsManufacturingRoute,
	SolutionsRetailRoute
};
var routeTree = Route$46._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
