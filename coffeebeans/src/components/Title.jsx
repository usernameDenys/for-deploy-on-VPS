import React from 'react'

const Title = ({ titlePart1, titlePart2 }) => {
    return (
        <h3 className='inline-flex gap-2 items-center mb-3'>
            <span className='text-gray-500'>{titlePart1}</span>
            <span className='text-gray-700 font-medium'>{titlePart2}</span>
            <span className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></span>
        </h3>
    )
}

export default Title
