import BlogGrid from "@/components/Home/BlogGrid";
import ContactSection from "@/components/Home/ContactSection";
import ElevateSection from "@/components/Home/ElevateSection";
import FaqSection from "@/components/Home/FaqSection";
import HomeServices from "@/components/Home/HomeServices";
import MovingLettersSection from "@/components/Home/MovingLettersSection";
import PersonalTouch from "@/components/Home/PersonalTouch";
import StaySection from "@/components/Home/StaySection";
import Testimonials from "@/components/Home/Testimonials";
import VideoSection from "@/components/Home/VideoSection";
import WhyHandwrittenLetters from "@/components/Home/WhyHandwrittenLetters";

export default function Home() {
  return (
   <div>
    <VideoSection/>
    <HomeServices/>
    <MovingLettersSection/>
    <StaySection/>
    <ElevateSection/>
    <WhyHandwrittenLetters/>
    <PersonalTouch/>
    <Testimonials/>
    <FaqSection/>
    <BlogGrid/>
    <ContactSection/>
   </div>
  );
}
