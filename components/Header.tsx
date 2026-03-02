import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="pointer-events-auto flex items-center justify-between gap-4 h-12 sm:h-14 rounded-full bg-white/5 border border-white/15 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.6)] px-4 sm:px-6">
          <Link
            href="/"
            className="font-display text-lg sm:text-xl tracking-[0.2em] text-motorspot-text hover:text-motorspot-accent transition-colors whitespace-nowrap"
          >
            MOTORSPOT
          </Link>
          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6 justify-end text-sm">
            <Link
              href="/services"
              className="tracking-wider text-motorspot-highlight/90 hover:text-motorspot-accent transition-colors"
            >
              SERVICES
            </Link>
            <Link
              href="/gallery"
              className="tracking-wider text-motorspot-highlight/90 hover:text-motorspot-accent transition-colors"
            >
              GALLERY
            </Link>
            <a
              href="https://wa.me/917511128000?text=Hi%20I%20want%20to%20book%20an%20appointment%20at%20Motorspot"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-motorspot-accent text-white text-sm font-medium tracking-wider rounded-full hover:bg-motorspot-accent/90 transition-colors"
            >
              BOOK
            </a>
          </nav>

          {/* Mobile menu (no JS) */}
          <details className="relative sm:hidden">
            <summary
              className="list-none select-none rounded-full px-3 py-2 text-xs tracking-wider text-motorspot-highlight/90 hover:text-motorspot-text border border-white/10 hover:border-white/20 transition-colors"
              aria-label="Open menu"
            >
              MENU
            </summary>
            <div className="absolute right-0 mt-3 w-44 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.6)] p-2">
              <Link
                href="/services"
                className="block px-3 py-2 rounded-xl text-xs tracking-wider text-motorspot-text hover:bg-white/10"
              >
                SERVICES
              </Link>
              <Link
                href="/gallery"
                className="block px-3 py-2 rounded-xl text-xs tracking-wider text-motorspot-text hover:bg-white/10"
              >
                GALLERY
              </Link>
              <a
                href="https://wa.me/917511128000?text=Hi%20I%20want%20to%20book%20an%20appointment%20at%20Motorspot"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-center px-3 py-2 rounded-xl bg-motorspot-accent text-white text-xs font-medium tracking-wider hover:bg-motorspot-accent/90 transition-colors"
              >
                BOOK
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
