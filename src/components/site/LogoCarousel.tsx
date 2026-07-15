import { useRef } from "react";

type Logo = {
  name: string;
  src: string;
};

type LogoCarouselProps = {
  logos: Logo[];
};

export function LogoCarousel({ logos }: LogoCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
  };
  const handleMouseLeave = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "running";
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* The track holds two identical sets so one can always be off-screen while the other is in view */}
      <div
        ref={trackRef}
        className="logo-scroll-track flex items-center"
        aria-label="Partner logos"
      >
        {/* Set A */}
        <div className="logo-scroll-set flex shrink-0 items-center" aria-hidden="false">
          {logos.map((logo, i) => (
            <LogoItem key={`a-${i}`} logo={logo} />
          ))}
        </div>
        {/* Set B — exact clone, aria-hidden so screen readers skip it */}
        <div className="logo-scroll-set flex shrink-0 items-center" aria-hidden="true">
          {logos.map((logo, i) => (
            <LogoItem key={`b-${i}`} logo={logo} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}

function LogoItem({ logo, alt }: { logo: Logo; alt?: string }) {
  return (
    <div className="logo-item group flex shrink-0 items-center justify-center px-10">
      {/* Fixed-size container forces every logo to the same visual footprint */}
      <div className="flex h-14 w-36 items-center justify-center">
        <img
          src={logo.src}
          alt={alt !== undefined ? alt : logo.name}
          className="max-h-12 max-w-full w-auto object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
          style={{ filter: "grayscale(100%)" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%)";
            (e.currentTarget as HTMLImageElement).style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLImageElement).style.filter = "grayscale(100%)";
            (e.currentTarget as HTMLImageElement).style.opacity = "0.6";
          }}
        />
      </div>
    </div>
  );
}
