import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg"
import SocialInsta from "@/assets/social-insta.svg"
import SocialYoutube from "@/assets/social-youtube.svg"
import SocialPin from "@/assets/social-pin.svg"
import SocialLinkedIn from "@/assets/social-linkedin.svg"


export const Footer = () => {
  return <footer className="bg-black text-[#BCBCBC] text-sm   pt-10 text-center">
     <div className="container">
      <div className="inline-flex  relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
      <Image src={Logo} alt="Sass Logo"  height={40} className=" rounded-lg relative" />
      </div>
     <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
      <a href="">About</a>
      <a href="">Features</a>
      <a href="">Customers</a>
      <a href="">Pricing</a>
      <a href="">Help</a>
      <a href="">Careers</a>
     </nav>
     <div className="flex justify-center gap-6 mt-6">
     <SocialX/>
      <SocialInsta/>
      <SocialLinkedIn/>
      <SocialYoutube/>
      <SocialPin/>
      
     </div>
        <p className="mt-6 pb-2">&copy; 2024 Koachify.co . All rights reserved.</p>
     </div>
  </footer>;
};