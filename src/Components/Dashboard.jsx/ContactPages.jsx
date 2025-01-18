import React from 'react'
import ContactPage from '../contactcomponents/ContactPage'
import ContactNav from '../contactcomponents/ContactNav'
import HomeFooter from '../Homecomponent/HomeFooter'

function ContactPages() {
  return (
    <div>
        <ContactNav />
        <ContactPage />
        <HomeFooter />
    </div>
  )
}

export default ContactPages