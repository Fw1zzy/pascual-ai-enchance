import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV, type NavItem } from "./nav-data";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenIndex(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenIndex(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const hoverOpen = (i: number) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenIndex(i);
  };
  const hoverClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenIndex(null), 120);
  };

  const isActive = (href?: string) => !!href && (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || openIndex !== null ? "border-b border-border/70 bg-background/90 backdrop-blur-xl" : "border-b border-transparent bg-background/70 backdrop-blur"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={hoverClose}>
          {NAV.map((item, i) => {
            const active = isActive(item.href) || (item.groups?.some((g) => g.links.some((l) => isActive(l.href))) ?? item.simple?.some((l) => isActive(l.href)));
            const hasMenu = !!(item.groups || item.simple);
            if (!hasMenu && item.href) {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {item.label}
                  {active && <span className="mx-auto mt-0.5 block h-0.5 w-4 rounded-full bg-primary" />}
                </Link>
              );
            }
            return (
              <div key={item.label} className="relative" onMouseEnter={() => hoverOpen(i)}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${active || openIndex === i ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  aria-expanded={openIndex === i}
                >
                  {item.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
                </button>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/resources/contact" className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline">
            Sign in
          </Link>
          <Link
            to="/resources/contact"
            className="group hidden items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-elevated hover:-translate-y-px sm:inline-flex"
          >
            Book a demo
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-white lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Desktop mega menu panel */}
      {openIndex !== null && NAV[openIndex] && (NAV[openIndex].groups || NAV[openIndex].simple) && (
        <div
          className="absolute inset-x-0 top-full hidden lg:block"
          onMouseEnter={() => hoverOpen(openIndex)}
          onMouseLeave={hoverClose}
        >
          <div className="container-page pb-6">
            <MegaPanel item={NAV[openIndex]} />
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="container-page max-h-[75vh] overflow-y-auto py-4">
            <MobileNav />
            <div className="mt-4 border-t border-border pt-4">
              <Link
                to="/resources/contact"
                className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
              >
                Book a demo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaPanel({ item }: { item: NavItem }) {
  return (
    <div className="animate-fade-up overflow-hidden rounded-2xl border border-border bg-white shadow-elevated ring-1 ring-black/5">
      {item.groups ? (
        <div className="grid gap-0 lg:grid-cols-[1fr_1fr_1fr_1fr_0.9fr]">
          {item.groups.map((g) => (
            <div key={g.heading} className="border-b border-border p-6 lg:border-b-0 lg:border-r">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{g.heading}</p>
              <ul className="space-y-1">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="group -mx-2 flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-muted/60">
                      {l.icon && (
                        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary ring-1 ring-primary/10">
                          <l.icon className="h-4 w-4" />
                        </span>
                      )}
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-foreground">{l.title}</span>
                        {l.desc && <span className="mt-0.5 block text-xs text-muted-foreground">{l.desc}</span>}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {item.featured && (
            <div className="relative overflow-hidden p-6">
              <div className="absolute inset-0 bg-primary-gradient opacity-[0.08]" />
              <div className="relative flex h-full flex-col">
                <div className="inline-flex w-fit rounded-full border border-primary/20 bg-white/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">Featured</div>
                <h4 className="mt-3 text-base font-semibold">{item.featured.title}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.featured.desc}</p>
                <Link to={item.featured.href} className="group mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-primary">
                  {item.featured.cta} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="grid gap-1 p-4 sm:grid-cols-2 lg:grid-cols-4">
          {item.simple!.map((l) => (
            <Link key={l.href} to={l.href} className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted/60">
              {l.icon && (
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary ring-1 ring-primary/10">
                  <l.icon className="h-4 w-4" />
                </span>
              )}
              <span className="min-w-0">
                <span className="block text-sm font-medium">{l.title}</span>
                {l.desc && <span className="mt-0.5 block text-xs text-muted-foreground">{l.desc}</span>}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileNav() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <ul className="space-y-1">
      {NAV.map((item) => {
        const hasMenu = !!(item.groups || item.simple);
        if (!hasMenu && item.href) {
          return (
            <li key={item.label}>
              <Link to={item.href} className="block rounded-lg px-3 py-3 text-[15px] font-medium hover:bg-muted/60">
                {item.label}
              </Link>
            </li>
          );
        }
        const isOpen = open === item.label;
        return (
          <li key={item.label}>
            <button
              onClick={() => setOpen(isOpen ? null : item.label)}
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-[15px] font-medium hover:bg-muted/60"
            >
              {item.label}
              <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && (
              <div className="mt-1 space-y-4 pb-2 pl-2">
                {item.groups?.map((g) => (
                  <div key={g.heading}>
                    <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{g.heading}</p>
                    <ul>
                      {g.links.map((l) => (
                        <li key={l.href}>
                          <Link to={l.href} className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted/60 hover:text-foreground">
                            {l.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {item.simple && (
                  <ul>
                    {item.simple.map((l) => (
                      <li key={l.href}>
                        <Link to={l.href} className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted/60 hover:text-foreground">
                          {l.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
