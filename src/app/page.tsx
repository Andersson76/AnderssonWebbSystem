import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { HowIWork } from "@/components/HowIWork";
import { WhatIDo } from "@/components/WhatIDo";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIDo />
      <HowIWork />
      <Contact />
    </main>
  );
}
