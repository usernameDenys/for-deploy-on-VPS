import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductCard from './ProductCard';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    useEffect(() => {
        const setBestProduct = products.filter(item => item.bestseller === true);
        setBestSeller(setBestProduct.slice(0, 5));
    }, [products]);
    return (
        <div className='my-10'>
            <section className='text-center font-[Barlow] py-8 text-3xl'>
                <Title titlePart1={'BEST'} titlePart2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Our best-selling coffees, handpicked by coffee lovers like you.</p>
            </section>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {bestSeller.map((item, index) => (
                    <ProductCard key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))}

            </div>

        </div>
    )
}

export default BestSeller
