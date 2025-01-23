import React from "react";
import AboutHeroSection from "../AboutComponents/AboutHero";
import AboutNavbar from "../AboutComponents/AboutNavbar";
import OurStorySection from "../AboutComponents/AboutStory";
import HomeFooter from "../Homecomponent/HomeFooter";
import AboutTeam from "../AboutComponents/AboutTeam";


const AboutPage = () => {
  return (
    <div >
        <AboutNavbar />
        <AboutHeroSection />
        <OurStorySection />
        <AboutTeam />
        <HomeFooter />
    </div>
  );
};

export default AboutPage;
