import BlogGrid from "@/components/Home/BlogGrid";
import ElevateSection from "@/components/Home/ElevateSection";
import FaqSection from "@/components/Home/FaqSection";
import HomeServices from "@/components/Home/HomeServices";
import MovingLettersSection from "@/components/Home/MovingLettersSection";
import PersonalTouch from "@/components/Home/PersonalTouch";
import StaySection from "@/components/Home/StaySection";
import Testimonials from "@/components/Home/Testimonials";
import WhyHandwrittenLetters from "@/components/Home/WhyHandwrittenLetters";

export default function Home() {
  return (
   <div>
    <HomeServices/>
    <MovingLettersSection/>
    <StaySection/>
    <ElevateSection/>
    <WhyHandwrittenLetters/>
    <PersonalTouch/>
    <Testimonials/>
    <FaqSection/>
    <BlogGrid/>
   </div>
  );
}
