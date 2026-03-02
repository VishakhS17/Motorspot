import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyMotorspot } from "@/components/WhyMotorspot";
import { Gallery } from "@/components/Gallery";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyMotorspot />
      <Gallery />
      <CTA />
    </main>
  );
}
