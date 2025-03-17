
import VideoSection from '@/components/Home/VideoSection'
import AutoCarousel from '@/components/letter/AutoCarousel'
import InkGrid from '@/components/letter/InkGrid'
import OurLettersSection from '@/components/letter/OurLettersSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <OurLettersSection/>
      <VideoSection/>
      <AutoCarousel/>
      <InkGrid/>
    </div>
  )
}

export default page