import React from 'react'
import Navbar from '../Homecomponent/Navbar'
import Hero from "../Homecomponent/hero";
import Servicies from "../Homecomponent/Servicies"
import WhyChooseUs from "../Homecomponent/Whychooseus";
import HomeFooter from '../Homecomponent/HomeFooter';


const Home = () => {
    
  return (
    <div className="font-sans">
        <Navbar/>
        <Hero />
        <Servicies />
        <WhyChooseUs />
        <HomeFooter />

    </div>
  )
}

export default Home