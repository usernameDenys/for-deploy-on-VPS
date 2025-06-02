import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';



const ProductCard = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link to={`/product/${id}`} className="block text-gray-700 cursor-pointer">
            <article className="overflow-hidden">
                <img
                    src={image[0]}
                    alt={`Photo of ${name}`}
                    className="hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <h4 className="pt-3 pb-1 text-sm">{name}</h4>
                <p className="text-sm font-medium">
                    {currency} {price}
                </p>
            </article>
        </Link>
    );
};

export default ProductCard
