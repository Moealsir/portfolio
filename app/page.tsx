import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Resume from "./sections/Resume";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
export default function Home() {
  return (
    <main className="relative">
      <Nav />

      <Hero />

      <About />

      <Skills />

      <Resume />

      <Projects />

      <Contact />
    </main>
  );
}
