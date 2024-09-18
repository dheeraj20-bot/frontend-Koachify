"use client"
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { motion ,useScroll, useTransform, } from "framer-motion";
import { useRef } from "react";


export const CallToAction = () => {
  const sectionRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target:sectionRef,
    offset:["start end","end start"]
  })

  const translateY = useTransform(scrollYProgress,[0,1],[150,-150])

  return (
    <section ref={sectionRef} className=" bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-desc mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>

          <motion.img
            src={starImage.src}
            width={360}
            alt="star image"
            style={{
              translateY:translateY
            }}
            className="absolute -left-[350px] -top-[137px]"
          />
          <motion.img
            src={springImage.src}
            style={{
              translateY:translateY
            }}
            width={360}
            alt="star image"
            className="absolute -right-[331px] -top-[19px]"
          />
        </div>

        <div className="flex gap-2 items-center mt-[30px] justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-4 w-4 inline-flex hover:translate-x-2 transition duration-500 justify-center items-center" />
          </button>
        </div>
      </div>
    </section>
  );
};
