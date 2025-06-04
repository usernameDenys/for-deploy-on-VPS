import React from 'react'
import coffeeBeansIcon from '../assets/icons/coffeeBeansIcon.svg'

const Navbar = ({ setToken }) => {
    return (
        <div className='flex justify-between items-center py-4 px-[4%] bg-gray-100'>
            <div className='flex items-center gap-2'>
                <img src={coffeeBeansIcon} alt="Logo" className='w-10' />
                <a href="/" className='text-lg font-bold sm:text-3xl font-[Fraunces]'>CoffeeBeans</a>
            </div>
            <button onClick={() => setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded text-xs sm:text-sm cursor-pointer'>logout</button>

        </div>
    )
}

export default Navbar
