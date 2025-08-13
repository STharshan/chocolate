import React from 'react'
import WhyusHeader from '../components/WhyUs/WhyusHeader'
import WhyExperience from '../components/WhyUs/WhyExperience'
import WhyCall from '../components/WhyUs/WhyCall'
import PrivateEvents from '../components/WhyUs/PrivateEvents'
import UniqueFeatures from '../components/WhyUs/UniqueFeatures'
import SignatureOfferings from '../components/WhyUs/SignatureOfferings'

const WhyUs = () => {
  return (
    <div>
      <WhyusHeader />
      <WhyExperience />
      <SignatureOfferings />
      <PrivateEvents />
      <UniqueFeatures />
      <WhyCall />
    </div>
  )
}

export default WhyUs
