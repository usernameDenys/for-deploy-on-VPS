import React from 'react'
import Title from '../components/Title'
import about from '../assets/images/about.webp'

const About = () => {
    return (
        <>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title titlePart1={'ABOUT'} titlePart2={'US'} />
            </div>


            <div className='flex flex-col md:flex-row gap-16 my-10'>
                <img
                    src={about}
                    alt='about us picture'
                    className='w-full md:max-w-[450px] '
                    loading='lazy'
                />

                <article className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 font-[Barlow]'>
                    <p>
                        We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.
                    </p>
                    <h2 className='text-gray-800 font-bold font-[Fraunces]'> Uncompromising quality</h2>
                    <p>
                        {' '}
                        Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
                    </p>
                </article>
            </div>

        </>
    )
}

export default About
