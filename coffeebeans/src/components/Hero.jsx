import React from 'react'
import { Link } from 'react-router-dom'
import hero from '/src/assets/images/Hero.jpg'

const Hero = () => {
    return (
        <section className='relative flex flex-col sm:flex-row rounded border border-gray-400 h-[400px] sm:h-[600px]'>
            <img
                src={hero}
                alt="CoffeeBeans background"
                className=" absolute w-full object-cover aspect-auto h-full"
            />
            <div className="relative z-10 p-6 sm:p-12 ml-5 max-w-xl text-white">
                <h1 className="text-3xl sm:text-6xl ont-bold mb-4 mt-0 sm:mt-20 pt-6 sm:pt-12 pr-2.5">Great coffee made simple.</h1>
                <p className="mb-4 text-base pt-5 font-[Barlow] sm:mb-12">
                    Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
                </p>
                <Link
                    to="/collection"
                    className="inline-block bg-[#66D2CF] text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-[#5cc3c0] transition"
                >
                    Shop Coffee
                </Link>
            </div>


        </section>
    )
}

export default Hero
