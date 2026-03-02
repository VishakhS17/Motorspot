"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const HERO_POSTER = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const connection =
      (navigator as Navigator & { connection?: { saveData?: boolean } })
        .connection ||
      (navigator as Navigator & { mozConnection?: { saveData?: boolean } })
        .mozConnection ||
      undefined;
    const saveData =
      (navigator as Navigator & { saveData?: boolean }).saveData ||
      connection?.saveData;
    const isDataSaver = saveData === true;
    const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 768;

    if (isDataSaver || isSmallScreen) {
      container.dataset.videoDisabled = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video
              .play()
              .catch(() => {
                container.dataset.videoDisabled = "true";
              });
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100svh] min-h-screen flex items-center justify-center overflow-hidden font-orbitron"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_POSTER}
          alt="Motorspot automotive studio"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          poster={HERO_POSTER}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-b from-motorspot-bg/60 via-motorspot-bg/40 to-motorspot-bg/70 pointer-events-none"
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-24 lg:py-32 max-w-3xl mx-auto">
        <p className="text-[0.65rem] sm:text-xs tracking-[0.18em] sm:tracking-[0.2em] text-motorspot-highlight mb-4 uppercase">
          Edappally, Kochi
        </p>
        <h1 className="text-[clamp(2.75rem,14vw,7rem)] tracking-[0.12em] sm:tracking-[0.18em] leading-none mb-2">
          MOTORSPOT
        </h1>
        <p className="hero-text-glow font-bold text-[0.7rem] sm:text-xs tracking-[0.16em] sm:tracking-[0.28em] text-motorspot-accent mb-2 uppercase max-w-[26rem] mx-auto">
          AUTOMOTIVE PERFORMANCE & RESTYLING LAB
        </p>
        <p className="hero-text-glow font-bold text-[0.8rem] sm:text-sm tracking-[0.14em] sm:tracking-[0.17em] text-motorspot-accent mb-10">
          Detailing // Protection // Customization
        </p>
        <div className="flex justify-center">
          <Link
            href="/#services"
            className="px-8 py-3 border-2 border-motorspot-accent text-motorspot-accent font-medium tracking-wider hover:bg-motorspot-accent hover:text-white transition-colors"
          >
            VIEW SERVICES
          </Link>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 h-12 w-px bg-gradient-to-b from-motorspot-highlight/50 to-transparent animate-pulse"
        aria-hidden="true"
      />
    </section>
  );
}
