import Image from "next/image";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/AboutSection/About";
import SkillSection from "./components/SkillSection/SkillSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <SkillSection />
    </>
  );
}
