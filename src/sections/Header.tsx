import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm">
      <div className="flex justify-center items-center py-3 gap-3 bg-black text-white text-sm">
        <p className="text-white/60 hidden md:block">Streamline your project management</p>
        <div className="inline-flex  gap-1 items-center">
          <p>Get Started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex hover:translate-x-2 transition duration-500 justify-center items-center" />
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
          <Image src={Logo} alt="Sass Logo" width={40} height={40} className=" rounded-lg" />
          <MenuIcon  className="h-5 w-5 md:hidden"/>
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Updates</a>
            <a href="#">Help</a>
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex  justify-center tracking-tight">
              Get for free
            </button>
          </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
