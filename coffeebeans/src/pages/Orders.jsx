/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios';
import { toast } from 'react-toastify';

const Orders = () => {
    const { backendUrl, token, currency } = useContext(ShopContext)

    // Orders data
    const [orderData, setOrderData] = useState([]);

    // Fetch the orders data
    const fetchOrderData = async () => {
        try {
            if (!token) {
                return null;
            }

            const response = await axios.post(
                backendUrl + '/api/order/userorders', {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.data.success) {
                let allOrderItem = [];
                response.data.orders.map((order) => {
                    order.items.map((item) => {
                        item['orderStatus'] = order.orderStatus;
                        item['payment'] = order.payment;
                        item['paymentMethod'] = order.paymentMethod;
                        item['date'] = order.date;
                        allOrderItem.push(item);
                    });
                });

                setOrderData(allOrderItem);
                toast.success("Order status has been updated.");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    useEffect(() => {
        fetchOrderData();
    }, [token]);

    // Function to format the current date
    const formatDate = (date) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    // Get the date
    const currentDate = formatDate(new Date());
    return (
        <div className='border-t pt-16 font-[Barlow]'>
            <div className='text-2xl'>
                <Title titlePart1={'MY'} titlePart2={'ORDERS'} />
            </div>

            {orderData.length === 0 ? (<p className='text-gray-500'>You have no orders.</p>) : (
                <div>
                    {orderData.map((item, index) => {
                        return (
                            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between g4'>
                                <div className='flex items-start gap-6'>
                                    <img src={item.image[0]} alt='' className='w-16 sm:w-20' />
                                    <div>
                                        <p className='sm:text-base font-medium'>{item.name}</p>
                                        <div className='flex items-center gap-5 mt-1 text-base text-gray-700'>
                                            <p>{currency}{item.price}</p>
                                            <p>Quantity: {item.quantity}</p>
                                            <p>Size: {item.size}</p>
                                        </div>
                                        <p className='mt-1'> Date: <span className='text-gray-400'>{currentDate}</span></p>
                                        <p className='mt-1'>Payment Method:{' '}<span className='text-gray-400'>{item.paymentMethod}</span></p>
                                    </div>
                                </div>

                                <div className='flex justify-between md:w-1/2'>
                                    <div className='flex items-center gap-2'>
                                        <span className='min-w-2 h-2 rounded-full bg-green-400'></span>
                                        <p className='text-sm md:text-base'>{item.orderStatus}</p>
                                    </div>
                                    <button onClick={fetchOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm text-gray-700 cursor-pointer hover:bg-gray-100'>Track Order</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

        </div>
    )
}

export default Orders
