import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="">
      <Navigation /> 
      <Header /> 
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
