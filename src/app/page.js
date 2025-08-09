import Image from "next/image";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/AboutSection/About";
import SkillSection from "./components/SkillSection/SkillSection";
import MyWorkSection from "./components/MyWorkSection/MyWorkSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <SkillSection />
      <MyWorkSection />
      <ContactSection />
      <Footer />
    </>
  );
}
