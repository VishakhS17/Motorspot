import Image from "next/image";
import Link from "next/link";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
  "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80",
  "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&q=80",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80",
  "https://images.unsplash.com/photo-1504708691000-c9ff1096e54e?w=600&q=80",
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
