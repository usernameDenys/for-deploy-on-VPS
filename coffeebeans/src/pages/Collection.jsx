import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import ProductCard from '../components/ProductCard';
import { IoIosArrowForward } from "react-icons/io";

const Collection = () => {
    const { products } = useContext(ShopContext);
    const [filterProducts, setFilterProduct] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [brewTypeFilter, setBrewTypeFilter] = useState([]);
    const [roastFilter, setRoastFilter] = useState([]);
    const [sortType, setSortType] = useState('relevent');

    //brewType filter
    const toggleBrewTypeFilter = (event) => {
        const value = event.target.value;
        if (brewTypeFilter.includes(value)) {
            setBrewTypeFilter((prev) => prev.filter((item) => item !== value))
        } else {
            setBrewTypeFilter((prev) => [...prev, value])
        }

    }
    //roast filter
    const toggleRoastFilter = (event) => {
        const value = event.target.value;
        if (roastFilter.includes(value)) {
            setRoastFilter((prev) => prev.filter((item) => item !== value))
        } else {
            setRoastFilter((prev) => [...prev, value])
        }

    }

    const applyFilter = () => {
        if (!products || products.length === 0) return; // Ensure products are available

        let productsCopy = products.slice(); // Create a shallow copy of products

        if (brewTypeFilter.length > 0) {
            productsCopy = productsCopy.filter((item) =>
                brewTypeFilter.includes(item.brew_type)
            );
        }
        if (roastFilter.length > 0) {
            productsCopy = productsCopy.filter((item) =>
                roastFilter.includes(item.roast_level)
            );
        }

        setFilterProduct(productsCopy); // Update the filtered products state
    };

    const sortProducts = () => {
        if (filterProducts.length === 0) return; // Ensure there are products to sort

        let filteredProdCopy = [...filterProducts]; // Create a shallow copy of filtered products

        switch (sortType) {
            case 'low-high':
                setFilterProduct(filteredProdCopy.sort((a, b) => a.price - b.price));
                break;
            case 'high-low':
                setFilterProduct(filteredProdCopy.sort((a, b) => b.price - a.price));
                break;
            default:
                setFilterProduct(() => {
                    applyFilter();
                });
                break;
        }
        setFilterProduct(filteredProdCopy); // Update the filtered products state
    };

    useEffect(() => {
        sortProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortType]);


    useEffect(() => {
        applyFilter();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [brewTypeFilter, roastFilter, products]);

    return (
        <main className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t font-[Barlow]'>
            {/* <Filters products={filterProducts} /> */}
            <div className='min-w-60'>
                {/* mobile view conditions: filters sections hidden if small screen */}
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
                    <IoIosArrowForward className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} /></p>
                {/* brew type filter section: f_onClick activate filtering logic function */}
                <fieldset className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <legend className='mb-3 text-sm font-medium'>BREW TYPE</legend>
                    <form className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <div className='flex gap-2'>
                            <input type="checkbox" id='wBean' className='w-3' value={'Whole Bean'} onClick={toggleBrewTypeFilter} />
                            <label htmlFor="wBean">Whole Bean</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" id='ground' className='w-3' value={'Ground'} onClick={toggleBrewTypeFilter} />
                            <label htmlFor="ground">Ground</label>
                        </div>
                    </form>
                </fieldset>
                {/* roast filter section: f_onClick activate filtering logic function  */}
                <fieldset className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <legend className='mb-3 text-sm font-medium'>ROAST</legend>
                    <form className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <div className='flex gap-2'>
                            <input type="checkbox" id='light' className='w-3' value={'Light'} onClick={toggleRoastFilter} />
                            <label htmlFor="light">Light</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" id='medium' className='w-3' value={'Medium'} onClick={toggleRoastFilter} />
                            <label htmlFor="medium">Medium</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" id='dark' className='w-3' value={'Dark'} onClick={toggleRoastFilter} />
                            <label htmlFor="dark">Dark</label>
                        </div>

                    </form>
                </fieldset>

            </div>
            <div className='flex-1'>
                <section className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title titlePart1={'ALL'} titlePart2={'COLLECTION'} />
                    <select onChange={(e) => { setSortType(e.target.value) }} name="product-sort" id="sort" className='border border-gray-300 text-sm px-2'>
                        <option value="relevent">Sort by: Relevent</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </section>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {
                        filterProducts.map((item, index) => (
                            <ProductCard key={index} id={item._id} image={item.image} name={item.name} price={item.price} />

                        ))
                    }
                </div>
            </div>

        </main>
    )
}

export default Collection
