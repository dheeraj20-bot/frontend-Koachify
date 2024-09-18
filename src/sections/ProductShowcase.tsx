'use client'
import productImage from "@/assets/product-image.png"
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import Image from "next/image";
import { motion ,useScroll,useTransform,useMotionValueEvent} from "framer-motion";
import { useRef } from "react";


export const ProductShowcase = () => {
  const sectionRef = useRef(null)

  const {scrollYProgress} = useScroll({
    target:sectionRef,
    offset:["start end","end start"]
  })
  const translateY = useTransform(scrollYProgress,[0,1],[150,-150])
  return  (
    <section ref={sectionRef} className=" bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className=" max-w-[540px] mx-auto">
        <div className="flex justify-center">
        <div className="tag">Boost your productivity</div>
        </div>
          <h2 className="section-title mt-5">A more effective way to track progress</h2>
          <p className="section-desc">Effortlessly turn your ideas into a fully functional, responsive,
            Saas website in just minutes with this template.
          </p>

        </div>
        <div className="relative">
        <Image src={productImage} alt="product image" className="mt-10"/>
        <motion.img src={pyramidImage.src} alt="pyramidImage "
        height={262}
        width={262}
        style={{
          translateY:translateY
        }}
        className="absolute hidden md:block -right-36 -top-32"/>
        <motion.img src={tubeImage.src} alt="tube image "
        height={248}
        width={248}
        style={{
          translateY:translateY
        }}
        className="absolute -left-36 hidden md:block bottom-24"/>
        </div>
        
         
      </div>
    </section>
  )
};
