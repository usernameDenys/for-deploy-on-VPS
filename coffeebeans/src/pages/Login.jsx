/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [currentState, setCurrentState] = useState('Login');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
    const [showPassword, setShowPassword] = useState(false);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if (currentState === 'Sign Up') {

                const response = await axios.post(backendUrl + '/api/user/register', {
                    name,
                    lastName,
                    email,
                    password,
                });

                const token = response.data.data.token;
                if (response.data.success) {
                    setToken(token);
                    localStorage.setItem('token', token);
                    toast.success('Signup Successful!');
                } else {
                    toast.error(response.data.message);
                }

            } else {
                const response = await axios.post(backendUrl + '/api/user/login', {
                    email,
                    password,
                });
                const token = response.data.data.token;
                if (response.data.success) {
                    setToken(token);
                    localStorage.setItem('token', token);
                    toast.success('Login Successful!');
                } else {
                    toast.error(response.data.message);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token]);
    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 font-[Barlow]' action="#">
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-2xl font-light font-[Fraunces]'> {currentState}</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800 ' />
            </div>
            <div className='w-full px-3 py-2 flex flex-col gap-4'>
                {currentState === 'Login' ? null : (<input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type='text'
                    className='w-Full px-3 py-2 border border-gray-880'
                    placeholder='First Name'
                    name='name'
                    autoComplete='off'
                    required
                />)}
                {currentState === 'Login' ? null : (<input
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    type='text'
                    className='w-Full px-3 py-2 border border-gray-880'
                    placeholder='Last Name'
                    name='lastName'
                    autoComplete='off'
                    required
                />)}
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type='email'
                    className='w-full px-3 py-2 border border-gray-880'
                    placeholder='Email'
                    name='email'
                    autoComplete='off'
                    required
                />
                <div className="relative w-full">
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type={showPassword ? 'text' : 'password'}
                        className="w-full px-3 py-2 border border-gray-880  pr-10"
                        placeholder='Password'
                        name='pwd'
                        autoComplete='off'
                        required
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-black">
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

            </div>
            <div className='w-full flex justify-between text-sm mt-[-8px] px-3'>
                {currentState === 'Login' ?
                    <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>No account yet?</p> : null
                }
                {currentState === 'Login' ?
                    <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p> : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Heare</p>
                }
            </div>
            <button className='w-1/2 m-auto bg-black text-white px-8 py-2 mt-4 rounded cursor-pointer'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>


        </form>
    )
}

export default Login
