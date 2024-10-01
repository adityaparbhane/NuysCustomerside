// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function Category() {
//     const categories = [
//         { type: 'Outdoor', name: 'Nuys Exclusive', price: '$68.50', image: 'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png' },
//     ];
//     const navigate = useNavigate();

//     const handleShowMore = (category) => {
//       navigate(`/products/${category}`);
//     };

//     return (
//         <div className='lg:grid sm:grid grid-cols-2 lg:grid-cols-4'>
//             <div className="flex-shrink-0 m-6 relative overflow-hidden border-2 border-indigo-500/50  bg-white rounded-lg  shadow-lg" >

//                 <div className="relative pt-10 px-10 flex items-center justify-center">
//                     <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
//                         style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
//                     </div>
//                     <img className="relative w-60" src="eyeimage/home/category/p5.png" alt="" />
//                 </div>
//                 <div className="relative text-gray-600 px-6 pb-6 mt-6">
//                     <span className="block opacity-75 -mb-1">Outdoor</span>
//                     <div className="flex justify-between">
//                         <span className="block font-semibold text-xl">Nuys Exclusive</span>
//                         <span onClick={() => handleShowMore('all')} className="block bg-white border-2 rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center cursor-pointer">View More</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex-shrink-0 m-6  relative overflow-hidden border-2 border-indigo-500/50  bg-white rounded-lg  shadow-lg" >

//                 <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
//                     style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
//                     <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
//                     <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
//                 </svg>
//                 <div className="relative pt-10 px-10 flex items-center justify-center">
//                     <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
//                         style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
//                     </div>
//                     <img className="relative  w-60" src="eyeimage/home/category/p6.png" alt="" />
//                 </div>
//                 <div className="relative text-gray-600  px-6 pb-6 mt-6">
//                     <span className="block opacity-75 -mb-1">Outdoor</span>
//                     <div className="flex justify-between">
//                         <span className="block font-semibold text-xl">Nuys Exclusive</span>
//                         <span onClick={() => handleShowMore('all')} className="block bg-white border-2 rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center cursor-pointer">View More</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex-shrink-0 m-6 relative overflow-hidden border-2 border-indigo-500/50  bg-white rounded-lg  shadow-lg" >

//                 <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
//                     style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
//                     <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
//                     <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
//                 </svg>
//                 <div className="relative pt-10 px-10 flex items-center justify-center">
//                     <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
//                         style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
//                     </div>
//                     <img className="relative w-60" src="eyeimage/home/category/p7.png" alt="" />
//                 </div>
//                 <div className="relative text-gray-600 px-6 pb-6 mt-6">
//                     <span className="block opacity-75 -mb-1">Outdoor</span>
//                     <div className="flex justify-between">
//                         <span className="block font-semibold text-xl">Nuys Exclusive</span>
//                         <span onClick={() => handleShowMore('all')} className="block bg-white border-2 rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center cursor-pointer">View More</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex-shrink-0 m-6 relative overflow-hidden border-2 border-indigo-500/50  bg-white rounded-lg  shadow-lg" >

//                 <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
//                     style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
//                     <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
//                     <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
//                 </svg>
//                 <div className="relative pt-10 px-10 flex items-center justify-center">
//                     <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
//                         style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
//                     </div>
//                     <img className="relative w-60" src="eyeimage/home/category/p8.png" alt="" />
//                 </div>
//                 <div className="relative text-gray-600 px-6 pb-6 mt-6">
//                     <span className="block opacity-75 -mb-1">Outdoor</span>
//                     <div className="flex justify-between">
//                         <span className="block font-semibold text-xl">Nuys Exclusive</span>
//                         <span onClick={() => handleShowMore('all')} className="block bg-white  border-2 rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center cursor-pointer">View More</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Category;









import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from "react-router-dom";

const settings = {
    dots: false,
    fade: false,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4, 
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768, 
            settings: {
                slidesToShow: 1, 
                slidesToScroll: 1,
            },
        },
    ],
};




function Category () {

    const navigate = useNavigate();

    const handleShowMore = (category) => {
      navigate(`/products/${category}`);
    };

    return (
        <Slider {...settings}>

            <div >
                <div className="flex-shrink-0 m-6 relative overflow-hidden border-2 border-indigo-500/50  bg-white rounded-lg  shadow-lg" >

                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                        style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                        </div>
                        <img className="relative w-60" src="eyeimage/home/category/p5.png" alt="" />
                    </div>
                    <div className="relative text-gray-600 px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">Outdoor</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">Nuys Exclusive</span>
                            <span onClick={() => handleShowMore('all')}  className="block bg-white border-2 rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center cursor-pointer">View More</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex-shrink-0 m-6 relative overflow-hidden border-2 border-indigo-500/50  bg-white rounded-lg  shadow-lg" >

                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                        style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                        </div>
                        <img className="relative w-60" src="eyeimage/home/category/p8.png" alt="" />
                    </div>
                    <div className="relative text-gray-600 px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">Outdoor</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">Nuys Exclusive</span>
                            <span onClick={() => handleShowMore('all')}  className="block bg-white border-2 rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center cursor-pointer">View More</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex-shrink-0 m-6 relative overflow-hidden border-2 border-indigo-500/50  bg-white rounded-lg  shadow-lg" >

                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                        style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                        </div>
                        <img className="relative w-60" src="eyeimage/home/category/p6.png" alt="" />
                    </div>
                    <div className="relative text-gray-600 px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">Outdoor</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">Nuys Exclusive</span>
                            <span onClick={() => handleShowMore('all')}  className="block bg-white border-2 rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center cursor-pointer">View More</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex-shrink-0 m-6 relative overflow-hidden border-2 border-indigo-500/50  bg-white rounded-lg  shadow-lg" >

                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                        style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                        </div>
                        <img className="relative w-60" src="eyeimage/home/category/p7.png" alt="" />
                    </div>
                    <div className="relative text-gray-600 px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">Outdoor</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">Nuys Exclusive</span>
                            <span onClick={() => handleShowMore('all')}  className="block bg-white border-2 rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center cursor-pointer">View More</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex-shrink-0 m-6 relative overflow-hidden border-2 border-indigo-500/50  bg-white rounded-lg  shadow-lg" >

                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                        style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                        </div>
                        <img className="relative w-60" src="eyeimage/home/category/p7.png" alt="" />
                    </div>
                    <div className="relative text-gray-600 px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">Outdoor</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">Nuys Exclusive</span>
                            <span onClick={() => handleShowMore('all')}  className="block bg-white border-2 rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center cursor-pointer">View More</span>
                        </div>
                    </div>
                </div>
            </div>

        </Slider>
    )
}

export default Category 



