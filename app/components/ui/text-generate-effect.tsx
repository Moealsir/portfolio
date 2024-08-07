"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.4),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
  return (
    <motion.div ref={scope} className="">
      {wordsArray.map((word, idx) => {
        return (
          <motion.span
            key={word + idx}
            className={`dark:font-${word.toLowerCase()} text-paradiso-900 opacity-0`}
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </motion.div>
  );
};


  return (
    <div className={cn("", className)}>
      <div className="mt-4">
        <div className=" dark:text-corinthia leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
