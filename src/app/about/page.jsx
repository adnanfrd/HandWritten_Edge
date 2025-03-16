import AboutUs from '@/components/AboutUs/AboutUs'
import FullScreenImage from '@/components/AboutUs/FullScreenImage'
import MissionPage from '@/components/AboutUs/MissionPage'
import SocialPage from '@/components/AboutUs/SocialPage'
import TeamPage from '@/components/AboutUs/TeamPage'
import React from 'react'

const page = () => {
  return (
    <div>
        <AboutUs/>
        <FullScreenImage/>
        <MissionPage/>
        <SocialPage/>
        <TeamPage/>
    </div>
  )
}

export default page