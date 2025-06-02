import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import WhyChooseUs from '../components/WhyChooseUs'

const Home = () => {
    return (
        <main>
            <Hero />
            <BestSeller />
            <WhyChooseUs />
            <LatestCollection />
        </main>
    )
}

export default Home
