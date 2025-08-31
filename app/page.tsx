import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import DevPhilosophy from "@/components/DevPhilosophy";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <main  className="relative flex bg-black-100 flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Experience />
        <DevPhilosophy />
        <Education />
        <Achievements />
        <Footer />
      </div>
    </main>
  );
};
