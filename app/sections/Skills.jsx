"use client";
import { useRef, useEffect } from "react";
import {
  Languages,
  Frontend,
  Backend,
  Database,
  Tools,
  socialMedia,
} from "../constants/index.js";
import SkillsCard from "../components/SkillsCard.jsx";
import useIntersectionObserver from "../components/ui/useIntersectionObserver";
import GitHubCalendar from "react-github-calendar";


const Skills = () => {
  const h1Ref = useIntersectionObserver({ threshold: 0.5 });

  return (
    <section id="skills" className='sections max-sm:pr-8 max-sm:pl-8'>
      <div className="flex flex-col items-start mb-16 max-sm:mb-6 max-sm:mt-4">
        <h1 className="section-heading pt-8 max-sm:pt-0 max-sm:text-4xl">
          Skills
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:scale-90 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 lg:mb-0 xl:mb-10 lg:scale-110">
        <div className="languages">
          <SkillsCard title="Languages" sect={Languages} />
        </div>
        <div className="frontend">
          <SkillsCard title="Frontend" sect={Frontend} />
        </div>
        <div className="backend">
          <SkillsCard title="Backend" sect={Backend} />
        </div>
        <div className="database">
          <SkillsCard title="Database" sect={Database} />
        </div>
        <div className="tools">
          <SkillsCard title="Tools" sect={Tools} />
        </div>
      </div>
      <div className="github-contributions flex flex-col justify-center items-center md:scale-90">
        <h2 ref={h1Ref} className="section-heading text-center max-sm:scale-50 lg:mt-2 lg:mb-4 max-sm:pr-4 max-sm:text-wrap ">GitHub Contributions</h2>
        <div className='bg-paradiso-400 rounded-xl p-6 shadow-2xl lg:scale-125 lg:mb-16 lg:mt-10 md:scale-90 max-sm:scale-75 max-sm:w-2/4 sm:scale-75 max-sm:pr-4 max-sm:pl-4'>
          <GitHubCalendar username="Moealsir" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
