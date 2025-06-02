/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { backendUrl, currency } from '../../config';
import { RiDeleteBin6Line } from "react-icons/ri";

const List = ({ token }) => {
    const [list, setList] = useState([]);

    const fetchList = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/product/list`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data.success) {
                setList(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message);
        }
    };

    const removeProduct = async (id) => {
        try {
            const response = await axios.post(
                `${backendUrl}/api/product/remove`,
                { id },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.data.success) {
                toast.success(response.data.message);
                fetchList();
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message);
        }
    };

    useEffect(() => {
        fetchList();
    }, []);
    return (
        <section>
            <h2 className='mb-2'>All Products List</h2>
            <div className='flex flex-col gap-2'>
                <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border rounded bg-gray-100 text-sm text-gray-500'>
                    <span>Image</span>
                    <span>Name</span>
                    <span>Price</span>
                    <span>Action</span>
                </div>

                {list.map((product, index) => (
                    <div
                        key={index}
                        className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border rounded  text-sm text-gray-500'>
                        <img
                            src={product.image[0]}
                            alt={product.name}
                            className='w-10 h-10 object-cover' />
                        <p>{product.name}</p>
                        <p>{currency}{product.price}</p>
                        <button onClick={() => removeProduct(product._id)} className='text-right md:text-center text-lg  cursor-pointer'>
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default List
