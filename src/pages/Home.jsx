import React from 'react'
import Header from '../components/Home/Header'
import HeroSection from '../components/Home/HeroSection'
import ChocolateBliss from '../components/Home/ChocolateBliss'
import InfoCards from '../components/Home/InfoCards'
import MainMenu from '../components/Home/MainMenu'
import ChildrenMenu from '../components/Home/ChildrenMenu'
import GlutenMenu from '../components/Home/GlutenMenu'
import VeganMenu from '../components/Home/VeganMenu'
import MenuCard from '../components/Home/MenuCard'
import Contact from '../components/Home/Contact'
import AboutSection from '../components/Home/AboutSection'
import Testimonial from '../components/Home/Testimonial'
import FindUs from '../components/Home/Findus'

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <ChocolateBliss />
            <InfoCards />
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
