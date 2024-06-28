"use client";
import React from "react";
import { projectData } from "../constants/index.js";
import useIntersectionObserver from "../components/ui/useIntersectionObserver.js";
import { preview, source } from "../assets/icons";
import { Image } from "@nextui-org/image";

const Projects = () => {
  const h1Ref = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="projects" className="sections padding-x max-container max-sm:pr-4 max-sm:pl-4">
      <div className="flex flex-col items-start mb-4 lg:mb-10">
        <h1 className="section-heading pt-8">Projects</h1>
      </div>
      <div
        ref={h1Ref}
        className="scroll-element grid grid-cols-1 sm:grid-cols-2 sm:scale-90 gap-6 mb-6 max-sm:gap-10 md:pr-4 md:pl-4 "
      >
        {projectData.map((project, index) => (
          <div
            key={index}
            className="hover:shadow-xl bg-paradiso-400 bg-opacity-90 rounded-xl flex flex-col justify-start items-center p-4 project-figure"
          >
            <img
              src={project.imgSrc.src.src}
              alt={project.imgSrc.src.alt}
              className="rounded-xl bg-white w-full items-start h-[300px] project-img"
            />
            <div className="flex flex-col justify-between lg:w-[500px] sm:w-full max-sm:w-full">
              <div>
                <div className="text-white flex justify-between items-center w-full p-2">
                  <h2 className="text-2xl text-paradiso-200 project-title font-bold">
                    {project.title}
                  </h2>
                  <div className="flex gap-2 ">
                    <img
                      src={source.src}
                      alt="Source Code"
                      width={48}
                      height={48}
                      className="cursor-pointer source-icon hover:opacity-75"
                      onClick={() => window.open(project.link, "_blank")}
                      style={{ filter: "invert(1)" }}
                    />
                    <img
                      src={preview.src}
                      alt="View Code"
                      width={48}
                      height={48}
                      className="cursor-pointer source-icon hover:opacity-75"
                      onClick={() => window.open(project.link, "_blank")}
                      style={{ filter: "invert(1)" }}
                    />
                  </div>
                </div>
                <div className="flex gap-2 mt-2 max-sm:mb-2 badges-container">
                  {project.used.map((lang, index) => (
                    <div
                      key={index}
                      className={`hover:scale-105 flex gap-1 items-center text-center shadow-md rounded-lg py-1 px-2 ${lang.bgClass}`}
                    >
                      <img
                        src={lang.src.src}
                        alt={lang.src.alt}
                        className="h-4 w-4 filter-white"
                      />
                      <p className="text-[0.8rem] font-bold text-white cursor-default text-nowrap">
                        {lang.name}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="align-justify">
                  <p className="justify-start align-justify px-2 mb-4 font-montserrat text-slate-gray text-xl leading-7">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex">
                <p className="date-badge cursor-default">{project.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
