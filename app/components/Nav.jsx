"use client";
import { useState, useEffect } from "react";
import hamburger from "../assets/icons/hamburger.svg";
import IconCloudDownload from "../assets/icons/IconCloudDownload";
import { navLinks } from "../constants";
import Image from "next/image";
import Logo from "../../public/Logo.ico";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeLink, setActiveLink] = useState(""); // Define activeLink state

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBackgroundClass =
    scrollPosition > 100
      ? "bg-paradiso-500 shadow shadow-xl"
      : "bg-paradiso-500";
  const navTextColorClass =
    scrollPosition > 100 ? "text-white" : "text-blue-40";

  const handleClick = (label) => {
    setActiveLink(label);
  };

  return (
    <header
      className={`padding-x sticky top-0 py-2 z-10 w-full ${navBackgroundClass} max-lg:flex max-lg:justify-end max-lg:items-end max-lg:px-4`}
    >
      <nav
        className={`flex justify-between items-center max-container ${navTextColorClass} overflow-hidden`}
      >
        {/* Logo */}
        {/* <a href="/">
                    <Image src={Logo.src} alt="logo" width={130} height={29} />
                </a> */}
        {/* Navigation Links */}
        <ul className="flex flex-1 justify-center items-center gap-12 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label} className="inline-block">
              <a
                href={item.href}
                className={`font-montserrat leading-normal text-2xl transition-colors transition-font-weight duration-500 ${
                  activeLink === item.label
                    ? "font-bold text-paradiso-700"
                    : navTextColorClass
                } font-bold hover:text-paradiso-700 hover:translate-y-[-2px] hover:duration-500`}
                onClick={() => handleClick(item.label)}
                style={{ display: "inline-block", width: "max-content" }}
              >
                {item.label}
              </a>
            </li>
          ))}

          <li className="inline-block font-bold text-md rounded-lg bg-paradiso-800 px-2 py-1">
            <a
              href="/Mohamed_Suliman_CV.pdf"
              className="flex items-center"
              download
            >
              Download CV <IconCloudDownload className="ml-2" />
            </a>
          </li>
        </ul>
        <div className="flex max-sm:gap-32 sm:gap-48 md:gap-96 lg:hidden">
          <div>
            <li className="inline-block font-bold text-md rounded-lg bg-paradiso-800 px-2 py-1">
              <a
                href="/Mohamed_Suliman_CV.pdf"
                className="flex items-center text-nowrap"
                download
              >
                Download CV <IconCloudDownload className="ml-2" />
              </a>
            </li>
          </div>
          <div>
            <Menu className="flex ga-4">
              <MenuButton
                as={Button}
                variant="link"
                className="cursor-pointer hidden max-lg:block "
              >
                <Image
                  className="hidden max-lg:block shadow-md shadow-nlue-50"
                  src={hamburger}
                  alt="hamburger"
                  width={25}
                  height={25}
                />
              </MenuButton>
              <MenuList className="bg-paradiso-500 px-4 shadow-lg shadow-nlue-50">
                {navLinks.map((item) => (
                  <MenuItem
                    className="text-white font-montserrat leading-normal text-xl"
                    key={item.label}
                    minWidth="150px"
                  >
                    <a
                      className={`font-montserrat leading-normal text-2xl transition-colors transition-font-weight duration-300 hover:font-bold hover:text-paradiso-950 ${
                        activeLink === item.label
                          ? "font-bold text-paradiso-950"
                          : navTextColorClass
                      }`}
                      onClick={() => handleClick(item.label)}
                      href={item.href}
                      style={{ display: "inline-block", width: "max-content" }}
                    >
                      {item.label}
                    </a>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
