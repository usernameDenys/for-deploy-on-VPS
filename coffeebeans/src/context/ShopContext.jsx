/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const currency = "€";

    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');

    const navigate = useNavigate(); // to navigate to different pages


    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Please select a size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            cartData[itemId][size]
                ? (cartData[itemId][size] += 1)
                : (cartData[itemId][size] = 1);
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);

        if (token) {
            try {
                const response = await axios.post(
                    backendUrl + '/api/cart/add',
                    {
                        itemId,
                        size,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response.data.success) {
                    toast.success("Product added to cart!");
                } else {
                    console.log('error', response.data.message);
                    toast.error(response.data.message);
                }
            } catch (error) {
                console.log(error);
                toast.error(error.response.data.message);
            }
        }
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            for (const size in cartItems[item]) {
                if (cartItems[item][size] > 0) {
                    totalCount += cartItems[item][size];
                }
            }
        }
        return totalCount;
    };

    const updateCartQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(
                    backendUrl + '/api/cart/update',
                    {
                        itemId,
                        size,
                        quantity,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
            } catch (error) {
                console.log(error);
                toast.error(error.response.data.message);
            }
        }
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            const productInfo = products.find((product) => product._id === item);
            for (const size in cartItems[item]) {
                try {
                    if (cartItems[item][size] > 0) {
                        totalAmount += productInfo.price * cartItems[item][size];
                    }
                } catch (error) {
                    console.log('error', error);
                }
            }
        }
        return totalAmount;
    };

    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list');
            if (response.data.success) {
                setProducts(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    const getUserCart = async (token) => {
        try {
            const response = await axios.post(
                backendUrl + '/api/cart/get',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.data.success) {
                setCartItems(response.data.cartData);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    useEffect(() => {
        getProductsData();
    }, []);

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
            getUserCart(localStorage.getItem('token'));
        }
    }, []);



    const value = {
        products,
        currency,
        cartItems,
        setCartItems,
        addToCart,
        getCartCount,
        updateCartQuantity,
        getCartAmount,
        navigate,
        backendUrl,
        token,
        setToken,
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}
export default ShopContextProvider;