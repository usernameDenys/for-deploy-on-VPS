
import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";

const Sidebar = () => {
    return (
        <div className='w-[18%] min-h-screen border-r-2 border-gray-300'>
            <article className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px] mr-2'>
                <NavLink to='/add'
                    className='flex items-center gap-3 bg-gray-200 px-3 py-2 rounded ' >
                    <IoAddCircleOutline />
                    <h2 className='hidden md:block'>Add Items</h2>
                </NavLink>
                <NavLink to='/list'
                    className='flex items-center gap-3 bg-gray-200  px-3 py-2 rounded ' >
                    <FaListCheck />
                    <h2 className='hidden md:block'>List Items</h2>
                </NavLink>
                <NavLink to='/orders'
                    className='flex items-center gap-3 bg-gray-200  px-3 py-2 rounded ' >
                    <MdOutlineShoppingCartCheckout />
                    <h2 className='hidden md:block'>Orders</h2>
                </NavLink>

            </article>

        </div>
    )
}

export default Sidebar
