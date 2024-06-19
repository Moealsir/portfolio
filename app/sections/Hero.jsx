"use client";
import Image from 'next/image';
import programmer from '../assets/images/programmer.png';
import { TextGenerateEffect } from "../components/ui/text-generate-effect";


const Hero = () => {
  return (
    <section id="home" className='padding-x max-container bg-mountain-meadow-600 w-full min-h-screen justify-center items-center flex'>
      <div className='flex flex-col items-center max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center'>
        {/* Apply className prop to TextGenerateEffect */}
        <TextGenerateEffect words="Mohamed Suliman" className="text-8xl font-corinthia font-extrabold text-blue-15" />
        <TextGenerateEffect words="Full Stack Developer" className="text-3xl font-montserrat font-bold py-8 text-blue-15" />
        <Image src={programmer} alt="Programmer" width={550} height={500} />
      </div>
    </section>
  );
};

export default Hero;