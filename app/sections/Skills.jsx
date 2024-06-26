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
import CustomCard from "../components/SkillsCard.jsx";
import useIntersectionObserver from "../components/ui/useIntersectionObserver";
import GitHubCalendar from "react-github-calendar";

const Skills = () => {
  const h1Ref = useIntersectionObserver({ threshold: 0.5 });

  return (
    <section id="skills" className="sections border-b-2 border-t-2">
      <div className="flex flex-col items-start mb-16">
        <h1 ref={h1Ref} className="section-heading pt-8 scroll-element">
          Skills
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:scale-90 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 the-skills mb-4 lg:mb-0 xl:mb-10">
        <div className="languages">
          <CustomCard title="Languages" sect={Languages} />
        </div>
        <div className="frontend">
          <CustomCard title="Frontend" sect={Frontend} />
        </div>
        <div className="backend">
          <CustomCard title="Backend" sect={Backend} />
        </div>
        <div className="database">
          <CustomCard title="Database" sect={Database} />
        </div>
        <div className="tools">
          <CustomCard title="Tools" sect={Tools} />
        </div>
      </div>
      <div className="github-contributions flex flex-col justify-center items-center md:scale-90">
        <h2 className="section-heading text-center max-sm:scale-50">GitHub Contributions</h2>
        <div className='bg-paradiso-400 rounded-xl p-6 shadow-2xl bg-opacity-90 lg:scale-125 lg:mb-10 lg:mt-10 md:scale-90 max-sm:scale-75 max-sm:w-2/4 sm:scale-75'>
          <GitHubCalendar username="Moealsir" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
