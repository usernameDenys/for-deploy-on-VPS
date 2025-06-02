import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
    const { currency, getCartAmount } = useContext(ShopContext);
    return (
        <section className='w-full'>
            <Title titlePart1={'CART'} titlePart2={'TOTAL'} className="text-2xl" />
            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p><strong>Total:</strong></p>
                    <p><strong> {getCartAmount()}{currency}</strong></p>
                </div>
                <hr />
            </div>

        </section>
    )
}

export default CartTotal
