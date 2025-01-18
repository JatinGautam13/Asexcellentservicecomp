import React from 'react'
import ServiceHeader from '../ServicePageComponent/ServiceHeader'
import ServiceHeroSection from '../ServicePageComponent/ServiceHeroSection'
import ServiceWhyChooseUs from '../ServicePageComponent/ServiceWhyChooseUsSection'
import ServicesSection from '../ServicePageComponent/ServiceSercvice'
import HomeFooter from '../Homecomponent/HomeFooter'

function ServicePage() {
  return (
    <div>
        <ServiceHeader />
        <ServiceHeroSection />
        <ServiceWhyChooseUs />
        <ServicesSection />
        <HomeFooter />
    </div>
  )
}

export default ServicePage