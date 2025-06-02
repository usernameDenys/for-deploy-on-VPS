import React from 'react'
import { useState } from 'react';
import { backendUrl } from '../../config';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onSubmitHandler = async (event) => {
        try {
            event.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin', {
                email,
                password,
            });
            const token = response.data.data.token;

            if (response.data.success) {
                setToken(token);
                toast.success('Login Successful!');
            } else {
                toast.error(response.data.message);
            }


        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    return (
        <div className=' min-h-screen flex items-center justify-center w-full'>
            <section className='bg-white shadow-md  rounded-lg px-8 py-6 max-w-md'>
                <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Email Addres</p>
                        <input
                            className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
                            type='email'
                            placeholder='Enter your email address'
                            required
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                        <input
                            className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
                            type='password'
                            placeholder='Enter your password please'
                            required
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-gray-800 cursor-pointer' type='submit'> Login </button>
                </form>
            </section>

        </div>
    )
}

export default Login
