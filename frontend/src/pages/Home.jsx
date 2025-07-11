import React from 'react'
import Hero from '../components/Hero'
import LatestColllection from '../components/LatestColllection'
import BestSellers from '../components/BestSellers'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestColllection />
      <BestSellers />
      <OurPolicy />
      <NewsletterBox />
    </div>
  )
}

export default Home
