import Hero from "@/components/Hero";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Gallery from "@/components/Gallery";
import Recipes from "@/components/Recipes";
import FamilyTree from "@/components/FamilyTree";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Blog />
      <Gallery />
      <Recipes />
      <FamilyTree />
      <Contact />
    </>
  );
}

