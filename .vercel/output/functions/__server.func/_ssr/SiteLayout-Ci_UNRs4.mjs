import { r as __toESM } from "../_runtime.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { B as GitBranch, C as Newspaper, D as Menu, E as MessageSquare, F as Info, H as FileText, I as Heart, J as Compass, L as Handshake, M as LifeBuoy, N as Layers, P as Landmark, Q as CircleArrowUp, R as GraduationCap, S as Palette, U as FileCode, V as Gauge, W as Factory, X as Cloud, Y as CodeXml, Z as CircleQuestionMark, _ as Rocket, a as User, at as Building2, b as Plug, c as Target, ct as Bot, d as Smartphone, et as ChevronDown, f as ShoppingBag, h as Send, i as Users, it as Calendar, k as Mail, lt as BookOpen, n as X, nt as ChartLine, o as Trophy, ot as Briefcase, p as Shield, q as Cpu, rt as ChartColumn, s as Truck, st as Boxes, u as Sparkles, ut as ArrowRight, v as RefreshCw, w as Network, z as Globe } from "../_libs/lucide-react.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-CnFnlhb9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteLayout-Ci_UNRs4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Logo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: `flex items-center gap-2 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative grid h-8 w-8 place-items-center overflow-hidden rounded-lg bg-primary-gradient text-primary-foreground shadow-soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 24 24",
				className: "h-4 w-4",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2.4",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 20V6a2 2 0 0 1 2-2h6a5 5 0 0 1 0 10H8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "17",
					cy: "17",
					r: "2.4",
					fill: "currentColor",
					stroke: "none"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-[15px] font-semibold tracking-tight",
			children: ["Pascual", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: ".ai"
			})]
		})]
	});
}
var NAV = [
	{
		label: "Products",
		groups: [
			{
				heading: "AI Solutions",
				links: [
					{
						title: "AI Automation",
						desc: "Automate workflows end-to-end",
						href: "/products/ai-automation",
						icon: Bot
					},
					{
						title: "AI Agents",
						desc: "Autonomous agents for every team",
						href: "/products/ai-agents",
						icon: Cpu
					},
					{
						title: "Custom AI Development",
						desc: "Purpose-built models & apps",
						href: "/products/custom-ai-development",
						icon: Sparkles
					},
					{
						title: "Enterprise AI Solutions",
						desc: "Deploy AI at scale, securely",
						href: "/products/enterprise-ai-solutions",
						icon: Building2
					}
				]
			},
			{
				heading: "Software Solutions",
				links: [
					{
						title: "Web Applications",
						desc: "Modern, fast web products",
						href: "/products/web-applications",
						icon: Globe
					},
					{
						title: "Mobile Applications",
						desc: "Native iOS & Android",
						href: "/products/mobile-applications",
						icon: Smartphone
					},
					{
						title: "SaaS Platforms",
						desc: "Multi-tenant SaaS delivery",
						href: "/products/saas-platforms",
						icon: Layers
					},
					{
						title: "Internal Business Systems",
						desc: "ERP, CRM & operations",
						href: "/products/internal-business-systems",
						icon: Boxes
					}
				]
			},
			{
				heading: "Cloud & Infrastructure",
				links: [
					{
						title: "Cloud Integration",
						desc: "Multi-cloud made simple",
						href: "/products/cloud-integration",
						icon: Cloud
					},
					{
						title: "API Development",
						desc: "Robust, versioned APIs",
						href: "/products/api-development",
						icon: Plug
					},
					{
						title: "DevOps",
						desc: "Ship faster, safer, together",
						href: "/products/devops",
						icon: GitBranch
					},
					{
						title: "System Architecture",
						desc: "Blueprints that scale",
						href: "/products/system-architecture",
						icon: Network
					}
				]
			},
			{
				heading: "Data & Analytics",
				links: [
					{
						title: "Business Intelligence",
						desc: "From data to decisions",
						href: "/products/business-intelligence",
						icon: ChartLine
					},
					{
						title: "Data Analytics",
						desc: "Unify, model & explore",
						href: "/products/data-analytics",
						icon: ChartColumn
					},
					{
						title: "AI Insights",
						desc: "Predictive & prescriptive",
						href: "/products/ai-insights",
						icon: Sparkles
					},
					{
						title: "Reporting Dashboard",
						desc: "Live enterprise dashboards",
						href: "/products/reporting-dashboard",
						icon: Gauge
					}
				]
			}
		],
		featured: {
			title: "The Pascual.ai platform",
			desc: "AI, apps & infrastructure in one enterprise-grade stack.",
			href: "/products/enterprise-ai-solutions",
			cta: "Explore platform"
		}
	},
	{
		label: "Solutions",
		simple: [
			{
				title: "Healthcare",
				desc: "Clinical AI, patient experience",
				href: "/solutions/healthcare",
				icon: Heart
			},
			{
				title: "Finance",
				desc: "Risk, compliance & customer AI",
				href: "/solutions/finance",
				icon: Landmark
			},
			{
				title: "Retail",
				desc: "Personalization at scale",
				href: "/solutions/retail",
				icon: ShoppingBag
			},
			{
				title: "Manufacturing",
				desc: "Factory-floor intelligence",
				href: "/solutions/manufacturing",
				icon: Factory
			},
			{
				title: "Logistics",
				desc: "Real-time supply chain AI",
				href: "/solutions/logistics",
				icon: Truck
			},
			{
				title: "Education",
				desc: "Learning platforms & analytics",
				href: "/solutions/education",
				icon: GraduationCap
			},
			{
				title: "Government",
				desc: "Secure, compliant modernization",
				href: "/solutions/government",
				icon: Shield
			},
			{
				title: "Enterprise",
				desc: "Cross-functional transformation",
				href: "/solutions/enterprise",
				icon: Briefcase
			}
		]
	},
	{
		label: "Services",
		simple: [
			{
				title: "AI Consulting",
				desc: "Strategy, roadmap & ROI",
				href: "/services/ai-consulting",
				icon: Compass
			},
			{
				title: "Digital Transformation",
				desc: "Reinvent how you operate",
				href: "/services/digital-transformation",
				icon: Rocket
			},
			{
				title: "Software Development",
				desc: "Ship product like the best",
				href: "/services/software-development",
				icon: CodeXml
			},
			{
				title: "Cloud Migration",
				desc: "Move without downtime",
				href: "/services/cloud-migration",
				icon: CircleArrowUp
			},
			{
				title: "UX/UI Design",
				desc: "Design that converts",
				href: "/services/ux-ui-design",
				icon: Palette
			},
			{
				title: "Product Strategy",
				desc: "From idea to roadmap",
				href: "/services/product-strategy",
				icon: Target
			},
			{
				title: "Maintenance & Support",
				desc: "24/7 SLA-backed care",
				href: "/services/maintenance-support",
				icon: LifeBuoy
			}
		]
	},
	{
		label: "Resources",
		simple: [
			{
				title: "Blog",
				desc: "Insights & product updates",
				href: "/resources/blog",
				icon: BookOpen
			},
			{
				title: "Case Studies",
				desc: "How teams win with AI",
				href: "/resources/case-studies",
				icon: FileText
			},
			{
				title: "Documentation",
				desc: "Developer & admin docs",
				href: "/resources/documentation",
				icon: FileCode
			},
			{
				title: "Success Stories",
				desc: "Outcomes from customers",
				href: "/resources/success-stories",
				icon: Trophy
			},
			{
				title: "Help Center",
				desc: "Guides & how-tos",
				href: "/resources/help-center",
				icon: CircleQuestionMark
			},
			{
				title: "FAQs",
				desc: "Answers to common questions",
				href: "/resources/faqs",
				icon: MessageSquare
			},
			{
				title: "Contact",
				desc: "Talk to our team",
				href: "/resources/contact",
				icon: MessageSquare
			}
		]
	},
	{
		label: "Pricing",
		href: "/pricing"
	},
	{
		label: "Company",
		simple: [
			{
				title: "About Us",
				desc: "Our mission & story",
				href: "/company/about",
				icon: Info
			},
			{
				title: "Our Team",
				desc: "The people behind Pascual.ai",
				href: "/company/team",
				icon: Users
			},
			{
				title: "Careers",
				desc: "Open roles worldwide",
				href: "/company/careers",
				icon: Briefcase
			},
			{
				title: "Partners",
				desc: "Build & sell with us",
				href: "/company/partners",
				icon: Handshake
			},
			{
				title: "News",
				desc: "Press & announcements",
				href: "/company/news",
				icon: Newspaper
			},
			{
				title: "Contact",
				desc: "Get in touch",
				href: "/company/contact",
				icon: MessageSquare
			}
		]
	}
];
function SiteHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [openIndex, setOpenIndex] = (0, import_react.useState)(null);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const closeTimer = (0, import_react.useRef)(null);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 4);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setMobileOpen(false);
		setOpenIndex(null);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => e.key === "Escape" && setOpenIndex(null);
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	const hoverOpen = (i) => {
		if (closeTimer.current) window.clearTimeout(closeTimer.current);
		setOpenIndex(i);
	};
	const hoverClose = () => {
		if (closeTimer.current) window.clearTimeout(closeTimer.current);
		closeTimer.current = window.setTimeout(() => setOpenIndex(null), 120);
	};
	const isActive = (href) => !!href && (href === "/" ? pathname === "/" : pathname.startsWith(href));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-50 w-full transition-colors duration-300 ${scrolled || openIndex !== null ? "border-b border-border/70 bg-background/90 backdrop-blur-xl" : "border-b border-transparent bg-background/70 backdrop-blur"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex h-16 items-center justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						onMouseLeave: hoverClose,
						children: NAV.map((item, i) => {
							const active = isActive(item.href) || (item.groups?.some((g) => g.links.some((l) => isActive(l.href))) ?? item.simple?.some((l) => isActive(l.href)));
							if (!!!(item.groups || item.simple) && item.href) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.href,
								className: `rounded-md px-3 py-2 text-sm font-medium transition-colors ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
								children: [item.label, active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-auto mt-0.5 block h-0.5 w-4 rounded-full bg-primary" })]
							}, item.label);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative",
								onMouseEnter: () => hoverOpen(i),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setOpenIndex(openIndex === i ? null : i),
									className: `flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${active || openIndex === i ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
									"aria-expanded": openIndex === i,
									children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-3.5 w-3.5 transition-transform ${openIndex === i ? "rotate-180" : ""}` })]
								})
							}, item.label);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/resources/contact",
							className: "group hidden items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-elevated hover:-translate-y-px sm:inline-flex",
							children: ["Book a demo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "grid h-10 w-10 place-items-center rounded-lg border border-border bg-white lg:hidden",
							onClick: () => setMobileOpen((o) => !o),
							"aria-label": "Toggle menu",
							children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})]
					})
				]
			}),
			openIndex !== null && NAV[openIndex] && (NAV[openIndex].groups || NAV[openIndex].simple) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 top-full hidden lg:block",
				onMouseEnter: () => hoverOpen(openIndex),
				onMouseLeave: hoverClose,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-page pb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MegaPanel, { item: NAV[openIndex] })
				})
			}),
			mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border bg-white lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page max-h-[75vh] overflow-y-auto py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileNav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 border-t border-border pt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/resources/contact",
							className: "flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground",
							children: ["Book a demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})]
				})
			})
		]
	});
}
function MegaPanel({ item }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "animate-fade-up overflow-hidden rounded-2xl border border-border bg-white shadow-elevated ring-1 ring-black/5",
		children: item.groups ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-0 lg:grid-cols-[1fr_1fr_1fr_1fr_0.9fr]",
			children: [item.groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border p-6 lg:border-b-0 lg:border-r",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
					children: g.heading
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-1",
					children: g.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: l.href,
						className: "group -mx-2 flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-muted/60",
						children: [l.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary ring-1 ring-primary/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l.icon, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium text-foreground",
								children: l.title
							}), l.desc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-xs text-muted-foreground",
								children: l.desc
							})]
						})]
					}) }, l.href))
				})]
			}, g.heading)), item.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-primary-gradient opacity-[0.08]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex h-full flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex w-fit rounded-full border border-primary/20 bg-white/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary",
							children: "Featured"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-3 text-base font-semibold",
							children: item.featured.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: item.featured.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.featured.href,
							className: "group mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-primary",
							children: [
								item.featured.cta,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" })
							]
						})
					]
				})]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-1 p-4 sm:grid-cols-2 lg:grid-cols-4",
			children: item.simple.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: l.href,
				className: "group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted/60",
				children: [l.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary ring-1 ring-primary/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l.icon, { className: "h-4 w-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm font-medium",
						children: l.title
					}), l.desc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 block text-xs text-muted-foreground",
						children: l.desc
					})]
				})]
			}, l.href))
		})
	});
}
function MobileNav() {
	const [open, setOpen] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-1",
		children: NAV.map((item) => {
			if (!!!(item.groups || item.simple) && item.href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: item.href,
				className: "block rounded-lg px-3 py-3 text-[15px] font-medium hover:bg-muted/60",
				children: item.label
			}) }, item.label);
			const isOpen = open === item.label;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setOpen(isOpen ? null : item.label),
				className: "flex w-full items-center justify-between rounded-lg px-3 py-3 text-[15px] font-medium hover:bg-muted/60",
				children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}` })]
			}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 space-y-4 pb-2 pl-2",
				children: [item.groups?.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-3 pb-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
					children: g.heading
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: g.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.href,
					className: "block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted/60 hover:text-foreground",
					children: l.title
				}) }, l.href)) })] }, g.heading)), item.simple && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: item.simple.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.href,
					className: "block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted/60 hover:text-foreground",
					children: l.title
				}) }, l.href)) })]
			})] }, item.label);
		})
	});
}
var cols = [
	{
		title: "Products",
		links: [
			{
				l: "AI Automation",
				h: "/products/ai-automation"
			},
			{
				l: "AI Agents",
				h: "/products/ai-agents"
			},
			{
				l: "Enterprise AI",
				h: "/products/enterprise-ai-solutions"
			},
			{
				l: "SaaS Platforms",
				h: "/products/saas-platforms"
			},
			{
				l: "Business Intelligence",
				h: "/products/business-intelligence"
			}
		]
	},
	{
		title: "Solutions",
		links: [
			{
				l: "Healthcare",
				h: "/solutions/healthcare"
			},
			{
				l: "Finance",
				h: "/solutions/finance"
			},
			{
				l: "Retail",
				h: "/solutions/retail"
			},
			{
				l: "Manufacturing",
				h: "/solutions/manufacturing"
			},
			{
				l: "Government",
				h: "/solutions/government"
			}
		]
	},
	{
		title: "Company",
		links: [
			{
				l: "About",
				h: "/company/about"
			},
			{
				l: "Team",
				h: "/company/team"
			},
			{
				l: "Careers",
				h: "/company/careers"
			},
			{
				l: "Partners",
				h: "/company/partners"
			},
			{
				l: "News",
				h: "/company/news"
			}
		]
	},
	{
		title: "Resources",
		links: [
			{
				l: "Blog",
				h: "/resources/blog"
			},
			{
				l: "Case Studies",
				h: "/resources/case-studies"
			},
			{
				l: "Documentation",
				h: "/resources/documentation"
			},
			{
				l: "Help Center",
				h: "/resources/help-center"
			},
			{
				l: "Contact",
				h: "/resources/contact"
			}
		]
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[1.4fr_2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm text-muted-foreground",
						children: "Enterprise AI, software, cloud & data — built to transform how the world's largest teams operate."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => e.preventDefault(),
						className: "mt-6 flex max-w-sm items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								placeholder: "Work email",
								className: "w-full rounded-lg border border-border bg-white py-2.5 pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-elevated",
							children: "Subscribe"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-8 sm:grid-cols-4",
					children: cols.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-widest text-foreground",
						children: c.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: c.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.h,
							className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
							children: l.l
						}) }, l.h))
					})] }, c.title))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Pascual.ai. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-2.5 py-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500" }), "All systems operational"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-2.5 py-1",
						children: "SOC 2 Type II"
					})]
				})]
			})]
		})
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/**
* Fetches the list of available models from the Gemini API and returns
* the best one suitable for generateContent (prefers flash models).
*/
/**
* Checks whether a Gemini API error is a "model not available" error
* (404 deprecation or "no longer available to new users").
*/
/**
* Attempts to run a Gemini generateContent chat with automatic model fallback.
* Tries each model in PREFERRED_MODELS in order. If all fail with a
* "not available" error, dynamically fetches the best available model and
* retries once more.
*/
var chatWithGemini = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("0952badcfed43ea827490e266f3e43f74749baa0ce7fc0d4704f688a048804a0"));
var SUGGESTED_PROMPTS = [
	"What AI solutions do you build?",
	"How fast can you deploy an agent?",
	"Do you support SOC 2 / HIPAA?",
	"How can I book a demo?"
];
var WELCOME = [{
	id: "welcome-1",
	sender: "bot",
	text: "👋 Welcome to Pascual.ai! Want to deploy autonomous AI agents in your enterprise?",
	displayText: "👋 Welcome to Pascual.ai! Want to deploy autonomous AI agents in your enterprise?",
	hasCta: false,
	timestamp: /* @__PURE__ */ new Date()
}, {
	id: "welcome-2",
	sender: "bot",
	text: "Let me help you figure out what we can build for your team.",
	displayText: "Let me help you figure out what we can build for your team.",
	hasCta: false,
	timestamp: /* @__PURE__ */ new Date()
}];
function formatTime(date) {
	return date.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit"
	});
}
function parseCta(text) {
	const ctaMatch = text.match(/\[CTA:([\w-]+)\]/);
	if (!ctaMatch) return {
		displayText: text.trim(),
		hasCta: false
	};
	const ctaType = ctaMatch[1];
	return {
		displayText: text.replace(/\[CTA:[\w-]+\]/g, "").trim(),
		hasCta: true,
		ctaType
	};
}
function CtaButton({ type }) {
	if (type === "book-demo") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/resources/contact",
		className: "mt-3 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-px hover:shadow-glow",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5" }),
			"Book a free demo",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })
		]
	});
	return null;
}
function MessageBubble({ msg }) {
	const isUser = msg.sender === "user";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex gap-2.5 ${isUser ? "flex-row-reverse" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `grid h-7 w-7 shrink-0 place-items-center self-end rounded-full text-xs font-semibold ${isUser ? "bg-primary text-primary-foreground" : "border border-border bg-muted"}`,
			children: isUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-3.5 w-3.5 text-primary" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `flex max-w-[80%] flex-col gap-1 ${isUser ? "items-end" : "items-start"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-soft ${isUser ? "rounded-tr-none bg-primary text-primary-foreground" : "rounded-tl-none border border-border bg-card text-foreground"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "whitespace-pre-line",
						children: msg.displayText
					}),
					msg.streaming && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-0.5 inline-block h-3.5 w-0.5 animate-pulse rounded-full bg-current opacity-70" }),
					!isUser && msg.hasCta && msg.ctaType && !msg.streaming && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, { type: msg.ctaType })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] text-muted-foreground/60",
				children: formatTime(msg.timestamp)
			})]
		})]
	});
}
function TypingIndicator() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-7 w-7 shrink-0 place-items-center self-end rounded-full border border-border bg-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-3.5 w-3.5 text-primary" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-2xl rounded-tl-none border border-border bg-card px-4 py-3 shadow-soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/40 [animation-delay:-0.3s]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/40 [animation-delay:-0.15s]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/40" })
				]
			})
		})]
	});
}
function Chatbot() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [messages, setMessages] = (0, import_react.useState)(WELCOME);
	const [inputValue, setInputValue] = (0, import_react.useState)("");
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [showNotification, setShowNotification] = (0, import_react.useState)(false);
	const [unreadCount, setUnreadCount] = (0, import_react.useState)(0);
	const chatEndRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => {
			if (!isOpen) {
				setShowNotification(true);
				setUnreadCount(1);
			}
		}, 5e3);
		return () => clearTimeout(t);
	}, [isOpen]);
	(0, import_react.useEffect)(() => {
		const handler = (e) => {
			if (e.key === "Escape" && isOpen) setIsOpen(false);
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [isOpen]);
	(0, import_react.useEffect)(() => {
		chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, isLoading]);
	(0, import_react.useEffect)(() => {
		if (isOpen) {
			setTimeout(() => inputRef.current?.focus(), 100);
			setUnreadCount(0);
		}
	}, [isOpen]);
	const streamText = (0, import_react.useCallback)((msgId, fullText) => {
		const { displayText, hasCta, ctaType } = parseCta(fullText);
		let i = 0;
		const chunkSize = 3;
		const tick = () => {
			i = Math.min(i + chunkSize, displayText.length);
			const chunk = displayText.slice(0, i);
			const done = i >= displayText.length;
			setMessages((prev) => prev.map((m) => m.id === msgId ? {
				...m,
				displayText: chunk,
				hasCta: done ? hasCta : false,
				ctaType: done ? ctaType : void 0,
				streaming: !done
			} : m));
			if (!done) setTimeout(tick, 16);
		};
		tick();
	}, []);
	const handleSend = (0, import_react.useCallback)(async (text) => {
		if (!text.trim() || isLoading) return;
		const userMsg = {
			id: `user-${Date.now()}`,
			sender: "user",
			text,
			displayText: text,
			hasCta: false,
			timestamp: /* @__PURE__ */ new Date()
		};
		const history = messages.filter((m) => m.id !== "welcome-1" && m.id !== "welcome-2").map((m) => ({
			role: m.sender === "user" ? "user" : "model",
			text: m.text
		}));
		setMessages((prev) => [...prev, userMsg]);
		setInputValue("");
		setIsLoading(true);
		try {
			const result = await chatWithGemini({ data: { messages: [...history, {
				role: "user",
				text
			}] } });
			const botMsgId = `bot-${Date.now()}`;
			const { displayText: initialDisplay, hasCta, ctaType } = parseCta(result.text);
			const botMsg = {
				id: botMsgId,
				sender: "bot",
				text: result.text,
				displayText: "",
				hasCta,
				ctaType,
				streaming: true,
				timestamp: /* @__PURE__ */ new Date()
			};
			setMessages((prev) => [...prev, botMsg]);
			setIsLoading(false);
			streamText(botMsgId, result.text);
		} catch {
			const errMsg = {
				id: `err-${Date.now()}`,
				sender: "bot",
				text: "Sorry, I ran into a hiccup. Please try again or reach out via our contact page.",
				displayText: "Sorry, I ran into a hiccup. Please try again or reach out via our contact page.",
				hasCta: false,
				timestamp: /* @__PURE__ */ new Date()
			};
			setMessages((prev) => [...prev, errMsg]);
			setIsLoading(false);
		}
	}, [
		isLoading,
		messages,
		streamText
	]);
	const handleReset = () => {
		setMessages(WELCOME);
	};
	const toggleOpen = () => {
		setIsOpen((v) => !v);
		setShowNotification(false);
		setUnreadCount(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-40 bg-black/30 backdrop-blur-sm sm:hidden",
		onClick: () => setIsOpen(false)
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-5 right-5 z-50 flex flex-col items-end sm:bottom-6 sm:right-6",
		children: [
			showNotification && !isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 w-72 animate-fade-up rounded-2xl border border-border bg-white p-4 shadow-elevated",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-8 w-8 place-items-center rounded-lg bg-primary-soft text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-foreground",
								children: "Pascual AI Agent"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground leading-relaxed",
								children: "Hey! Ask me anything about our enterprise AI solutions."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: (e) => {
								e.stopPropagation();
								setShowNotification(false);
								setUnreadCount(0);
							},
							className: "rounded p-0.5 text-muted-foreground/50 hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
						})
					]
				})
			}),
			isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "\n              animate-fade-up\n              mb-3 flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-elevated\n              /* Mobile: full-screen */\n              fixed bottom-0 left-0 right-0 top-0 rounded-none\n              /* sm+: fixed-size widget above the button */\n              sm:relative sm:bottom-auto sm:left-auto sm:right-auto sm:top-auto\n              sm:h-[580px] sm:w-[380px] sm:rounded-3xl\n            ",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative shrink-0 bg-gradient-to-r from-primary to-blue-700 px-5 py-4 text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-9 w-9 place-items-center rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-semibold tracking-tight",
									children: "Pascual AI Agent"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-0.5 flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-white/75",
										children: "Always active"
									})]
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: handleReset,
									title: "Reset conversation",
									className: "rounded-lg p-2 transition-colors hover:bg-white/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setIsOpen(false),
									className: "rounded-lg p-2 transition-colors hover:bg-white/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 space-y-4 overflow-y-auto p-4",
						children: [
							messages.map((msg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageBubble, { msg }, msg.id)),
							isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypingIndicator, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: chatEndRef })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "shrink-0 space-y-2.5 border-t border-border bg-card px-3 pb-3 pt-3",
						children: [
							messages.length <= 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1.5",
								children: SUGGESTED_PROMPTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									disabled: isLoading,
									onClick: () => handleSend(p),
									className: "rounded-full border border-border bg-muted/30 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-50",
									children: p
								}, p))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: (e) => {
									e.preventDefault();
									handleSend(inputValue);
								},
								className: "flex items-center gap-2 rounded-xl border border-border bg-muted/30 px-3 py-1.5 transition-all focus-within:border-primary/50 focus-within:bg-card focus-within:ring-1 focus-within:ring-primary/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: inputRef,
									type: "text",
									value: inputValue,
									onChange: (e) => setInputValue(e.target.value),
									placeholder: "Ask anything about Pascual.ai…",
									disabled: isLoading,
									className: "flex-1 bg-transparent py-1.5 text-sm focus:outline-none disabled:opacity-50"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: !inputValue.trim() || isLoading,
									className: "grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-soft transition-all hover:opacity-90 disabled:opacity-40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center justify-center gap-1 text-[10px] text-muted-foreground/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-2.5 w-2.5 text-primary/60" }), "Powered by Pascual Enterprise AI"]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: toggleOpen,
				"aria-label": "Toggle chat",
				className: "relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-glow transition-all hover:scale-105 active:scale-95",
				children: [isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-6 w-6" }), !isOpen && unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white ring-2 ring-white",
					children: unreadCount
				})]
			})
		]
	})] });
}
function SiteLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chatbot, {})
		]
	});
}
//#endregion
export { createSsrRpc as n, SiteLayout as t };
