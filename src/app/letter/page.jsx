
// import VideoSection from '@/components/Home/VideoSection'
import AutoCarousel from '@/components/letter/AutoCarousel'
import Impression from '@/components/letter/Impression'
import InkGrid from '@/components/letter/InkGrid'
import OurLettersSection from '@/components/letter/OurLettersSection'
import PlansSection from '@/components/letter/PlansSection'
import SignatureStroke from '@/components/letter/SignatureStroke'
import React from 'react'

const page = () => {
  return (
    <div>
      <OurLettersSection/>
      {/* <VideoSection/> */}
      <AutoCarousel/>
      <InkGrid/>
      <SignatureStroke/>
      <PlansSection/>
      <Impression/>
    </div>
  )
}

export default page