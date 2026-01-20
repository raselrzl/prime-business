import Image from "next/image";
import Navbar from "./components/Navbar";
import { HomeSection } from "./components/HomeSection";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { TwoImageSection } from "./components/TwoImageSection";
import { TailoredSolutionsSection } from "./components/TailoredSolutionsSection";
import { WhyChoosePrimeSection } from "./components/WhyChoosePrimeSection";

export default function Home() {
  return (
    <div className="bg-black pt-20">
      <div className="mx-auto max-w-7xl">
        <Navbar />
      </div>
      <HomeSection />
      <ExpertiseSection />
      <TwoImageSection />
      <TailoredSolutionsSection />
      <WhyChoosePrimeSection />
    </div>
  );
}
