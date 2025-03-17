
import VideoSection from '@/components/Home/VideoSection'
import AutoCarousel from '@/components/letter/AutoCarousel'
import OurLettersSection from '@/components/letter/OurLettersSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <OurLettersSection/>
      <VideoSection/>
      <AutoCarousel/>
    </div>
  )
}

export default page