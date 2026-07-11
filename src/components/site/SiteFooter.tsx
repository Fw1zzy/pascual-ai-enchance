import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Products",
    links: [
      { l: "AI Automation", h: "/products/ai-automation" },
      { l: "AI Agents", h: "/products/ai-agents" },
      { l: "Enterprise AI", h: "/products/enterprise-ai-solutions" },
      { l: "SaaS Platforms", h: "/products/saas-platforms" },
      { l: "Business Intelligence", h: "/products/business-intelligence" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { l: "Healthcare", h: "/solutions/healthcare" },
      { l: "Finance", h: "/solutions/finance" },
      { l: "Retail", h: "/solutions/retail" },
      { l: "Manufacturing", h: "/solutions/manufacturing" },
      { l: "Government", h: "/solutions/government" },
    ],
  },
  {
    title: "Company",
    links: [
      { l: "About", h: "/company/about" },
      { l: "Team", h: "/company/team" },
      { l: "Careers", h: "/company/careers" },
      { l: "Partners", h: "/company/partners" },
      { l: "News", h: "/company/news" },
    ],
  },
  {
    title: "Resources",
    links: [
      { l: "Blog", h: "/resources/blog" },
      { l: "Case Studies", h: "/resources/case-studies" },
      { l: "Documentation", h: "/resources/documentation" },
      { l: "Help Center", h: "/resources/help-center" },
      { l: "Contact", h: "/resources/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Enterprise AI, software, cloud & data — built to transform how the world's largest teams operate.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex max-w-sm items-center gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  required
                  placeholder="Work email"
                  className="w-full rounded-lg border border-border bg-white py-2.5 pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button type="submit" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-elevated">
                Subscribe
              </button>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground">{c.title}</p>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.h}>
                      <Link to={l.h} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {l.l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Pascual.ai. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              All systems operational
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-2.5 py-1">
              SOC 2 Type II
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
