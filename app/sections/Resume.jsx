import React from 'react';
import ResumeCard from "../components/ResumeCard";
import educationIcon from '../assets/icons/education.svg';
import workExperienceIcon from '../assets/icons/workexperience.svg';
import certificationIcon from '../assets/icons/certifications.svg';
import positionIcon from '../assets/icons/position.svg';

const Resume = () => {
  return (
    <section id="resume" className='sections padding-x  max-container'>
      <h2 className="section-heading">Resume</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        <ResumeCard icon={educationIcon} title="Education">
          <div>
            <h3 className='text-xl font-bold'>Honors in Data Science</h3>
            <p>University of Mumbai (July 2022 - Present)</p>
          </div> 
        </ResumeCard>
        <ResumeCard icon={workExperienceIcon} title="Work Experience">
          <div>
            <h3 className='text-xl font-bold'>Aadhar Medical and Educational Trust</h3>
            <p>Web Development Intern (Sep 2022 - Oct 2022)</p>
          </div>
          <div>
            <h3 className='text-xl font-bold'>Don Bosco Institute of Technology</h3>
            <p>Software Intern (Feb 2022 - Nov 2022)</p>
          </div>
          <div>
            <h3 className='text-xl font-bold'>Anti-Plastic Brigade Charitable Trust</h3>
            <p>Web Development Intern (Oct 2021 - Feb 2022)</p>
          </div>
        </ResumeCard>
        <ResumeCard icon={certificationIcon} title="Certifications">
          <div>
            <h3 className='text-xl font-bold'>The Complete Node.js Developer Course</h3>
            <p>Issued by Udemy (Dec 2022)</p>
          </div>
          <div>
            <h3 className='text-xl font-bold'>SQL for Data Science</h3>
            <p>Issued by Great Learning (March 2022)</p>
          </div>
          <div>
            <h3 className='text-xl font-bold'>Python Data Structures</h3>
            <p>Issued by University of Michigan (August 2020)</p>
          </div>
          <div>
            <h3 className='text-xl font-bold'>Programming for Everybody (Getting Started with Python)</h3>
            <p>Issued by University of Michigan (July 2020)</p>
          </div>
        </ResumeCard>
        <ResumeCard icon={positionIcon} title="Position Of Responsibilities">
          <div>
            <h3 className='text-xl font-bold'>Colosseum DBIT</h3>
            <p>Web Development Head (Feb 2023 - Mar 2023)</p>
          </div>
          <div>
            <h3 className='text-xl font-bold'>Hysteria DBCL</h3>
            <p>Web Development Head (Jan 2023 - Feb 2023)</p>
          </div>
        </ResumeCard>
      </div>
    </section>
  );
};

export default Resume;
