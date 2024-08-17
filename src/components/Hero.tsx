"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "./ui/text-reveal-card";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import groupPhoto from '../../public/groupPhoto.jpeg'

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <div>
        <h1 className=" pt-[20vh] text-8xl md:text-4xl lg:text-7xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 via-neutral-700 to-neutral-100 dark:from-neutral-800 dark:via-white dark:to-white">
          CYSCOM VIT<br />

        </h1>
        <h1 className=" text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 via-neutral-100 to-neutral-50 dark:from-neutral-800 dark:via-white dark:to-white">
          CyberSecurity Community of VIT
        </h1>
        <div className="flex justify-center items-center">
          <div className="mx-auto">
            <TextRevealCard
              text="We make things happen"
              revealText="You can do the same "
            >
            </TextRevealCard>
          </div>
        </div>


      </div>
      <div className="text-4xl md:text-xl lg:text-xl max-w-7xl mx-auto text-center mt-6 relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 via-neutral-100 to-neutral-50 dark:from-neutral-800 dark:via-white dark:to-white">
        Join us to have an unforgettable experience in the world of cybersecurity and university life
      </div>
      <div className="mx-auto mt-12">
        <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#4abbe7] rounded-s-md text-black text-lg font-semibold transition duration-200 ease-linear">
          Apply for recuirtments {`->`}
        </button>
      </div>
      <ContainerScroll
        titleComponent
      >
        <Image
          src={groupPhoto}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
