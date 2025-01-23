import React from 'react'
import PrivacyPolicy from '../Privacypolicypage/PrivacyCompo'
import PrivacyNav from '../Privacypolicypage/PrivacyNav'
import HomeFooter from '../Homecomponent/HomeFooter'

function PrivacyPage() {
  return (
    <div>
        <PrivacyNav/>
        <PrivacyPolicy />
        <HomeFooter/>
    </div>
  )
}

export default PrivacyPage