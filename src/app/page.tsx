import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { HowIWork } from "@/components/HowIWork";
import { MotionExperience } from "@/components/MotionExperience";
import { WhatIDo } from "@/components/WhatIDo";

export default function Home() {
  return (
    <MotionExperience>
      <Hero />
      <WhatIDo />
      <HowIWork />
      <Contact />
    </MotionExperience>
  );
}
