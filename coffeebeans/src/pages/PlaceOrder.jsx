import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { FaStripe } from "react-icons/fa";
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
    const {
        navigate,
        backendUrl,
        token,
        cartItems,
        setCartItems,
        getCartAmount,
        products,
    } = useContext(ShopContext);

    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: '',
    });

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((data) => ({ ...data, [name]: value }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const orderItems = [];

            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(
                            products.find((product) => product._id === items)
                        );
                        if (itemInfo) {
                            itemInfo.size = item;
                            itemInfo.quantity = cartItems[items][item];
                            orderItems.push(itemInfo);
                        }
                    }
                }
            }

            const orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount()
            };

            switch (paymentMethod) {
                // API calls for COD payment method
                case 'cod': {
                    const response = await axios.post(
                        `${backendUrl}/api/order/place`,
                        orderData,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );

                    if (response.data.success) {
                        setCartItems({});
                        navigate('/orders');
                    } else {
                        toast.error(response.data.message);
                    }
                    break;
                }

                default:
                    break;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };


    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t font-[Barlow]">
            <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
                <div className="text-xl sm:text-2xl my-3">
                    <Title titlePart1={'DELIVERY'} titlePart2={'INFORMATION'} />
                </div>

                {/* delivery info block */}
                <div className='flex gap-3'>
                    <input onChange={onChangeHandler} value={formData.firstName} name="firstName" type="text" required placeholder='First name' className='border  border-gray-300 rounded py-1.5 px-3.5 w-full' />
                    <input onChange={onChangeHandler} value={formData.lastName} name="lastName" type="text" required placeholder='Last name' className='border  border-gray-300 rounded py-1.5 px-3.5 w-full' />
                </div>
                <input
                    onChange={onChangeHandler} value={formData.email}
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address"
                    className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"
                />
                <input
                    onChange={onChangeHandler} value={formData.street}
                    name="street"
                    type="text"
                    required
                    placeholder="Street"
                    className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"
                />
                <div className="flex flex-col sm:flex-row  gap-3">
                    <input
                        onChange={onChangeHandler} value={formData.city}
                        name="city"
                        type="text"
                        placeholder="City"
                        className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"
                    />
                    <input
                        onChange={onChangeHandler} value={formData.state}
                        name="state"
                        required
                        type="text"
                        placeholder="State"
                        className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"
                    />
                </div>
                <div className="flex flex-col sm:flex-row  gap-3">
                    <input
                        onChange={onChangeHandler} value={formData.zipcode}
                        name="zipcode"
                        required
                        type="text"
                        placeholder="Zipcode"
                        className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"
                    />
                    <input
                        onChange={onChangeHandler} value={formData.country}
                        name="country"
                        required
                        type="text"
                        placeholder="Country"
                        className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"
                    />
                </div>
                <input
                    onChange={onChangeHandler} value={formData.phone}
                    name="phone"
                    required
                    type="number"
                    placeholder="Phone "
                    className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"
                />
            </div>
            {/* payment method block */}
            <div className="mt-8">
                <div className="mt-8 min-w-80">
                    <CartTotal />
                </div>
                <div className="mt-12">
                    <Title titlePart1={'PAYMENT'} titlePart2={'METHOD'} />
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div onClick={() => setPaymentMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                            <span className={` min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'stripe' ? 'bg-green-400' : ''}`}></span>
                            <FaStripe className="h-5 mx-4 text-2xl text-[#5167FC]" />
                        </div>
                        <div onClick={() => setPaymentMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                            <span className={` min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'cod' ? 'bg-green-400' : ''}`}></span>
                            <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
                        </div>
                    </div>
                    <div className="w-full text-end mt-8">
                        <button
                            type='submit'
                            className="bg-black text-white px-16 py-3 text-sm w-full cursor-pointer">
                            PLACE ORDER
                        </button>
                    </div>
                </div>
            </div>



        </form>

    )
}

export default PlaceOrder
