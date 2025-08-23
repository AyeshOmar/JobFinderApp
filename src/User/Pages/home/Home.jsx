import React from 'react'
import Header from '../../Components/header/Header'
import Banner from '../../Components/banner/Banner'
import Partnerpub from '../../Components/partnerPub/Partnerpub'
import Steps from '../../Components/Steps-and-recentJob/Steps'
import Categories from '../../Components/Categories/Categories'
import JobOffer from '../../Components/JobOffer/JobOffer'
import CarouselClient from '../../Components/ClentsTestimonials/CarouselClient'
import Footer from '../../Components/Footer/Footer'
const Home = () => {
  return (
    <div className='h-auto'>
      <Header/>
      <Banner/>
      <Partnerpub/>
      <Steps/>
      <Categories/>
      <JobOffer/>
      <CarouselClient/>
      <Footer/>
    </div>
  )
}

export default Home
