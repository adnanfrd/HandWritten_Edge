import AboutUs from '@/components/AboutUs/AboutUs'
import FeaturesSection from '@/components/AboutUs/FeaturesSection'
import FullScreenImage from '@/components/AboutUs/FullScreenImage'
import MissionPage from '@/components/AboutUs/MissionPage'
import SocialPage from '@/components/AboutUs/SocialPage'
import TeamPage from '@/components/AboutUs/TeamPage'
import Testimonials from '@/components/Home/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
        <AboutUs/>
        <FullScreenImage/>
        <MissionPage/>
        <SocialPage/>
        <TeamPage/>
        <Testimonials/>
        <FeaturesSection/>
    </div>
  )
}

export default page