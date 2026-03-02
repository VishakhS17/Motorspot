import Image from "next/image";
import { GalleryGrid } from "@/components/GalleryGrid";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
  "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
  "https://images.unsplash.com/photo-1504708691000-c9ff1096e54e?w=800&q=80",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
  "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
  "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
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
