"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import {
  Languages,
  Frontend,
  Backend,
  Database,
  Tools,
  Interests,
} from "../constants";
import useIntersectionObserver from "../components/ui/useIntersectionObserver";
import educationIcon from "../assets/icons/education.svg";
import ResumeCard from "../components/ResumeCard";
// import profile from "../assets/images/me.jpeg";
import profilepic from "../assets/images/profile-pic.png";


const About = () => {
  const h1Ref = useIntersectionObserver({ threshold: 0.2 });
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      VanillaTilt.init(imgRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
    // Cleanup on unmount
    return () => {
      if (imgRef.current) {
        imgRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col padding-x bg-paradiso-500 w-full min-h-full mt-10 justify-center items-center max-sm:pl-8 max-sm:pr-8 sm:p-8"
    >
      <div className="flex flex-col items-start mb-10">
        <h1
          ref={h1Ref}
          className="section-heading pt-6 scroll-element animate max-sm:text-4xl max-sm:pt-2"
        >
          About
        </h1>
      </div>

      <div className="flex flex-col bg-paradiso-600 p-6 rounded-xl shadow-lg max-sm:p-6">
        <div className="flex flex-col md:flex-row md:gap-10 lg:gap-20 lg:mx-6 justify-center items-center">
          <div className="flex justify-center items-center p-0 ">
            <Image
              ref={imgRef}
              className="rounded-circle profile-img profile-move border-8 border-paradiso-400 w-[270px] h-[270px] max-sm:w-[180px] max-sm:h-[180px] sm:mt-4 sm:mb-4 max-sm:mb-4"
              src={profilepic}
              alt="Mohamed Suliman Picture"
              width={270}
              height={270}
            />
          </div>
          <div className="lg:w-[600px] max-sm:w-full md:w-[400px]">
            <p className="text-start text-white font-bold text-2xl max-sm:text-lg">
              Hello, I&apos;m Mohamed Suliman, I studied{" "}
              <span className="text-paradiso-900">electrical engineering </span>
              at{" "}
              <span className="text-paradiso-900">
                Sudan International University{" "}
              </span>{" "}
              and worked in the field of{" "}
              <span className="text-paradiso-900">solar energy</span> after my
              graduation. I participated in many{" "}
              <span className="text-paradiso-900">volunteer programs </span>
              in Qatar. I spend my free time writing codes to{" "}
              <span className="text-paradiso-900"> solve real problems</span> or
              to <span className="text-paradiso-900">design programs </span>that
              can make life easier. I love{" "}
              <span className="text-paradiso-900">automation</span>.  I am ready
              to automate everything. I&apos;m an ambitious{" "}
              <span className="text-paradiso-900">full stack developer</span>{" "}
              with an affinity towards{" "}
              <span className="text-paradiso-900">web development.</span> When
              I&apos;m not coding I love to play{" "}
              <span className="text-paradiso-900">video games.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start mb-0 p-4">
        <h3 className="section-sub-heading text-center pt-10 max-sm:pt-6 scroll-element animate pb-6">
          Interests
        </h3>
        <div className="scroll-element animate grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:scale-90 gap-4 mb-6 max-sm:gap-1 md:pr-4 md:pl-4 ">
          {Interests.map((interest, index) => (
            <ResumeCard
              key={index}
              icon={interest.icon}
              title={interest.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
