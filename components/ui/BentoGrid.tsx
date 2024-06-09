"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicBtn from "./MagicBtn";
import { techStackIcons } from "@/data";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "beyada85@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border dark:border-white/[0.1] border-black-100 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 dark:text-white text-white bg-black-100",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              width={200}
              height={200}
              layout="responsive"
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80 absolute -left-16"
          } `}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
                width={200}
                height={200}
                layout="responsive"
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* title and desc styles */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GlobeDemo />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1">
              {/* tech stack lists */}
              <div className="w-full mt-7 flex">
                {techStackIcons.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-10 h-10 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index * 2}px)`,
                    }}
                  >
                    <Image src={icon} alt={icon} width={10} height={10} layout="responsive"/>
                  </div>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicBtn
                title={copied ? "Email is Copied!" : "Copy my Email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="dark:!bg-[#161A31] !bg-[#161A31] !text-white"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
