import FestiveOffer from '@/components/Home/FestiveOffer'
import Handwriitentwo from '@/components/Home/Handwriitentwo'
import HandwrittenSection from '@/components/Home/HandwrittenSection'
import HolidayBanner from '@/components/Home/HolidayBanner'
import HolidayCards from '@/components/Home/HolidayCards'
import React from 'react'

const page = () => {
  return (
    <div>
        <HolidayCards/>
        <HandwrittenSection/>
        <Handwriitentwo/>
        <FestiveOffer/>
        <HolidayBanner/>
    </div>
  )
}

export default page