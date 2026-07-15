import { r as __toESM } from "../_runtime.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { $ as ChevronRight, G as Earth, K as Database, N as Layers, X as Cloud, ct as Bot, i as Users, l as Star, n as X, p as Shield, q as Cpu, r as Workflow, rt as ChartColumn, t as Zap, tt as Check, u as Sparkles, ut as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-Ci_UNRs4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CLsd5NCH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_dashboard_default = "/assets/hero-dashboard-tkduM25K.jpg";
var showcase_1_default = "/assets/showcase-1-DsYQy9HB.jpg";
var showcase_2_default = "/assets/showcase-2-z-g6vqRG.jpg";
function LogoCarousel({ logos }) {
	const trackRef = (0, import_react.useRef)(null);
	const handleMouseEnter = () => {
		if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
	};
	const handleMouseLeave = () => {
		if (trackRef.current) trackRef.current.style.animationPlayState = "running";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative overflow-hidden",
		style: {
			maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
			WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)"
		},
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: trackRef,
			className: "logo-scroll-track flex items-center",
			"aria-label": "Partner logos",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "logo-scroll-set flex shrink-0 items-center",
				"aria-hidden": "false",
				children: logos.map((logo, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoItem, { logo }, `a-${i}`))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "logo-scroll-set flex shrink-0 items-center",
				"aria-hidden": "true",
				children: logos.map((logo, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoItem, {
					logo,
					alt: ""
				}, `b-${i}`))
			})]
		})
	});
}
function LogoItem({ logo, alt }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "logo-item group flex shrink-0 items-center justify-center px-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-14 w-36 items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: logo.src,
				alt: alt !== void 0 ? alt : logo.name,
				className: "max-h-12 max-w-full w-auto object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100",
				style: { filter: "grayscale(100%)" },
				onMouseEnter: (e) => {
					e.currentTarget.style.filter = "grayscale(0%)";
					e.currentTarget.style.opacity = "1";
				},
				onMouseLeave: (e) => {
					e.currentTarget.style.filter = "grayscale(100%)";
					e.currentTarget.style.opacity = "0.6";
				}
			})
		})
	});
}
var atlascorp_logo_default = "/assets/atlascorp-logo-BkXZ8KWD.png";
var northwind_logo_default = "/assets/northwind-logo-B8LMgdYE.png";
var stellaris_logo_default = "/assets/stellaris-logo-CMMFLxNd.png";
var summitbank_logo_default = "/assets/summitbank-logo-BehFCyYu.jpg";
var initech_logo_default = "/assets/initech-logo-DrSxibxo.png";
var globex_logo_default = "/assets/globex-logo-YqVVDkDe.png";
var umbrella_logo_default = "/assets/umbrella-logo-D-7T33lV.png";
function LandingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustedBy, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillars, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Showcase, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Industries, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comparison, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-hero-gradient pb-24 pt-16 sm:pt-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 grid-bg",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products/enterprise-ai-solutions",
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur-sm animate-fade-up",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex h-1.5 w-1.5 rounded-full bg-primary" }),
							"New · Pascual.ai Enterprise AI Platform",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl animate-fade-up",
						style: { animationDelay: "60ms" },
						children: ["Enterprise AI that ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "transforms how you operate"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg animate-fade-up",
						style: { animationDelay: "120ms" },
						children: "Pascual.ai builds AI agents, custom software, cloud platforms and data systems for the world's most demanding organizations — designed, engineered and deployed as one enterprise-grade stack."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up",
						style: { animationDelay: "180ms" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/resources/contact",
							className: "group inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-elevated transition-all hover:-translate-y-px hover:shadow-glow sm:w-auto",
							children: ["Book a demo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products/enterprise-ai-solutions",
							className: "inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border bg-white px-5 py-3 text-sm font-medium text-foreground shadow-soft transition-all hover:bg-muted sm:w-auto",
							children: "Explore the platform"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto mt-16 max-w-6xl animate-fade-up",
				style: { animationDelay: "300ms" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-x-8 -top-8 bottom-0 -z-10 rounded-[3rem] bg-primary-gradient opacity-10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl border border-border bg-white shadow-elevated ring-1 ring-black/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_dashboard_default,
						alt: "Pascual.ai enterprise AI console",
						width: 1600,
						height: 1104,
						className: "h-auto w-full"
					})
				})]
			})]
		})]
	});
}
function TrustedBy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-surface py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-xs font-medium uppercase tracking-widest text-muted-foreground",
				children: "Trusted by enterprise teams across industries"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoCarousel, { logos: [
					{
						name: "ATLASCORP",
						src: atlascorp_logo_default
					},
					{
						name: "NORTHWIND",
						src: northwind_logo_default
					},
					{
						name: "STELLARIS",
						src: stellaris_logo_default
					},
					{
						name: "SUMMITBANK",
						src: summitbank_logo_default
					},
					{
						name: "INITECH",
						src: initech_logo_default
					},
					{
						name: "GLOBEX",
						src: globex_logo_default
					},
					{
						name: "UMBRELLA",
						src: umbrella_logo_default
					}
				] })
			})]
		})
	});
}
function Pillars() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-widest text-primary",
						children: "The platform"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-bold tracking-tight sm:text-5xl",
						children: "One enterprise stack. Four pillars."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Pascual.ai unifies AI, software, cloud and data so leaders can move faster without stitching together vendors."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						icon: Bot,
						title: "AI Solutions",
						desc: "Agents, automation & custom AI models built for enterprise scale.",
						href: "/products/enterprise-ai-solutions"
					},
					{
						icon: Layers,
						title: "Software Solutions",
						desc: "Web, mobile and SaaS platforms engineered end-to-end.",
						href: "/products/saas-platforms"
					},
					{
						icon: Cloud,
						title: "Cloud & Infrastructure",
						desc: "Cloud integration, APIs, DevOps and system architecture.",
						href: "/products/cloud-integration"
					},
					{
						icon: Database,
						title: "Data & Analytics",
						desc: "BI, analytics and AI insights that drive decisions.",
						href: "/products/business-intelligence"
					}
				].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: f.href,
					className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-primary-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary ring-1 ring-primary/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-base font-semibold",
							children: f.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: f.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary",
							children: [
								"Learn more",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" })
							]
						})
					]
				}, f.title))
			})]
		})
	});
}
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "features",
		className: "bg-surface py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-primary",
					children: "Capabilities"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl font-bold tracking-tight sm:text-5xl",
					children: "Everything modern enterprises need"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						icon: Cpu,
						title: "AI Agents",
						desc: "Autonomous, tool-using agents that execute real work across your stack."
					},
					{
						icon: Workflow,
						title: "Automation",
						desc: "Composable workflows that eliminate repetitive operations across teams."
					},
					{
						icon: ChartColumn,
						title: "Analytics",
						desc: "Real-time BI and predictive insights baked into every product surface."
					},
					{
						icon: Shield,
						title: "Enterprise security",
						desc: "SOC 2 Type II, ISO 27001, GDPR, HIPAA and SSO out of the box."
					},
					{
						icon: Earth,
						title: "Global infrastructure",
						desc: "99.99% uptime SLA on multi-region cloud with edge acceleration."
					},
					{
						icon: Users,
						title: "Expert delivery",
						desc: "Senior AI, product and engineering pods embedded with your team."
					}
				].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-primary-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary ring-1 ring-primary/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-base font-semibold",
							children: f.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: f.desc
						})
					]
				}, f.title))
			})]
		})
	});
}
function Showcase() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page space-y-24 sm:space-y-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				eyebrow: "AI Agents",
				title: "Agents that do the work, not just answer",
				desc: "Deploy production-grade AI agents that reason, use tools, take actions across systems and hand off to humans with full context.",
				bullets: [
					"Tool-using autonomous execution",
					"Grounded on your enterprise data",
					"Human-in-the-loop when it matters"
				],
				image: showcase_1_default
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				reverse: true,
				eyebrow: "Enterprise Automation",
				title: "Workflow orchestration without the fragility",
				desc: "Compose AI-powered workflows in a visual builder your ops team can own — with observability, versioning and rollbacks.",
				bullets: [
					"Drag-and-drop workflow builder",
					"100+ native integrations",
					"Full audit trail & governance"
				],
				image: showcase_2_default
			})]
		})
	});
}
function Row({ eyebrow, title, desc, bullets, image, reverse }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-widest text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 text-3xl font-bold tracking-tight sm:text-4xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: desc
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-3",
				children: bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary-soft text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
				}, b))
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 -z-10 rounded-[2rem] bg-primary-gradient opacity-[0.08] blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-2xl border border-border bg-white shadow-elevated ring-1 ring-black/5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: title,
					width: 1400,
					height: 1008,
					loading: "lazy",
					className: "h-auto w-full"
				})
			})]
		})]
	});
}
function Industries() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-surface py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-primary",
					children: "Industries"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl font-bold tracking-tight sm:text-5xl",
					children: "Built for the industries you lead"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
				children: [
					{
						name: "Healthcare",
						href: "/solutions/healthcare"
					},
					{
						name: "Finance",
						href: "/solutions/finance"
					},
					{
						name: "Retail",
						href: "/solutions/retail"
					},
					{
						name: "Manufacturing",
						href: "/solutions/manufacturing"
					},
					{
						name: "Logistics",
						href: "/solutions/logistics"
					},
					{
						name: "Education",
						href: "/solutions/education"
					},
					{
						name: "Government",
						href: "/solutions/government"
					},
					{
						name: "Enterprise",
						href: "/solutions/enterprise"
					}
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: i.href,
					className: "group flex items-center justify-between rounded-xl border border-border bg-card px-4 py-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold",
						children: i.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" })]
				}, i.name))
			})]
		})
	});
}
function Comparison() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-primary",
					children: "The upgrade"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl font-bold tracking-tight sm:text-5xl",
					children: "Legacy IT vs. Pascual.ai"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-8 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm font-medium text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-muted-foreground/40" }), " Traditional approach"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-4",
						children: [
							"Vendor sprawl & handoffs",
							"Months to ship AI features",
							"Brittle prototypes in production",
							"Compliance gaps",
							"Unclear ROI"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" }),
								" ",
								t
							]
						}, t))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative rounded-2xl border border-primary/20 bg-card p-8 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 rounded-2xl bg-primary-gradient opacity-[0.04]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-sm font-medium text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary" }), " Pascual.ai"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-4",
							children: [
								"One integrated platform",
								"Live use cases in weeks",
								"Enterprise-grade from day one",
								"SOC 2, HIPAA, GDPR built-in",
								"Measured business outcomes"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-sm font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
								}), t]
							}, t))
						})
					]
				})]
			})]
		})
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-surface py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-[0.35]",
					style: {
						backgroundImage: "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
						backgroundSize: "40px 40px",
						maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
						WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)"
					}
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " By the numbers"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-bold tracking-tight sm:text-4xl",
						children: "Enterprise outcomes, measured in weeks — not quarters"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base text-muted-foreground",
						children: "Real results from teams deploying Pascual.ai across AI, software, cloud & data."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 rounded-3xl border border-border/70 bg-white/70 p-2 shadow-elevated ring-1 ring-black/5 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-px overflow-hidden rounded-[calc(1.5rem-4px)] bg-border/60 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							value: 4,
							suffix: "x",
							label: "Faster time-to-value",
							icon: Zap,
							tint: "from-blue-500/15 to-blue-500/0"
						},
						{
							value: 60,
							suffix: "%",
							label: "Ops cost reduction",
							icon: ChartColumn,
							tint: "from-emerald-500/15 to-emerald-500/0"
						},
						{
							value: 200,
							suffix: "+",
							label: "Enterprise deployments",
							icon: Layers,
							tint: "from-violet-500/15 to-violet-500/0"
						},
						{
							value: 99.99,
							suffix: "%",
							label: "Uptime SLA",
							icon: Shield,
							tint: "from-amber-500/15 to-amber-500/0"
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative overflow-hidden bg-card p-8 transition-colors hover:bg-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br ${s.tint} opacity-70 blur-2xl transition-opacity group-hover:opacity-100` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary ring-1 ring-primary/15 shadow-soft",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
									children: String(i + 1).padStart(2, "0")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "relative mt-8 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: s.value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: s.suffix
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "relative mt-3 text-sm font-medium text-muted-foreground",
								children: s.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mt-6 h-1 w-full overflow-hidden rounded-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-2/3 rounded-full bg-primary-gradient shadow-[0_0_12px_rgba(59,130,246,0.55)] transition-all duration-700 group-hover:w-full" })
							})
						]
					}, s.label))
				})
			})]
		})]
	});
}
function Counter({ to }) {
	const [n, setN] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	const started = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (!ref.current) return;
		const io = new IntersectionObserver(([e]) => {
			if (e.isIntersecting && !started.current) {
				started.current = true;
				const start = performance.now();
				const dur = 1400;
				const tick = (t) => {
					const p = Math.min(1, (t - start) / dur);
					const eased = 1 - Math.pow(1 - p, 3);
					setN(to * eased);
					if (p < 1) requestAnimationFrame(tick);
				};
				requestAnimationFrame(tick);
			}
		}, { threshold: .4 });
		io.observe(ref.current);
		return () => io.disconnect();
	}, [to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		children: to % 1 === 0 ? Math.round(n) : n.toFixed(2)
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-primary",
					children: "Loved by teams"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl font-bold tracking-tight sm:text-5xl",
					children: "Real outcomes, from day one"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 md:grid-cols-3",
				children: [
					{
						quote: "Pascual.ai delivered our AI automation platform in eight weeks. We projected six months.",
						name: "Nick Marblestone",
						role: "COO, Steel & Sons",
						initials: "NM"
					},
					{
						quote: "Their agent framework is doing work our team simply couldn't scale to before.",
						name: "Elena Ruiz",
						role: "Head of Operations, Summit Health",
						initials: "ER"
					},
					{
						quote: "The most enterprise-ready AI partner we've evaluated — governance, security and speed.",
						name: "David Chen",
						role: "VP Engineering, Northwind",
						initials: "DC"
					}
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-0.5 text-primary",
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-5 flex-1 text-[15px] leading-relaxed text-foreground/90",
							children: [
								"\"",
								t.quote,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-6 flex items-center gap-3 border-t border-border pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-gradient text-sm font-semibold text-primary-foreground",
								children: t.initials
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-semibold",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-xs text-muted-foreground",
									children: t.role
								})]
							})]
						})
					]
				}, t.name))
			})]
		})
	});
}
function FinalCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cta",
		className: "pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl bg-primary-gradient px-8 py-16 text-center shadow-glow sm:px-16 sm:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-30",
					style: { backgroundImage: "radial-gradient(circle at 20% 0%, rgba(255,255,255,0.3), transparent 50%), radial-gradient(circle at 80% 100%, rgba(255,255,255,0.2), transparent 50%)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-2xl text-primary-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold tracking-tight sm:text-5xl",
							children: "Ready to deploy enterprise AI?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-primary-foreground/85",
							children: "Talk to our team about your AI, software or cloud initiative. Live demo, custom scoping, and pricing built for enterprise."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/resources/contact",
								className: "group inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary shadow-soft transition-all hover:-translate-y-px sm:w-auto",
								children: [
									"Book a demo",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/pricing",
								className: "inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto",
								children: "See pricing"
							})]
						})
					]
				})]
			})
		})
	});
}
//#endregion
export { LandingPage as component };
