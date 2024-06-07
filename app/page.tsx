import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { ModeToggle } from "@/components/ModeToggle";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Approach from "../components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col mx-auto sm:px-10 overflow-clip px-5">
      <div className="max-w-7xl w-full">
        <div className="fixed top-10 left-10 z-50">
        <ModeToggle />
        </div>
        <FloatingNav 
        navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects /> 
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
