import React from 'react'
import Title from '../components/Title'
import contact from '../assets/images/contact.webp'

const Contact = () => {
    return (
        <>
            <div className='to-current text-2xl pt-10 border-t'>
                <Title titlePart1={'CONTACT'} titlePart2={'US'} />
            </div>
            <div className='flex flex-col justify-center sm:flex-row gap-10 my-10 mb-28'>
                <img
                    src={contact}
                    alt='cup of coffee photo'
                    className='w-full sm:max-w-[480px]'
                    width={522}
                    height={386}
                />

                <article className='flex flex-col justify-center items-start gap-4'>
                    <h3 className='font-semibold text-altext-gray-600 text-2xl'>Our Store</h3>
                    <p className='text-gray-500'>
                        26 Av. des Champs-Élysées,
                        <br />
                        75008 Paris
                    </p>

                    <p className='text-gray-800'>
                        Tel: <span className='text-gray-500'>+33 6 43 69 66 94</span>
                    </p>
                    <p className=' text-gray-800'>
                        Email: <span className='text-gray-500'>denysgolenko@gmail.com</span>
                    </p>
                </article>

            </div>

        </>
    )
}

export default Contact
