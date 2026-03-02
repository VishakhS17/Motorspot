export function Footer() {
  return (
    <footer className="bg-motorspot-panel border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-lg tracking-[0.15em] mb-2">
              MOTORSPOT
            </h3>
            <p className="text-sm text-motorspot-highlight/80">
              Automotive Performance & Restyling Lab
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-motorspot-highlight/80">
              <span className="font-medium text-motorspot-text">Address</span>
              <br />
              Edappally, Kochi
            </p>
            <p className="text-sm text-motorspot-highlight/80">
              <span className="font-medium text-motorspot-text">Phone</span>
              <br />
              <a
                href="tel:+917511128000"
                className="hover:text-motorspot-accent transition-colors"
              >
                75111 28000
              </a>
            </p>
            <p className="text-sm text-motorspot-highlight/80">
              <span className="font-medium text-motorspot-text">
                Working Hours
              </span>
              <br />
              Mon–Sat: 9:00 AM – 7:00 PM
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="https://www.instagram.com/motorspot.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-motorspot-highlight/80 hover:text-motorspot-accent transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/917511128000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-fit px-5 py-2.5 bg-[#25D366] text-white text-sm font-medium hover:bg-[#20bd5a] transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <p className="text-xs text-motorspot-highlight/60 text-center pt-8 border-t border-white/5">
          © Motorspot. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
