import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Work/>
      <Cta/>
    </main>
  );
}
