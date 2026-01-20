import Image from "next/image";
import Navbar from "./components/Navbar";
import { HomeSection } from "./components/HomeSection";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { TwoImageSection } from "./components/TwoImageSection";

export default function Home() {
  return (
    <div className="bg-black pt-20">
      <div className="mx-auto max-w-7xl">
        <Navbar />
      </div>
      <HomeSection />
      <ExpertiseSection />
      <TwoImageSection />
    </div>
  );
}
