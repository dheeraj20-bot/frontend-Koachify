"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import noodelImage from "@/assets/noodle.png";
import { motion ,useScroll,useTransform,useMotionValueEvent} from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target:heroRef,
    offset:["start end","end start"]
  });

  const translateY = useTransform(scrollYProgress,[0,1],[150,-150]);

  
  return (
    <section
     ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]
    overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.O is here !</div>
            <h1
              className=" text-5xl md:text-7xl font-bold tracking-tighter
           text-transparent bg-gradient-to-b mt-6  bg-clip-text from-black to-[#001E80]"
            >
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and Celebrate your success
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text  gap-1">
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4 inline-flex hover:translate-x-2 transition duration-500 justify-center items-center" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0  md:flex-1 md:h-[648px] relative">
            <motion.img
              src={cogImage.src}
              alt="cog Image"
              className="md:absolute md:h-full  md:w-auto md:max-w-none md:-left-6 lg:left-0 "
              animate={{
                translateY:[-30,30]
              }}
              transition={{
                repeat:Infinity,
                repeatType:"mirror",
                duration:4,
                ease:"easeInOut"
              }}

            />
            <motion.img
              src={cylinderImage.src}
              height={220}
              width={220}
              alt="cylinder Image"
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY:translateY
              }}
            />
            <motion.img
              src={noodelImage.src}
              width={220}
              alt="Noodel Image"
              className="hidden lg:block top-[534px] left-[448px] lg:absolute rotate-[30deg]"
              style={{
                rotate:30,
                translateY:translateY
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
