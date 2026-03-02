import Image from "next/image";
import Link from "next/link";

// Use local hero/media stills from public/video
const GALLERY_IMAGES = [
  "/video/Screenshot 2026-03-03 003112.jpg",
  "/video/Screenshot 2026-03-03 003134.jpg",
  "/video/Screenshot 2026-03-03 003242.jpg",
  "/video/Screenshot 2026-03-03 003400.jpg",
  "/video/Screenshot 2026-03-03 003438.jpg",
  "/video/Screenshot 2026-03-03 003547.jpg",
] as const;

export function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 lg:py-28 bg-motorspot-bg scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-3xl lg:text-5xl tracking-[0.15em] mb-2">
          OUR WORK
        </h2>
        <p className="text-motorspot-highlight/80 text-sm mb-12">
          Gallery of completed projects
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.slice(0, 6).map((src, i) => (
            <Link
              key={i}
              href="/gallery"
              className="group aspect-[3/2] relative overflow-hidden rounded cursor-pointer"
            >
              <Image
                src={src}
                alt={`Project ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-400"
              />
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-block px-8 py-3 border-2 border-motorspot-highlight text-motorspot-text font-medium tracking-wider hover:border-motorspot-accent hover:text-motorspot-accent transition-colors"
          >
            VIEW GALLERY
          </Link>
        </div>
      </div>
    </section>
  );
}
