import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-lg bg-primary-gradient text-primary-foreground shadow-soft">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20V6a2 2 0 0 1 2-2h6a5 5 0 0 1 0 10H8" />
          <circle cx="17" cy="17" r="2.4" fill="currentColor" stroke="none" />
        </svg>
      </span>
      <span className="text-[15px] font-semibold tracking-tight">Pascual<span className="text-primary">.ai</span></span>
    </Link>
  );
}
