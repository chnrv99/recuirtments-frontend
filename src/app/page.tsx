import { HeroScrollDemo } from "@/components/Hero";
import { NavbarDemo } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
        <NavbarDemo />


      {/* hero */}
      <div className="container">
        <HeroScrollDemo />
      </div>

      {/* scroll */}
      <div className="container">
        
      </div>

      {/* events */}
      <div className="container">
        HII
      </div>

      {/* departments */}
      <div className="container">
        HII
      </div>

      {/* final join us button */}
      <div className="container">
        HI
      </div>

      {/* footer */}
      <footer className="container">
        HI
      </footer>
    </main>
  );
}
