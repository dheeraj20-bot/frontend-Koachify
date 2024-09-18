"use client";
import acmeLogo from "@/assets/logo-acme.png";
import qunatumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import {
  motion,
} from "framer-motion";

const logos = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: qunatumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,blue,transparent)]">
          <motion.div 
          className="flex gap-14 flex-none"
          animate={{
            translateX:"-50%"
          }}
          transition={{
            duration:20,
            repeat:Infinity,
            ease:"linear",
            repeatType:"loop"
          }}
          >
            {logos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="logo-ticker-image"
              />
            ))}
            {logos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="logo-ticker-image"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
