import React from 'react'
import ReviewComponent from '../ReviewComponent/Review'
import ReviewNavbar from '../ReviewComponent/ReviewNavbar'
import HomeFooter from '../Homecomponent/HomeFooter'

function Reviewpage() {
  return (
    <div>
        <ReviewNavbar />
        <ReviewComponent />
        <HomeFooter />
    </div>
  )
}

export default Reviewpage