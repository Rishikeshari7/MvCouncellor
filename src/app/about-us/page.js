import MiddleSection from '@/components/AboutUs/MiddleSection'
import TopSection from '@/components/AboutUs/TopSection'
import OurPsychologist from '@/components/homepage/OurPsychologist'
import PsychologistAndCustomers from '@/components/homepage/PsychologistAndCustomers'
import React from 'react'


const page = () => {
  return (
    <div>
    <TopSection/>
    <MiddleSection/>
    <OurPsychologist/>
    <PsychologistAndCustomers/>
    </div>
  )
}

export default page
