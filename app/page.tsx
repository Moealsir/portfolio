// Example of dynamic import in pages/index.tsx
import dynamic from 'next/dynamic';
const Nav = dynamic(() => import('./components/Nav'), { ssr: false });
const Hero = dynamic(() => import('./sections/Hero'), { ssr: false });
const About = dynamic(() => import('./sections/About'), { ssr: false });
const Skills = dynamic(() => import('./sections/Skills'), { ssr: false });
const Resume = dynamic(() => import('./sections/Resume'), { ssr: false });
const Projects = dynamic(() => import('./sections/Projects'), { ssr: false });
const Contact = dynamic(() => import('./sections/Contact'), { ssr: false });
export default function Home() {
  return (
    <main className="relative bg-paradiso-500">
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
 