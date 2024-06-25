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

const Skills = () => {
  const h1Ref = useIntersectionObserver({ threshold: 0.5 });

  return (
    <section id="skills" className="sections border-b-2 border-t-2">
      <div className="flex flex-col items-start mb-16">
        <h1 ref={h1Ref} className="section-heading scroll-element">
          Skills
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 the-skills mb-10">
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
    </section>
  );
};

export default Skills;
