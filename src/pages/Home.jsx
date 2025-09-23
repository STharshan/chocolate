import React from 'react'
import Header from '../components/Home/Header';
import AboutHeader from '../components/Home/AboutHeader';
import LocationInfo from '../components/Home/LocationInfo';
import WhyusHeader from '../components/Home/WhyusHeader';
import WhyExperience from '../components/Home/WhyExperience';
import SignatureOfferings from '../components/Home/SignatureOfferings';
import PrivateEvents from '../components/Home/PrivateEvents';
import UniqueFeatures from '../components/Home/UniqueFeatures';
import MainMenu from '../components/Home/MainMenu';
import ChildrenMenu from '../components/Home/ChildrenMenu';
import GlutenMenu from '../components/Home/GlutenMenu';
import VeganMenu from '../components/Home/VeganMenu';
import Testimonial from '../components/Home/Testimonial';
import FindUs from '../components/Home/Findus';


const Home = () => {
    return (
        <div>
            <Header />
            <AboutHeader />
            <LocationInfo />
            {/* <PassionSection /> */}
            {/* <ExperienceSection /> */}
            {/* <CallToAction /> */}
            <WhyusHeader />
            <WhyExperience />
            <SignatureOfferings />
            <PrivateEvents />
            <UniqueFeatures />
            {/* <WhyCall /> */}
            <MainMenu />
            <ChildrenMenu />
            <GlutenMenu />
            <VeganMenu />
            <Testimonial />
            <FindUs />
        </div>
    )
}

export default Home
