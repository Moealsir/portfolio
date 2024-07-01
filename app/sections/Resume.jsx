"use client";
import React from "react";
import ResumeCard from "../components/ResumeCard";
import educationIcon from "../assets/icons/education.svg";
import workExperienceIcon from "../assets/icons/workexperience.svg";
import certificationIcon from "../assets/icons/certifications.svg";
import poistionIcon from "../assets/icons/position.svg";
import useIntersectionObserver from "../components/ui/useIntersectionObserver";

import { Education, Certificates, Experiences, Position } from "../constants/index.js";

const Resume = () => {
  const h1Ref = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section id="resume" className="bg-paradiso-500 w-full justify-center items-center flex flex-col mt-4 mb-4 max-sm:pr-8 max-sm:px-8">
      <div className="flex flex-col items-start mb-16 max-sm:mb-6">
        <h1 ref={h1Ref} className="section-heading pt-8 max-sm:text-4xl scroll-element animate">
          Resume
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-start items-start max-sm:items-center sm:flex-col max-sm:px-8">
        <div className="w-[500px] max-sm:w-[350px] px-4">
          <ResumeCard icon={educationIcon} title="Education">
            <div>
              <ul className="flex flex-col gap-2">
                {Education.map((edu, index) => (
                  <li key={index}>
                    <span className="resume-div-sub-heading">
                      {edu.subject}
                    </span>
                    <br />
                    <span>
                      {edu.school}
                    </span>
                    <br />
                    <div className="flex w-full mt-1 mb-2">
                      <span className="date-badge">
                        {edu.year}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ResumeCard>
          <ResumeCard icon={certificationIcon} title="Certificates">
            <div>
              <ul className="flex flex-col gap-2">
                {Certificates.map((cert, index) => (
                  <li key={index}>
                    <span className="resume-div-sub-heading">
                      {cert.title}
                    </span>
                    <br />
                    <span>
                      Issued by {cert.by}
                    </span>
                    <br />
                    <div className="flex w-full mt-1 mb-2">
                      <span className="date-badge">
                        {cert.year}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ResumeCard>
        </div>
        <div className="w-[500px] max-sm:w-[350px] px-4">
          <ResumeCard icon={workExperienceIcon} title="Work Experience">
            <div>
              <ul className="flex flex-col gap-2">
                {Experiences.map((exp, index) => (
                  <li key={index}>
                    <span className="resume-div-sub-heading">
                      {exp.position}
                    </span>
                    <br />
                    <span>
                      {exp.company}
                    </span>
                    <br />
                    <div className="flex w-full mt-1 mb-2">
                      <span className="date-badge">
                        {exp.year}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ResumeCard>
          <ResumeCard icon={poistionIcon} title="Position Of Responsibilities">
            <div>
              <ul className="flex flex-col gap-2">
                {Position.map((pos, index) => (
                  <li key={index}>
                    <span className="resume-div-sub-heading">
                      {pos.subject}
                    </span>
                    <br />
                    <span>
                      {pos.school}
                    </span>
                    <br />
                    <div className="flex w-full mt-1 mb-2">
                      <span className="date-badge">
                        {pos.year}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ResumeCard>
        </div>
      </div>
    </section>
  );
};

export default Resume;
