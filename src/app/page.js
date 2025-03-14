import ElevateSection from "@/components/Home/ElevateSection";
import HomeServices from "@/components/Home/HomeServices";
import MovingLettersSection from "@/components/Home/MovingLettersSection";
import StaySection from "@/components/Home/StaySection";

export default function Home() {
  return (
   <div>
    <HomeServices/>
    <MovingLettersSection/>
    <StaySection/>
    <ElevateSection/>
   </div>
  );
}
