// SkillsCard.jsx
"use client";
import React from "react";
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

const CustomCard = ({ title, className }) => {
  const cardRef = useIntersectionObserver({ threshold: 0.5 });
  const sect = skillsCategories[title];

  return (
    <Card
      ref={cardRef}
      className={`scroll-element p-4 flex flex-col bg-paradiso-700 rounded-lg hover:shadow-2xl ${className}`}
    >
      <CardHeader className="pb-2 mb-4 flex-col items-center">
        <h4 ref={cardRef} className="font-bold text-4xl text-center text-white">{title}</h4>
      </CardHeader>
      <CardBody className="grid grid-cols-4 gap-6 justify-items-center items-center">
        {title === "Languages" && (
          <>
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-xl hover:scale-105 w-[2px]"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={Languages[0].src.src}
                alt={Languages[0].alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-xl hover:scale-105"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={Languages[1].src.src}
                alt={Languages[1].alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-xl hover:scale-105"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={Languages[2].src.src}
                alt={Languages[2].alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-xl hover:scale-105"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={Languages[3].src.src}
                alt={Languages[3].alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
          </>
        )}
        {title === "Frontend" && (
          <>
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-xl hover:scale-105"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={Frontend[0].src.src}
                alt={Frontend[0].alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-xl hover:scale-105"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={Frontend[1].src.src}
                alt={Frontend[1].alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-xl hover:scale-105"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={Frontend[2].src.src}
                alt={Frontend[2].alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-xl hover:scale-105"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={Frontend[3].src.src}
                alt={Frontend[3].alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
          </>
        )}
        {title === "Backend" && (
          <>
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-xl hover:scale-105"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={Backend[0].src.src}
                alt={Backend[0].alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-xl hover:scale-105"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={Backend[1].src.src}
                alt={Backend[1].alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-xl hover:scale-105"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={Backend[2].src.src}
                alt={Backend[2].alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
          </>
        )}
        {title === "Database" && (
          <>
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-xl hover:scale-105"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={Database[0].src.src}
                alt={Database[0].alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-xl hover:scale-105"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={Database[1].src.src}
                alt={Database[1].alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-xl hover:scale-105"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={Database[2].src.src}
                alt={Database[2].alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
          </>
        )}
        {title === "Tools" && (
          <>
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-xl hover:scale-105"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={Tools[0].src.src}
                alt={Tools[0].alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-xl hover:scale-105"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={Tools[1].src.src}
                alt={Tools[1].alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-xl hover:scale-105"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={Tools[2].src.src}
                alt={Tools[2].alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-xl hover:scale-105"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={Tools[3].src.src}
                alt={Tools[3].alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-xl hover:scale-105"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={Tools[4].src.src}
                alt={Tools[4].alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-xl hover:scale-105"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={Tools[5].src.src}
                alt={Tools[5].alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
            <div
              className="p-2 bg-white rounded-md flex items-center justify-center transition-transform hover:shadow-white-xl hover:scale-105"
              style={{ width: "60px", height: "60px" }}
            >
              <Image
                src={Tools[6].src.src}
                alt={Tools[6].alt}
                width={60}
                height={60}
                style={{ height: "auto" }}
              />
            </div>
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default CustomCard;
