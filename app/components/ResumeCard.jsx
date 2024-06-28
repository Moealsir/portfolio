import React from 'react';
import Image from 'next/image';
import useIntersectionObserver from './ui/useIntersectionObserver';

const ResumeCard = ({ icon, title, children }) => {
  const h1Ref = useIntersectionObserver({ threshold: 0.2 });
  return (
    <div ref={h1Ref} className={`scroll-element py-2 px-4 flex flex-col justify-start text-start rounded-md bg-paradiso-800 text-white shadow-xl mb-6 card-shadow`}>
      <div className='flex items-center gap-2 p-2'>
        <Image src={icon} alt={title} width={30} height={30} style={{ filter: 'invert(1)' }} />
        <h2 className='text-2xl font-semibold'>{title}</h2>
      </div>
      <div className='flex flex-col space-y-2 text-wrap'>
        {children}
      </div>
    </div>
  );
};

export default ResumeCard;
