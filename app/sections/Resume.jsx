"use client"
import React from 'react';
import ResumeCard from "../components/ResumeCard";
import educationIcon from '../assets/icons/education.svg';
import workExperienceIcon from '../assets/icons/workexperience.svg';
import certificationIcon from '../assets/icons/certifications.svg';
import positionIcon from '../assets/icons/position.svg';
import useIntersectionObserver from "../components/ui/useIntersectionObserver";

const Resume = () => {
  const h1Ref = useIntersectionObserver({ threshold: 0.05 });
  return (
    <section id="resume" className='sections padding-x max-container'>
      <div className="flex flex-col items-start mb-16">
        <h1 ref={h1Ref} className="section-heading pt-8 scroll-element">
          Resume
        </h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        <ResumeCard icon={educationIcon} title="Education">
          <div>
            <h3 className='text-xl font-bold text-paradiso-400'>Honors in Data Science</h3>
            <p>University of Mumbai (July 2022 - Present)</p>
          </div> 
        </ResumeCard>
        <ResumeCard icon={workExperienceIcon} title="Work Experience">
          <div>
            <h3 className='text-xl font-bold  text-paradiso-400'>Aadhar Medical and Educational Trust</h3>
            <p>Web Development Intern (Sep 2022 - Oct 2022)</p>
            <div className="flex mb-2 mt-1">
              <p className="date-badge cursor-default">Sep 2022 - Oct 2022</p>
            </div>
          </div>
          <div>
            <h3 className='text-xl font-bold text-paradiso-400'>Don Bosco Institute of Technology</h3>
            <p>Software Intern (Feb 2022 - Nov 2022)</p>
            <div className="flex mb-2 mt-1">
              <p className="date-badge cursor-default">Sep 2022 - Oct 2022</p>
            </div>
          </div>
          <div>
            <h3 className='text-xl font-bold text-paradiso-400'>Anti-Plastic Brigade Charitable Trust</h3>
            <p>Web Development Intern (Oct 2021 - Feb 2022)</p>
            <div className="flex mb-2 mt-1">
              <p className="date-badge cursor-default">Sep 2022 - Oct 2022</p>
            </div>
          </div>
        </ResumeCard>
        <ResumeCard icon={certificationIcon} title="Certifications">
          <div>
            <h3 className='text-xl font-bold text-paradiso-400'>The Complete Node.js Developer Course</h3>
            <p>Issued by Udemy (Dec 2022)</p>
            <div className="flex mb-2 mt-1">
              <p className="date-badge cursor-default">Sep 2022 - Oct 2022</p>
            </div>
          </div>
          <div>
            <h3 className='text-xl font-bold text-paradiso-400'>SQL for Data Science</h3>
            <p>Issued by Great Learning (March 2022)</p>
            <div className="flex mb-2 mt-1">
              <p className="date-badge cursor-default">Sep 2022 - Oct 2022</p>
            </div>
          </div>
          <div>
            <h3 className='text-xl font-bold text-paradiso-400'>Python Data Structures</h3>
            <p>Issued by University of Michigan (August 2020)</p>
            <div className="flex mb-2 mt-1">
              <p className="date-badge cursor-default">Sep 2022 - Oct 2022</p>
            </div>
          </div>
          <div>
            <h3 className='text-xl font-bold text-paradiso-400'>Programming for Everybody</h3>
            <p>Issued by University of Michigan (July 2020)</p>
            <div className="flex mb-2 mt-1">
              <p className="date-badge cursor-default">Sep 2022 - Oct 2022</p>
            </div>
          </div>
        </ResumeCard>
        <ResumeCard icon={positionIcon} title="Position Of Responsibilities">
          <div>
            <h3 className='text-xl font-bold text-paradiso-400'>Colosseum DBIT</h3>
            <p>Web Development Head (Feb 2023 - Mar 2023)</p>
            <div className="flex mb-2 mt-1">
              <p className="date-badge cursor-default">Sep 2022 - Oct 2022</p>
            </div>
          </div>
          <div>
            <h3 className='text-xl font-bold text-paradiso-400'>Hysteria DBCL</h3>
            <p>Web Development Head (Jan 2023 - Feb 2023)</p>
            <div className="flex mb-2 mt-1">
              <p className="date-badge cursor-default">Sep 2022 - Oct 2022</p>
            </div>
          </div>
        </ResumeCard>
      </div>
    </section>
  );
};

export default Resume;
