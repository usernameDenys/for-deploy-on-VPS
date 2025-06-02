
import React from 'react'
import { useState } from 'react'
import upload from '../assets/images/upload.png'
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl } from '../../config';


const Add = ({ token }) => {
    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [brewType, setBrewType] = useState('Whole Bean');
    const [roastLevel, setRoastLevel] = useState('Light');
    const [price, setPrice] = useState('');
    const [sizes, setSizes] = useState([]);
    const [bestSeller, setBestSeller] = useState(false);

    // Function to toggle size
    const toggleSize = (size) => {
        setSizes(prev =>
            prev.includes(size)
                ? prev.filter(item => item !== size)
                : [...prev, size]
        );
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();

            formData.append('name', name);
            formData.append('description', description);
            formData.append('brew_type', brewType);
            formData.append('roast_level', roastLevel);
            formData.append('price', price);
            formData.append('sizes', JSON.stringify(sizes));
            formData.append('bestseller', bestSeller ? 'true' : 'false');

            image1 && formData.append('image1', image1);
            image2 && formData.append('image2', image2);
            image3 && formData.append('image3', image3);
            image4 && formData.append('image4', image4);

            const response = await axios.post(
                backendUrl + '/api/product/add',
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.data.success) {
                toast.success(response.data.message);
                setName('');
                setDescription('');
                setPrice('');
                setSizes([]);
                setImage1(false);
                setImage2(false);
                setImage3(false);
                setImage4(false);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
            <>
                <p className='mb-2'>Upload Image</p>

                <div className='flex gap-2'>
                    <label htmlFor="image1">
                        {/* Display the upload icon or the selected image preview */}
                        <img className='w-30 cursor-pointer' src={!image1 ? upload : URL.createObjectURL(image1)} alt="upload image" />
                        <input onChange={(e) => setImage1(e.target.files[0])} type="file" name="image1" id="image1" hidden />
                    </label>
                    <label htmlFor="image2">
                        <img className='w-30 cursor-pointer' src={!image2 ? upload : URL.createObjectURL(image2)} alt="upload image" />
                        <input onChange={(e) => setImage2(e.target.files[0])} type="file" name="image2" id="image2" hidden />
                    </label>
                    <label htmlFor="image3">
                        <img className='w-30 cursor-pointer' src={!image3 ? upload : URL.createObjectURL(image3)} alt="upload image" />
                        <input onChange={(e) => setImage3(e.target.files[0])} type="file" name="image3" id="image3" hidden />
                    </label>
                    <label htmlFor="image4">
                        <img className='w-30 cursor-pointer' src={!image4 ? upload : URL.createObjectURL(image4)} alt="upload image" />
                        <input onChange={(e) => setImage4(e.target.files[0])} type="file" name="image4" id="image4" hidden />
                    </label>
                </div>
            </>
            <div className='w-full'>
                <p className='mb-2'>Product Name:</p>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className='w-full max-w-[500px] px-3 py-2 border rounded'
                    type='text'
                    placeholder='Write here'
                    name='name'
                    autoComplete='off'
                    required
                />
            </div>
            <div className='w-full'>
                <p className='mb-2'>Product Description:</p>
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className='w-full max-w-[500px] px-3 py-2 border rounded'
                    type='text'
                    placeholder='Write here'
                    name='description'
                    required
                />
            </div>
            <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
                <div>
                    <p className='mb-2'>Brew type</p>
                    <select
                        onChange={(e) => setBrewType(e.target.value)}
                        className='w-full  px-3 py-2 border rounded'
                        name='brew_type'
                        id='brew_type'
                    >
                        <option value='Whole Bean'>Whole Bean</option>
                        <option value='Ground'>Ground</option>
                    </select>
                </div>
                <div>
                    <p className='mb-2'>Roast level</p>
                    <select
                        onChange={(e) => setRoastLevel(e.target.value)}
                        className='w-full  px-3 py-2 border rounded'
                        name='roast_level'
                        id='roast_level'
                    >
                        <option value='Light'>Light</option>
                        <option value='Medium'>Medium</option>
                        <option value='Dark'>Dark</option>
                    </select>
                </div>
                <div>
                    <p className='mb-2'>Product Price</p>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        className='w-full sm:w-[120px] px-3 py-2 border rounded'
                        type='number'
                        placeholder='price'
                        name='price'
                        required
                    />
                </div>
            </div>
            <div>
                <p className='mb-2'>Product Sizes</p>
                <div className='flex gap-3'>
                    {["10oz", "11oz", "12oz"].map((size) => (
                        <span
                            key={size}
                            onClick={() => toggleSize(size)}
                            className={`bg-slate-200 px-3 py-1 cursor-pointer rounded ${sizes.includes(size) ? 'bg-slate-400' : ''}`}
                        >
                            {size}
                        </span>
                    ))}
                </div>
            </div>
            <div className='flex items-center gap-2 mt-2'>
                <input
                    onChange={() => setBestSeller((prev) => !prev)}
                    checked={bestSeller}
                    className='w-3 h-3 cursor-pointer'
                    type='checkbox'
                    name='bestseller'
                    id='bestseller'
                />
                <label htmlFor='bestseller' className='cursor-pointer'>
                    Add to Bestseller
                </label>
            </div>
            <button
                type='submit'
                className='bg-gray-800 text-white px-5 py-2 sm:px-7 sm:py-2 rounded text-xs sm:text-sm cursor-pointer'>
                Add Product
            </button>

        </form>
    )
}

export default Add
