/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const UserInfo = () => {
    const { backendUrl, token, setToken } = useContext(ShopContext);
    const [userData, setUserData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState('');
    const [editedLastName, setEditedLastName] = useState('');

    const fetchUserData = async () => {
        try {
            if (!token) return;

            const response = await axios.get(backendUrl + '/api/user/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data.success) {
                setUserData(response.data.data);
                setEditedName(response.data.data.name);
                setEditedLastName(response.data.data.lastName);
            } else {
                toast.error(response.data.message || 'Failed to fetch user data.');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            toast.error(error.response?.data?.message || 'Failed to fetch user data.');
            if (error.response?.status === 401) {
                localStorage.removeItem('token');
                setToken('');
            }
        }
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.patch(backendUrl + '/api/user/me',
                {
                    name: editedName,
                    lastName: editedLastName,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.data.success) {
                setUserData(response.data.data);
                toast.success(response.data.message);
                setIsEditing(false);
            } else {
                toast.error(response.data.message || 'Failed to update profile.');
            }
        } catch (error) {
            console.error('Error updating user data:', error);
            toast.error(error.response?.data?.message || 'Failed to update profile.');
            if (error.response?.status === 401) {
                localStorage.removeItem('token');
                setToken('');
            }
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [token]);

    return (
        <div className='border-t pt-16 font-[Barlow]'>
            <div className='text-2xl'>
                <Title titlePart1='MY' titlePart2='PROFILE' />
            </div>

            {userData ? (
                <div className='mt-6 max-w-xl mx-auto border rounded-md shadow-sm px-8 py-6 text-gray-700 bg-white'>
                    {!isEditing ? (
                        <>
                            <div className='mb-4'>
                                <p className='font-semibold'>First Name:</p>
                                <p>{userData.name}</p>
                            </div>
                            <div className='mb-4'>
                                <p className='font-semibold'>Last Name:</p>
                                <p>{userData.lastName}</p>
                            </div>
                            <div className='mb-4'>
                                <p className='font-semibold'>Email:</p>
                                <p>{userData.email}</p>
                            </div>
                            <div className='mt-6 flex justify-between items-center'>
                                <Link
                                    to='/orders'
                                    className='text-[#66D2CF] hover:text-[#5cc3c0] font-medium'
                                >
                                    View Order History
                                </Link>
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className='px-4 py-2 bg-[#66D2CF] text-white rounded-md hover:bg-[#5cc3c0]'
                                >
                                    Edit Profile
                                </button>
                            </div>
                        </>
                    ) : (
                        <form onSubmit={handleUpdateProfile}>
                            <div className='mb-4'>
                                <label htmlFor='name' className='font-semibold block mb-1'>First Name:</label>
                                <input
                                    type='text'
                                    id='name'
                                    className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    value={editedName}
                                    onChange={(e) => setEditedName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='lastName' className='font-semibold block mb-1'>Last Name:</label>
                                <input
                                    type='text'
                                    id='lastName'
                                    className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    value={editedLastName}
                                    onChange={(e) => setEditedLastName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <p className='font-semibold'>Email:</p>
                                <p className='p-2 bg-gray-100 rounded-md'>{userData.email}</p>
                            </div>
                            <div className='mt-6 flex justify-end gap-4'>
                                <button
                                    type='button'
                                    onClick={() => {
                                        setIsEditing(false);
                                        setEditedName(userData.name);
                                        setEditedLastName(userData.lastName);
                                    }}
                                    className='px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50'
                                >
                                    Cancel
                                </button>
                                <button
                                    type='submit'
                                    className='px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50' // disabled:opacity-50 disabled:cursor-not-allowed - ці класи можна залишити, але вони не будуть активні без `disabled` пропсу
                                >
                                    Save Changes {/* Текст "Saving..." прибрано */}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            ) : (
                <p className='text-center text-gray-500 mt-8'>Failed to load profile or no data.</p>
            )}
        </div>
    );
};

export default UserInfo;