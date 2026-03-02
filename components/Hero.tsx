"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    // Strengthen autoplay reliability on mobile (esp. iOS Safari)
    video.muted = true;
    video.autoplay = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      try {
        video.load();
      } catch {
        // ignore
      }
      video.play().catch(() => {
        // Mobile browsers may still block autoplay in some modes (Low Power, data saver, etc.)
        container.dataset.videoDisabled = "true";
      });
    };

    // Attempt immediately after mount (default behavior)
    tryPlay();

    // Retry once video has enough data
    const onLoadedData = () => tryPlay();
    video.addEventListener("loadeddata", onLoadedData, { once: true });

    return () => {
      video.removeEventListener("loadeddata", onLoadedData);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100svh] min-h-screen flex items-center justify-center overflow-hidden font-orbitron"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-[1]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/video/Video%20Project.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 z-[2] bg-gradient-to-b from-motorspot-bg/60 via-motorspot-bg/40 to-motorspot-bg/70 pointer-events-none"
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-24 lg:py-32 max-w-3xl mx-auto">
        <p className="hero-text-glow font-extrabold text-[0.8rem] sm:text-sm tracking-[0.2em] sm:tracking-[0.28em] text-motorspot-accent mb-4 uppercase">
          Kochi, Kerala
        </p>
        <h1 className="text-[clamp(2.3rem,11vw,5.75rem)] tracking-[0.12em] sm:tracking-[0.18em] leading-tight sm:leading-none">
          MOTORSPOT
        </h1>
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
