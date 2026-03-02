import { GalleryGrid } from "@/components/GalleryGrid";

// Local gallery stills from public/video (export-safe)
const GALLERY_IMAGES = [
  "/video/Screenshot 2026-03-03 003112.jpg",
  "/video/Screenshot 2026-03-03 003134.jpg",
  "/video/Screenshot 2026-03-03 003242.jpg",
  "/video/Screenshot 2026-03-03 003400.jpg",
  "/video/Screenshot 2026-03-03 003438.jpg",
  "/video/Screenshot 2026-03-03 003547.jpg",
  "/video/p1.jpg",
] as const;

export const metadata = {
  title: "Gallery — MOTORSPOT",
  description: "Gallery of our automotive customization and restyling projects.",
};

export default function GalleryPage() {
  return (
    <main className="pt-24">
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="font-display text-4xl lg:text-6xl tracking-[0.15em] mb-4">
            OUR WORK
          </h1>
          <p className="text-motorspot-highlight/80 text-base mb-16">
            Gallery of completed projects
          </p>
          <GalleryGrid images={GALLERY_IMAGES} />
        </div>
      </section>
    </main>
  );
}
