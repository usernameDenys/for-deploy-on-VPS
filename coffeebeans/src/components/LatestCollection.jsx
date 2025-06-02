import { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductCard from './ProductCard';


const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProduct, setLatestProduct] = useState([]);

    useEffect(() => {
        setLatestProduct(products.slice(0, 10));
    }, [products]);

    return (
        <div className='my-10'>
            <section className='text-center font-[Barlow] py-8 text-3xl'>
                <Title titlePart1={'LATEST'} titlePart2={'COLLECTION'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
            </section>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestProduct.map((item, index) => (
                    <ProductCard key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))}

            </div>

        </div>
    )
}

export default LatestCollection; 
