"use client";
import React from 'react';
import Image from 'next/image';
import programmer from '../assets/images/programmer.png';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import useIntersectionObserver from '../components/ui/useIntersectionObserver';

const Hero = () => {
  const words = `Mohamed Sulimanss`;
  const job = `full stack developer`;
  const heroRef = useIntersectionObserver({ threshold: 0.5 });

  return (
    <section
      id="home"
      ref={heroRef}
      className="sections"
    >
      <div className="flex flex-col lg:pt-16 xl:pt-8 md:pt-10 items-center max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center">
        <TextGenerateEffect words={words} className='font-Yellowtail text-8xl max-sm:text-4xl' />
        <h2 className="font-bold text-4xl max-sm:text-xl text-paradiso-900">{job}</h2>
        <img src={programmer.src} alt="Programmer" class="w-[550px] h-[500px] max-sm:w-[250px] max-sm:h-[220px]" /> 
      </div>
    </section>
  );
};

export default Hero;