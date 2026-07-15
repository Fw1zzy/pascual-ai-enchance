import { r as __toESM } from "../_runtime.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { T as Minus, tt as Check, ut as ArrowRight, y as Plus } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sections-D1NAD9E3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, description, primary, secondary, align = "center" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-hero-gradient pb-16 pt-16 sm:pb-24 sm:pt-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 grid-bg",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `${align === "center" ? "mx-auto text-center" : "text-left"} max-w-3xl`,
				children: [
					eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "animate-fade-up text-xs font-semibold uppercase tracking-widest text-primary",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl",
						style: { animationDelay: "60ms" },
						children: title
					}),
					description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg animate-fade-up ${align === "center" ? "mx-auto" : ""}`,
						style: { animationDelay: "120ms" },
						children: description
					}),
					(primary || secondary) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `mt-8 flex flex-col gap-3 sm:flex-row ${align === "center" ? "justify-center" : ""} animate-fade-up`,
						style: { animationDelay: "180ms" },
						children: [primary && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: primary.href,
							className: "group inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-elevated transition-all hover:-translate-y-px hover:shadow-glow",
							children: [primary.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
						}), secondary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: secondary.href,
							className: "inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-white px-5 py-3 text-sm font-medium text-foreground shadow-soft transition-all hover:bg-muted",
							children: secondary.label
						})]
					})
				]
			})
		})]
	});
}
function Section({ children, className = "", surface = false, id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `py-20 sm:py-24 ${surface ? "bg-surface" : ""} ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children
		})
	});
}
function SectionHeading({ eyebrow, title, description, align = "center" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${align === "center" ? "mx-auto text-center" : "text-left"} max-w-2xl`,
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-widest text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-3xl font-bold tracking-tight sm:text-4xl",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: description
			})
		]
	});
}
function FeatureGrid({ items, columns = 3 }) {
	const cols = {
		2: "sm:grid-cols-2",
		3: "sm:grid-cols-2 lg:grid-cols-3",
		4: "sm:grid-cols-2 lg:grid-cols-4"
	}[columns];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `grid gap-5 ${cols}`,
		children: items.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-primary-gradient opacity-0 transition-opacity group-hover:opacity-[0.03]" }),
				f.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
	});
}
function SplitBullets({ eyebrow, title, description, bullets, reverse, visual }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-widest text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 text-3xl font-bold tracking-tight sm:text-4xl",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: description
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
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 -z-10 rounded-[2rem] bg-primary-gradient opacity-[0.08] blur-2xl" }), visual ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MockPanel, {})]
		})]
	});
}
function StepList({ steps }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "grid gap-5 md:grid-cols-2 lg:grid-cols-4",
		children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "relative rounded-2xl border border-border bg-card p-6 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 grid h-9 w-9 place-items-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground shadow-soft",
					children: i + 1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-base font-semibold",
					children: s.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: s.desc
				})
			]
		}, s.title))
	});
}
function Timeline({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "relative border-l border-border pl-8",
		children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "relative pb-10 last:pb-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute -left-[37px] top-1 grid h-6 w-6 place-items-center rounded-full border border-border bg-white text-[11px] font-semibold text-primary shadow-soft",
					children: i + 1
				}),
				it.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-primary",
					children: it.tag
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 text-lg font-semibold",
					children: it.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-sm text-muted-foreground",
					children: it.desc
				})
			]
		}, i))
	});
}
function StatsBand({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-8 rounded-3xl border border-border bg-card p-10 shadow-soft sm:grid-cols-2 lg:grid-cols-4",
		children: items.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-4xl font-bold tracking-tight sm:text-5xl",
			children: s.value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: s.label
		})] }, s.label))
	});
}
function FAQ({ items }) {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card shadow-soft",
		children: items.map((it, i) => {
			const isOpen = open === i;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setOpen(isOpen ? null : i),
				className: "grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-4 p-6 text-left transition-colors hover:bg-muted/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[15px] font-semibold",
						children: it.q
					}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground animate-fade-up",
						children: it.a
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground",
					children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" })
				})]
			}, it.q);
		})
	});
}
function CTASection({ title, description, primary, secondary }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pb-24 pt-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl bg-primary-gradient px-8 py-14 text-center shadow-glow sm:px-16 sm:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-30",
					style: { backgroundImage: "radial-gradient(circle at 20% 0%, rgba(255,255,255,0.3), transparent 50%), radial-gradient(circle at 80% 100%, rgba(255,255,255,0.2), transparent 50%)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-2xl text-primary-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold tracking-tight sm:text-4xl",
							children: title
						}),
						description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-primary-foreground/85",
							children: description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
							children: [primary && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: primary.href,
								className: "group inline-flex items-center justify-center gap-1.5 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary shadow-soft transition-all hover:-translate-y-px",
								children: [primary.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
							}), secondary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: secondary.href,
								className: "inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20",
								children: secondary.label
							})]
						})
					]
				})]
			})
		})
	});
}
function CardGrid({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
		children: items.map((c) => {
			const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated",
				children: [
					c.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex rounded-full border border-border bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
						children: c.tag
					}),
					c.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary ring-1 ring-primary/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 text-base font-semibold",
						children: c.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: c.desc
					}),
					c.href && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary",
						children: [
							"Learn more",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" })
						]
					})
				]
			});
			return c.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: c.href,
				children: inner
			}, c.title) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: inner }, c.title);
		})
	});
}
function MockPanel({ label = "Pascual.ai Console" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-2xl border border-border bg-white shadow-elevated ring-1 ring-black/5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1.5 border-b border-border bg-surface px-4 py-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-rose-400/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-amber-400/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-emerald-400/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-3 text-xs text-muted-foreground",
					children: label
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-6 gap-4 p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "col-span-2 space-y-2",
				children: [
					"Overview",
					"Workflows",
					"Agents",
					"Data",
					"Reports",
					"Settings"
				].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-md bg-muted/60 px-2 py-1.5 text-[11px] font-medium text-muted-foreground",
					children: l
				}, l))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-4 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-3",
						children: [
							{
								v: "12.4k",
								l: "Runs"
							},
							{
								v: "98.7%",
								l: "Success"
							},
							{
								v: "312ms",
								l: "p95"
							}
						].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-semibold",
								children: k.v
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted-foreground",
								children: k.l
							})]
						}, k.l))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-32 rounded-lg border border-border p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-full items-end gap-1.5",
							children: [
								40,
								55,
								38,
								62,
								70,
								58,
								78,
								66,
								82,
								74,
								90,
								84
							].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 rounded-t bg-primary-gradient opacity-80",
								style: { height: `${h}%` }
							}, i))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-1.5",
						children: [
							"Enrichment pipeline · completed",
							"Agent handoff · in progress",
							"Data sync · scheduled"
						].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between rounded-md bg-muted/50 px-3 py-2 text-[11px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-white px-2 py-0.5 text-[10px] text-muted-foreground border border-border",
								children: "just now"
							})]
						}, i))
					})
				]
			})]
		})]
	});
}
//#endregion
export { MockPanel as a, SectionHeading as c, StepList as d, Timeline as f, FeatureGrid as i, SplitBullets as l, CardGrid as n, PageHero as o, FAQ as r, Section as s, CTASection as t, StatsBand as u };
