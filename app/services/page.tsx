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

export const metadata = {
  title: "Services — MOTORSPOT",
  description:
    "Restyling, Tyrex, upgrades, and protection. Interior customization, ceramic coating, body kits, performance kits, and more.",
};

export default function ServicesPage() {
  return (
    <main className="pt-24">
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="font-display text-4xl lg:text-6xl tracking-[0.15em] mb-4">
            OUR SERVICES
          </h1>
          <p className="text-motorspot-highlight/80 text-base mb-16">
            Precision engineering. Premium finish.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group bg-motorspot-panel rounded overflow-hidden hover:shadow-[0_0_32px_rgba(255,42,42,0.15)] hover:border hover:border-motorspot-accent/30 transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h2 className="font-display text-2xl tracking-[0.15em] text-motorspot-accent mb-6">
                    {service.title}
                  </h2>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="text-motorspot-highlight/80 pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-motorspot-highlight/60"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <a
              href="https://wa.me/917511128000?text=Hi%20I%20want%20to%20book%20an%20appointment%20at%20Motorspot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-motorspot-accent text-white font-medium tracking-wider hover:bg-motorspot-accent/90 transition-colors"
            >
              BOOK ON WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
