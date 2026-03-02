import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    id: "restyling",
    title: "RESTYLING",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    items: [
      "Interior customization",
      "Custom painting",
      "Body kits",
      "Water transfer printing",
      "Body wrap",
    ],
  },
  {
    id: "tyrex",
    title: "TYREX",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
    items: ["Alloy wheel upgrades", "Performance tyres", "Wheel detailing"],
  },
  {
    id: "upgrades",
    title: "UPGRADES",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    items: [
      "Performance kits",
      "Electric side steps",
      "Accessories installation",
    ],
  },
  {
    id: "protection",
    title: "PROTECTION",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
    items: ["Ceramic coating", "Sun protection film"],
  },
] as const;

export function Services() {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-motorspot-bg scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-3xl lg:text-5xl tracking-[0.15em] mb-2">
          OUR SERVICES
        </h2>
        <p className="text-motorspot-highlight/80 text-sm lg:text-base mb-12">
          Precision engineering. Premium finish.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href="/services"
              className="group block bg-motorspot-panel rounded overflow-hidden hover:shadow-[0_0_32px_rgba(37,99,235,0.25)] hover:border hover:border-motorspot-accent/30 transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl tracking-[0.15em] text-motorspot-accent mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-motorspot-highlight/80 pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-motorspot-highlight/60"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-block px-8 py-3 bg-motorspot-accent text-white font-medium tracking-wider hover:bg-motorspot-accent/90 transition-colors"
          >
            VIEW ALL SERVICES
          </Link>
        </div>
      </div>
    </section>
  );
}
