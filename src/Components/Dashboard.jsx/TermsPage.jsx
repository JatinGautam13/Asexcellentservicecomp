import React from 'react'
import TermsCompo from '../termscomponents/TermsCompo'
import TermsNav from '../termscomponents/TermsNav'
import HomeFooter from '../Homecomponent/HomeFooter'

function TermsPage() {
  return (
    <div>
        <TermsNav/>
        <TermsCompo />
        <HomeFooter />
    </div>
  )
}

export default TermsPage