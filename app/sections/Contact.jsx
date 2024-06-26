"use client"
import Image from 'next/image';
import { Languages, Frontend, Backend, Database, Tools } from "../constants"
import useIntersectionObserver from "../components/ui/useIntersectionObserver";

const About = () => {
  const h1Ref = useIntersectionObserver({ threshold: 0.5 });

  return (
    <section id="about" className='flex flex-col padding-x max-container bg-paradiso-500 w-full min-h-screen justify-center items-center'>
        <div className="flex flex-col items-start mb-16">
        <h1 ref={h1Ref} className="section-heading pt-8 scroll-element">
          About
        </h1>
      </div>
        <div className="grid lg:grid-cols-3 gap-8 text-white rounded-lg md:grid-cols-2 sm:grid-cols-1">
          <div className="p-2 rounded-md flex flex-col items-start justify-start bg-paradiso-950 transition-transform hover:shadow-xl ">
            <h1>Languages</h1>
            <div className="p-2 grid grid-cols-4 gap-4">
              <Image src={Languages[0].src} alt={Languages[0].alt} width={60} height={60}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' />
              <Image src={Languages[1].src} alt={Languages[1].alt} width={60} height={60}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' />
              <Image src={Languages[2].src} alt={Languages[2].alt} width={60} height={60}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' />
              <Image src={Languages[3].src} alt={Languages[3].alt} width={60} height={60}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' />
            </div>
          </div>
          <div className="p-2 rounded-md flex flex-col items-start justify-start bg-paradiso-950 transition-transform hover:shadow-xl ">
            <h1>Frontend</h1>
            <div className="p-2 grid grid-cols-4 gap-4">
              <Image src={Frontend[0].src} alt={Frontend[0].alt} width={60} height={0}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' />
              <Image src={Frontend[1].src} alt={Frontend[1].alt} width={60} height={60}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' />
              <Image src={Frontend[2].src} alt={Frontend[2].alt} width={60} height={60}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' />
              <Image src={Frontend[3].src} alt={Frontend[3].alt} width={60} height={60}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' />
            </div>
          </div>
          <div className="p-2 rounded-md flex flex-col items-start justify-start bg-paradiso-950 transition-transform hover:shadow-xl ">
            <h1>Tools</h1>
            <div className="p-2 grid grid-cols-4 gap-4">
              <Image src={Tools[0].src} alt={Tools[0].alt} width={60} height={60}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' />
              <Image src={Tools[1].src} alt={Tools[1].alt} width={60} height={60}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' />
              <Image src={Tools[2].src} alt={Tools[2].alt} width={60} height={60}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' />
              <Image src={Tools[3].src} alt={Tools[3].alt} width={60} height={60}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' />
              <Image src={Tools[4].src} alt={Tools[4].alt} width={60} height={60}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' />
              <Image src={Tools[5].src} alt={Tools[5].alt} width={60} height={60}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' />
            </div>
          </div>
          <div className="p-2 rounded-md flex flex-col items-start justify-start bg-paradiso-950 transition-transform hover:shadow-xl ">
            <h1>Backend</h1>
            <div className="p-2 grid grid-cols-4 gap-4">
              <Image src={Backend[0].src} alt={Backend[0].alt} width={60} height={60}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' />
              <Image src={Backend[1].src} alt={Backend[1].alt} width={60} height={60}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' />
              <Image src={Backend[2].src} alt={Backend[2].alt} width={60} height={60}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' />
              {/* <Image src={Backend[3].src} alt={Backend[3].alt} width={60} height={60}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' /> */}
            </div>
          </div>
          <div className="p-2 rounded-md flex flex-col items-start justify-start bg-paradiso-950 transition-transform hover:shadow-xl ">
            <h1>Database</h1>
            <div className="p-2 grid grid-cols-3 items-start justify-start gap-4">
              <Image src={Database[0].src} alt={Database[0].alt} width={60} height={60}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' />
              <Image src={Database[1].src} alt={Database[1].alt} width={60} height={60}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' />
              <Image src={Database[2].src} alt={Database[2].alt} width={60} height={60}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' />
              {/* <Image src={Database[3].src} alt={Database[3].alt} width={60} height={60}  style={{ height: '60px' }} className='bg-white rounded-lg hover:scale-105' /> */}
            </div>
          </div>
          

        </div>
    </section>
  )
}

export default About