"use client";
import Image from "next/image";
import { Languages, Frontend, Backend, Database, Tools } from "../constants";
import useIntersectionObserver from "../components/ui/useIntersectionObserver";
import { socialMedia } from "../constants";

const About = () => {
  const h1Ref = useIntersectionObserver({ threshold: 0.5 });

  return (
    <>
      <section
        id="contact"
        className="flex flex-col padding-x max-container bg-paradiso-600 w-full min-h-full justify-center items-center"
      >
        <div className="flex flex-col items-start mb-16">
          <h1 ref={h1Ref} className="section-heading pt-8 max-sm:text-4xl scroll-element animate">
            Contact
          </h1>
        </div>

        <div className="flex max-sm:flex-col max-sm:gap-10 sm:gap-10 md:gap-20 lg:gap-40 mb-10">
          <div style={{ opacity: 1, transform: "none", filter: "invert(1)" }}>
            <h4 className="font-bold text-primary text-2xl">Contact</h4>
            <div className="mt-3 flex flex-col gap-[6.4px] text-[16px] font-normal md:text-[17.6px]">
              <p className="whitespace-nowrap">
                Email:{" "}
                <a href="mailto:info@moealsir.tech">
                  <span className="inline underline">
                    info@moealsir.tech
                  </span>
                </a>
              </p>
              <p>Phone: <a href="tel:+97439900342">+97439900342</a></p>
            </div>
          </div>
          <div style={{ opacity: 1, transform: "none", filter: "invert(1)" }}>
            <h4 className="font-bold text-primary text-2xl">Socials</h4>
            <div className="mt-3 flex gap-6 md:gap-[18.24px]">
              {socialMedia.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    alt={social.alt}
                    src={social.src}
                    width={25} // Adjust width as needed
                    height={25} // Adjust height as needed
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col items-center justify-center w-full h-16 border-t bg-paradiso-900">
        <div className="flex flex-col items-center justify-center">
          <p className="text-white">
            Made with ❤️ by{" "}
            <a
              href="https://github.com/Moealsir"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mohamed Suliman
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default About;
