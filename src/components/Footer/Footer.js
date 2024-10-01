import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {

    const [openReturn, setOpenReturn] = useState(true)

    const navigate = useNavigate()

    const handlecatory = (category) => {
        navigate(`/products/${category}`)
    }

    const returnClick = () => {
        setOpenReturn(false)
    }

    return (
        <footer className="bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" /> */}
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">NUYS</span>
                        </a>
                        <span className="self-center text-md font-semibold whitespace-nowrap  text-white">Eye Wear</span>

                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Quick Link</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to="/About" className="hover:underline">About Us</Link>
                                </li>
                                {/* <li>
                                    <a href="" className="hover:underline">Woman</a>
                                </li> */}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Product</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-1">
                                    <a onClick={() => handlecatory("man")} className="hover:underline cursor-pointer">Men</a>
                                </li>
                                <li className="mb-1">
                                    <a onClick={() => handlecatory("woman")} className="hover:underline cursor-pointer">Women</a>
                                </li>
                                <li className="mb-1">
                                    <a onClick={() => handlecatory("CatEye")} className="hover:underline cursor-pointer">CatEye</a>
                                </li>
                                <li className="mb-1">
                                    <a onClick={() => handlecatory("Aviators")} className="hover:underline cursor-pointer">Aviators</a>
                                </li>
                                <li className="mb-1">
                                    <a onClick={() => handlecatory("Wayfarer")} className="hover:underline cursor-pointer">Wayfarer</a>
                                </li>
                                <li className="mb-1">
                                    <a onClick={() => handlecatory("Rimless")} className="hover:underline cursor-pointer">Rimless</a>
                                </li>
                                <li className="mb-1">
                                    <a onClick={() => handlecatory("Rectangular")} className="hover:underline cursor-pointer">Rectangular</a>
                                </li>
                                <li className="mb-1">
                                    <a onClick={() => handlecatory("Oversized")} className="hover:underline cursor-pointer">Oversized</a>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">Follow us</h2>
                            <ul className="text-gray-400  font-medium">
                                <li className="mb-4">
                                    <a href="https://www.instagram.com/nuys_eyewear_official?igsh=MTdscW1mNHZ0ZjZvNA%3D%3D&utm_source=qr" className="hover:underline ">Instagram</a>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Legal</h2>
                            <ul className="text-gray-400  font-medium">
                                <li className="mb-2">
                                    <Link to='/privacy-policy'> <p className="hover:underline">Privacy Policy</p></Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/term-condition" className="hover:underline">Terms &amp; Conditions</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to = '/Returns-Refunds' className="hover:underline cursor-pointer">Returns &amp; Refunds</Link>
                                </li>
                               
                                <li className="mb-2">
                                    <Link to= '/Shipping-Delivery' className="hover:underline">Shipping &amp; Delivery</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <a href="/" className="flex items-center">
                            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" /> */}
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Powered By Lens Plus</span>
                        </a>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm  sm:text-center text-gray-400">© 2024 NUYS Eye Wear <a href="https://5techg.com/" target='_blank' className="hover:underline">Design and Developed by 5TechG </a></span>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
