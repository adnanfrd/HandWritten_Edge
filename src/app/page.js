import ContactSection from "@/components/Home/ContactSection";
import ElevateSection from "@/components/Home/ElevateSection";
import FaqSection from "@/components/Home/FaqSection";
import HeroSection from "@/components/Home/HeroHome";
import HomeServices from "@/components/Home/HomeServices";
import MovingLettersSection from "@/components/Home/MovingLettersSection";
import PersonalTouch from "@/components/Home/PersonalTouch";
import StaySection from "@/components/Home/StaySection";
import Testimonials from "@/components/Home/Testimonials";
// import VideoSection from "@/components/Home/VideoSection";
import WhyHandwrittenLetters from "@/components/Home/WhyHandwrittenLetters";

export default function Home() {
  return (
   <div>
    <HeroSection/>
    {/* <VideoSection/> */}
    <HomeServices/>
    <MovingLettersSection/>
    <StaySection/>
    <ElevateSection/>
    <WhyHandwrittenLetters/>
    <PersonalTouch/>
    <Testimonials/>
    <FaqSection/>
    <ContactSection/>
   </div>
  );
}
