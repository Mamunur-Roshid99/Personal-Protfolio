import Image from "next/image";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/HeroSection/About";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
    </>
  );
}
