// SkillsCard.jsx
"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import useIntersectionObserver from "./ui/useIntersectionObserver";
import { Languages, Frontend, Backend, Database, Tools } from "../constants";

const skillsCategories = {
  Languages,
  Frontend,
  Backend,
  Database,
  Tools,
};

const SkillsCard = ({ title, className }) => {
  const cardRef = useIntersectionObserver({ threshold: 0.5 });
  const sect = skillsCategories[title];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Card
      ref={cardRef}
      className={`scroll-element p-4 flex flex-col bg-paradiso-700 rounded-lg hover:shadow-md ${className}`}
    >
      <CardHeader className="pb-2 mb-4 max-sm:mb-2 flex-col items-center">
        <h4 ref={cardRef} className="font-bold text-4xl max-sm:text-2xl text-center text-white">
          {title}
        </h4>
      </CardHeader>
      <CardBody className="grid grid-cols-4 gap-6 justify-items-center items-center">
        {sect.map((skill, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-md hover:scale-105"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={skill.src.src}
                alt={skill.alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
            {hoveredIndex === index && (
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-paradiso-900 text-white text-sm px-2 py-1 rounded-md z-50 whitespace-nowrap">
                {skill.alt}
              </span>
            )}
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default SkillsCard;
