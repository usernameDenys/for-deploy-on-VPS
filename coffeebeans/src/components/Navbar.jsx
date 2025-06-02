import { React, useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { PiUser } from "react-icons/pi";
import { BsBag } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";
import { ShopContext } from '../context/ShopContext';
import { RiCloseLargeFill } from "react-icons/ri";


const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
    useEffect(() => {
        if (visible) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [visible]);

    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
        navigate('/login');
    };

    return (
        <header className='flex items-center justify-between py-5 font-medium font-[Fraunces]'>
            <div className='flex items-center gap-2'>
                <img src="/src/assets/icons/coffeeBeansIcon.svg" alt="Logo" className='w-10' />
                <a href="/" className='text-lg font-bold sm:text-3xl'>CoffeeBeans</a>
            </div>

            <nav className='hidden sm:flex gap-5 text-sm text-gray-700 font-semibold'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <span>Home</span>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <span>Collection</span>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <span>About</span>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <span>Contact</span>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

            </nav>
            <div className='flex items-center gap-6'>
                <div className='group relative'>
                    <PiUser onClick={() => (token ? null : navigate('/login'))} className='w-5 cursor-pointer' />
                    {token && (
                        <nav className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-20'>
                            <ul className='flex flex-col gap-2 w-36 py-3 px-5 bg-[#66D2CF] text-[#FEFCF7] rounded'>
                                <li onClick={() => navigate('/user/me')} className='cursor-pointer hover:text-black'>My account</li>
                                <li onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</li>
                                <li onClick={logout} className='cursor-pointer hover:text-black'>Logout</li>
                            </ul>
                        </nav>
                    )}
                </div>
                <Link to='/cart' className='relative'>
                    <BsBag className='w-5 min-w-5' />
                    <span className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</span>
                </Link>
                <RiMenu3Fill onClick={() => setVisible(true)} className='w-5 cursor-pointer sm:hidden' />
            </div>
            {/* Mobile menu */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-[#66D2CF] transition-all ${visible ? 'w-full z-50' : 'w-0'}`}>
                <div className='flex flex-col items-center text-gray-600 font-semibold'>
                    <div onClick={() => setVisible(false)} className='py-10 pl-6 cursor-pointer'>
                        <RiCloseLargeFill />
                    </div>
                    <NavLink onClick={() => setVisible(false)} to='/' className='py-2 pl-6 cursor-pointer hover:font-bold text-gray-800'><span>Home</span></NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/collection' className='py-2 pl-6 cursor-pointer hover:font-bold text-gray-800'><span>Collection</span></NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/about' className='py-2 pl-6 cursor-pointer hover:font-bold text-gray-800'><span>About</span></NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/contact' className='py-2 pl-6 cursor-pointer hover:font-bold text-gray-800'><span>Contact</span></NavLink>
                </div>
            </div>
        </header>
    )
}

export default Navbar
