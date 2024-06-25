"use client";
import React from 'react';
import Image from 'next/image';
import programmer from '../assets/images/programmer.png';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import useIntersectionObserver from '../components/ui/useIntersectionObserver';

const Hero = () => {
  const words = `Mohamed Suliman`;
  const job = `full stack developer`;
  const heroRef = useIntersectionObserver({ threshold: 0.5 });

  return (
    <section
      id="home"
      ref={heroRef}
      className="sections padding-x max-container"
    >
      <div className="flex flex-col items-center max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center">
        <TextGenerateEffect words={words} className='font-corinthia text-8xl text-black' />
        <h2 className="font-bold text-2xl">{job}</h2>
        <Image src={programmer} alt="Programmer" width={550} height={500} />
      </div>
    </section>
  );
};

export default Hero;