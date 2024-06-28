"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import { Languages, Frontend, Backend, Database, Tools, Interests } from "../constants";
import useIntersectionObserver from "../components/ui/useIntersectionObserver";
import educationIcon from "../assets/icons/education.svg";
import ResumeCard from "../components/ResumeCard";

const About = () => {
  const h1Ref = useIntersectionObserver({ threshold: 0.5 });
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
      className="flex flex-col padding-x max-container bg-paradiso-500 w-full min-h-full mt-10 justify-center items-center max-sm:p-4 sm:p-4"
    >
      <div className="flex flex-col items-start mb-16">
        <h1 ref={h1Ref} className="section-heading pt-8 scroll-element animate">
          About
        </h1>
      </div>

      <div className="flex flex-col bg-paradiso-600 p-2 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row md:gap-10 lg:gap-40 lg:mx-6 justify-center items-center">
          <div className="flex justify-center items-center p-0 ">
            <img
              ref={imgRef}
              className="rounded-circle profile-img profile-move border-8 border-paradiso-400 w-[270px] h-[270px] max-sm:mt-4 sm:mt-4 sm:mb-4 max-sm:mb-4"
              src="https://up6.cc/2024/06/171772528380021.jpg"
              alt="Boris Profile Picture"
            />
          </div>
          <div className="lg:w-[600px] max-sm:w-full md:w-[400px] p-4">
            <p className="text-justify text-white font-bold text-2xl">
              Hello, I&apos;m Mohamed Suliman pursuing{" "}
              <span className="text-paradiso-950">computer engineering</span>{" "}
              from Don Bosco Institute of Technology. Previously I have
              qualified Pre-Regional Mathematical Olympiad <span>(PRMO).</span>I
              have built <span>websites</span> for several NGO&apos;s during my
              leisure time. Aspiring software developer with an affinity towards{" "}
              <span>web development</span> and
              <span>project management</span>
              <br />
              When I&apos;m not coding I do touch typing on
              <a
                href="https://www.keybr.com/profile/v28on8s"
                target="_blank"
                aria-label="keybr link"
                className="text-paradiso-950 underline"
              >
                keybr.com
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--charm"
                  width="23"
                  height="23"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 16 16"
                  data-icon="charm:link-external"
                  data-width="23"
                  data-height="23"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8.25 2.75h-5.5v10.5h10.5v-5.5m0-5l-5.5 5.5m3-6.5h3.5v3.5"
                  ></path>
                </svg>
                .
              </a>
              Once my fingers have given up, I watch some <span>tennis</span>{" "}
              and <span>formula 1!</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start mb-0 p-4">
        <h3 className="section-sub-heading text-center pt-10 scroll-element animate pb-6">
          Interests
        </h3>
        <div className="scroll-element animate grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:scale-90 gap-4 mb-6 max-sm:gap-1 md:pr-4 md:pl-4 ">
          {Interests.map((interest, index) => (
            <ResumeCard key={index} icon={interest.icon} title={interest.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
