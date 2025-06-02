import React from 'react'
import Bean from '../assets/icons/Bean.svg'
import GiftBox from '../assets/icons/GiftBox.svg'
import Delivery from '../assets/icons/Delivery.svg'

const WhyChooseUs = () => {
    return (
        <section className='flex flex-col items-center my-10 bg-[#2C343E] rounded text-[#FEFCF7] px-6 sm:px-10'>
            <h2 className='text-2xl sm:text-4xl font-bold py-8 sm:py-12 text-center '>Why choose us?</h2>
            <p className='text-sm sm:text-base text-center max-w-3xl font-[Barlow] mb-10'>A large part of our role is choosing which particular coffees will be featured
                in our range. This means working closely with the best coffee growers to give
                you a more impactful experience on every level.</p>
            <div className='flex flex-col sm:flex-row gap-6 sm:gap-8 text-center pb-12 sm:pb-20 text-sm sm:text-base '>
                <article className='flex flex-col items-center gap-4 w-full sm:w-1/3 p-6 bg-[#0E8784] rounded ' >
                    <img src={Bean} alt="coffee bean image" />
                    <h3 className='text-sm sm:text-2xl font-bold'>Best quality</h3>
                    <p className='font-[Barlow] text-sm'>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                </article>
                <article className='flex flex-col items-center gap-4 w-full sm:w-1/3 p-6 bg-[#0E8784] rounded ' >
                    <img src={GiftBox} alt="Gift box image" />

                    <h3 className='text-sm sm:text-2xl font-bold'>Exclusive benefits</h3>
                    <p className='font-[Barlow] text-sm'>Special offers and swag when you subscribe, including 30% off your first shipment.</p>
                </article>
                <article className='flex flex-col items-center gap-4 w-full sm:w-1/3 p-6 bg-[#0E8784] rounded ' >
                    <img src={Delivery} alt="Truck image" />
                    <h3 className='text-sm sm:text-2xl font-bold'>Free shipping</h3>
                    <p className='font-[Barlow] text-sm'>We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
                </article>
            </div>


        </section>
    )
}

export default WhyChooseUs
