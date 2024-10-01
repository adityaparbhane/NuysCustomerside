import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../cartcomponent/store/cartsSlice';
import Index from './ResponsiveSidebar.js';


const Nav = () => {

    const [nav, setNav] = useState(false)
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const handleShowMore = (category) => {
        navigate(`/products/${category}`);
    };

    // const hanleclick = () =>{!nav}

    return (
        <div className='md:hidden block fixed top-0 z-10 bg-white w-full'>
            <div className='flex  px-6 py-2 justify-between' >
                <Link to='/'> <img className="  right-4 h-20  cursor-pointer " src='eyeimage/logo/eyelogo.jpeg' ></img></Link>
                <div className='flex'>
                    <Link to="/Cart-Summery" className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                            {cartItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">{cartItems.length}</span>
                            )}
                        </div>
                        {/* <span className="text-sm font-medium">Cart</span> */}
                    </Link>
                    {/* <img onClick={() => setNav(!nav)} className=" right-4 h-6 my-auto w-6 cursor-pointer " src="eyeimage/logo/hamburger.png" ></img> */}

                    <div aria-label="toggler" className="flex justify-center items-center">
                        <button aria-label="open" id="open" onClick={() => setNav(true)} className={`${nav ? 'hidden' : ''} focus:outline-none focus:ring-2`}>
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 12H20" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 18H20" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button aria-label="close" id="close" onClick={() => setNav(false)} className={`${nav ? '' : 'hidden'} focus:outline-none focus:ring-2`}>
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6L18 18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
            <div className={nav ? 'fixed top-50 right-0 w-[320px] h-screen bg-gray-900 z-10 duration-1000' : 'fixed top-50 right-[-100%] w-[320px] h-screen bg-white z-10 duration-1000'}>
                <Index nav={nav} setNav={setNav} />
                {/* <div onClick={() => setNav(!nav)}>
                    <img className="absolute mt-8 right-6 h-6 w-6 cursor-pointer " src='Image/crosss.svg'></img>
                </div> */}
                {/* <nav>
                    <div > <img className=' p-6 ' src="Image/logo.png"></img>
                    </div>
                    <ul className='flex flex-col px-8 mt-8 text-gray-800'>
                        <li className='text-xl py-2 flex  ' onClick={() => setNav(!nav)} > <NavLink className='pr-44 rounded-lg pl-4 py-4' to='/' >  Home </NavLink> </li>
                        <li className='text-xl py-2 flex ' onClick={() => setNav(!nav)}> <NavLink className='pr-44 rounded-lg pl-4 py-4' to='/About' >  About </NavLink>  </li>
                        <li className='text-xl py-2 flex' onClick={() => setNav(!nav)}> <NavLink className='pr-44 rounded-lg pl-4 py-4' to='/Product1' >  Products </NavLink>  </li>
                        <li className='text-xl py-2 flex' onClick={() => setNav(!nav)}> <NavLink className='pr-44 rounded-lg pl-4 py-4' to='/Kaushal' >  Kaushal Ingradients </NavLink>  </li>
                        <li className='text-xl py-2 flex' onClick={() => setNav(!nav)}> <NavLink className='pr-44 rounded-lg pl-4 py-4' to='/Gallery' >  Gallery </NavLink>  </li>
                        <li className='text-xl py-2 flex' onClick={() => setNav(!nav)}> <NavLink className='pr-44 rounded-lg pl-4 py-4' to='/Contact' >  Contact </NavLink>  </li>
                    </ul>
                </nav> */}
                {/* <div className="flex p-6"  >
                    <img className='p-2' src="Image/fb.svg"></img>
                    <img className='p-2' src="Image/insta.svg"></img>
                    <img className='p-2' src="Image/twitter.svg"></img>
                </div> */}
            </div>
        </div>
    )
}

export default Nav