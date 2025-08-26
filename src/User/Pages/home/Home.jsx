import React from 'react'
import Banner from '../../Components/banner/Banner'
import Partnerpub from '../../Components/partnerPub/Partnerpub'
import Steps from '../../Components/Steps-and-recentJob/Steps'
import Categories from '../../Components/Categories/Categories'
import JobOffer from '../../Components/JobOffer/JobOffer'
import CarouselClient from '../../Components/ClentsTestimonials/CarouselClient'

const Home = () => {
  return (
    <div className='h-auto'>
      
      <Banner/>
      <Partnerpub/>
      <Steps/>
      <Categories/>
      <JobOffer/>
      <CarouselClient/>
      
    </div>
  )
}

export default Home
