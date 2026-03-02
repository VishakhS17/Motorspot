const REASONS = [
  {
    title: "Certified Experts",
    description: "Trained professionals with industry certifications.",
  },
  {
    title: "Premium Quality Work",
    description: "Craftsmanship that meets luxury standards.",
  },
  {
    title: "Wide Range of Services",
    description: "From detailing to full restyling under one roof.",
  },
  {
    title: "Luxury Vehicle Experience",
    description: "Specialized care for high-end automobiles.",
  },
] as const;

export function WhyMotorspot() {
  return (
    <section className="py-20 lg:py-28 bg-motorspot-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-3xl lg:text-5xl tracking-[0.15em] mb-16">
          WHY MOTORSPOT
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="text-center py-8 px-4"
            >
              <div className="text-2xl text-motorspot-accent mb-4">◆</div>
              <h3 className="text-base font-medium tracking-wider mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-motorspot-highlight/80 font-light">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
