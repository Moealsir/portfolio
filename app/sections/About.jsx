"use client"
import Image from 'next/image';
import { Languages, Frontend, Backend, Database, Tools } from "../constants"
import useIntersectionObserver from "../components/ui/useIntersectionObserver";

const About = () => {
  const h1Ref = useIntersectionObserver({ threshold: 0.5 });

  return (
    <section id="about" className='flex flex-col padding-x max-container bg-paradiso-500 w-full min-h-full mt-10 justify-center items-center'>
        <div className="flex flex-col items-start mb-16">
        <h1 ref={h1Ref} className="section-heading pt-8 scroll-element">
          About
        </h1>
      </div>
        
    </section>
  )
}

export default About