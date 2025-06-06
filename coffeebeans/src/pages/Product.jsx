/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'



const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [imagePreview, setImagePreview] = useState('');
    const [size, setSize] = useState('')




    const fetchProduct = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item)
                setImagePreview(item.image[0])
                return null;
            }
        })
    }

    const handleAddToCart = () => {
        addToCart(productData._id, size);
    }

    useEffect(() => {
        fetchProduct();

    }, [productId, products])
    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 font-[Barlow]'>
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                {/* Images section */}
                <div className='flex-1 flex flex-col-reverse  gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm: overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {
                            productData.image.map((item, index) => (
                                <img onClick={() => setImagePreview(item)} src={item} key={index} alt={`${productData.name} image`} className='w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer' />
                            ))
                        }
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img src={imagePreview} alt={`${productData.name} image`} className='w-full h-auto' />
                    </div>

                </div>
                {/* Info section */}
                <section className='flex-1'>
                    <h2 className='font-medium text-2xl mt-2 '>{productData.name}</h2>
                    <p className='mt-10 text-3xl font-medium'>{currency}{productData.price}</p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                    <div className='flex gap-2 mt-5'>
                        <div className='flex flex-col gap-2'>
                            <h5>Brew type:</h5>
                            <p className='w-32 text-center py-2 px-4 bg-gray-100 rounded'>{productData.brew_type}</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h5>Roast level:</h5>
                            <p className='w-32 text-center py-2 px-4 bg-gray-100 rounded'>{productData.roast_level}</p>
                        </div>

                    </div>

                    <article className='flex flex-col gap-4 my-8'>
                        <h4>Select size:</h4>
                        <ul className='flex gap-2'>
                            {productData.sizes.map((item, index) => (
                                <li onClick={() => setSize(item)} className={`py-2 px-4 bg-gray-100 cursor-pointer rounded ${item === size ? 'border' : ''}`} key={index}>{item}</li>
                            ))}
                        </ul>
                    </article>
                    <button onClick={handleAddToCart} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 rounded cursor-pointer'>ADD TO CART</button>
                    <hr className='mt-8 sm:4/5' />
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </section>
            </div>
            {/* Description section */}
            <div className='mt-20'>
                <span className='flex'>
                    <h5 className='border px-5 py-3 text-sm'>About Our Coffee</h5>
                </span>
                <span className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                    <p>At The CoffeeBeans®, the art of crafting the best tasting coffee requires respecting each individual roast. Knowing the specific origin and roast degree for each coffee allows for intense flavor that can be traced back to its earliest beginnings. Many coffee companies claim to search the world for the finest coffees, yet very few do. </p>
                    <p>Our Coffee Master, Jay Isais, goes to the source of our coffee to guarantee it is the highest quality obtainable on earth. The partners who prepare our coffee at every level are extremely passionate people committed to providing ‘Simply the Best’ coffee to our customers. Quality has always been our No. 1 priority, and it will never be compromised.</p>
                </span>
            </div>

        </div>
    ) : <div className='opacity-0'></div>
}

export default Product
