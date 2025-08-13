import React from 'react'
import AboutHeader from '../components/About/AboutHeader'
import LocationInfo from '../components/About/LocationInfo'
import PassionSection from '../components/About/PassionSection'
import ExperienceSection from '../components/About/ExperienceSection'
import CallToAction from '../components/About/CallToAction'

const About = () => {
  return (
    <div>
      <AboutHeader />
      <LocationInfo />
      <PassionSection />
      <ExperienceSection />
      <CallToAction />
    </div>
  )
}

export default About