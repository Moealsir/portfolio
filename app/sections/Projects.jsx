"use client";
import React from "react";
import { projectData } from "../constants/index.js";
import useIntersectionObserver from "../components/ui/useIntersectionObserver.js";
import { preview, source } from "../assets/icons";
import SimpleImageSlider from "react-simple-image-slider";

const Projects = () => {
  const h1Ref = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section
      id="projects"
      className="sections padding-x max-container max-sm:pr-4 max-sm:pl-4"
    >
      <div className="flex flex-col items-start mb-10">
        <h1 className="section-heading pt-8 max-sm:text-4xl">Projects</h1>
      </div>
      <div
        ref={h1Ref}
        className="scroll-element animate grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 sm:px-8 md:px-8 sm:scale-90 gap-8 mb-8 max-sm:gap-10 max-sm:px-4"
      >
        {projectData.map((project, index) => (
          <div
            key={index}
            className="scroll-element animate hover:shadow-md bg-paradiso-400 md:w-[500px] bg-opacity-90 rounded-xl flex flex-col items-center p-4"
          >
            <div className="w-full flex flex-col justify-between">
              <figure className="project-figure w-full">
                <div className="relative group">
                  <div className="relative image-slider-container items-center">
                    <SimpleImageSlider
                      width="100%"
                      height={300}
                      images={project.imgSrc}
                      showBullets={project.imgSrc.length > 1}
                      // autoPlay={true}
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img
                      src={source.src}
                      alt="Source Code"
                      width={48}
                      height={48}
                      className="cursor-pointer source-icon hover:opacity-75 mx-2"
                      onClick={() => window.open(project.repo)}
                      style={{ filter: "invert(1)" }}
                    />
                    <img
                      src={preview.src}
                      alt="View Code"
                      width={48}
                      height={48}
                      className={`cursor-pointer source-icon hover:opacity-75 mx-2 ${
                        project.link === "" ? "hidden" : ""
                      }`}
                      onClick={() =>
                        project.link !== "" && window.open(project.link)
                      }
                      style={{ filter: "invert(1)" }}
                    />
                  </div>
                </div>
              </figure>

              <div className="flex flex-col sm:w-full max-sm:w-full">
                <div className="text-white flex justify-between items-center w-full p-2">
                  <h2 className="text-2xl text-paradiso-200 project-title font-bold">
                    {project.title}
                  </h2>
                </div>
                <div className="flex gap-2 max-sm:mb-2 badges-container">
                  {project.used.map((lang, index) => (
                    <div key={index} className={`small-badge`}>
                      <img
                        src={lang.src.src}
                        alt={lang.src.alt}
                        className="h-4 w-4 filter-white"
                        style={{ filter: "invert(1)" }}
                      />
                      <p className="text-[0.8rem] font-bold text-white cursor-default text-nowrap">
                        {lang.name}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="text-start pt-4">
                  <p className="justify-start text-start mb-4 font-montserrat text-paradiso-800 text-xl leading-7">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-start">
              <p className="cursor-default small-badge text-white">{project.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
