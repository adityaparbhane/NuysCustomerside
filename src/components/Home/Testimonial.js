
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        rating: "4.9",
        review: "These sunglasses are a game-changer! The quality is top-notch, and they are incredibly stylish. I get compliments every time I wear them. Perfect for driving and outdoor activities. Highly recommend to anyone looking for premium sunglasses.",
        name: "Vikas patil",
        date: "April 15, 2024"
    },
    {
        rating: "4.9",
        review: "Absolutely love these sunglasses! They are comfortable, lightweight, and offer great UV protection. The design is sleek and modern, perfect for any occasion. I've been using them daily and couldn't be happier with my purchase. Will definitely buy another pair soon.",
        name: "Ajay raj",
        date: "March 10, 2024"
    },
    {
        rating: "4.9",
        review: "I’m thrilled with my new sunglasses. The fit is perfect, and the lenses are crystal clear. They really make a difference on sunny days. Plus, they come in a beautiful case. Excellent value for the price. A must-have accessory for any style-conscious individual.",
        name: "Satish singh",
        date: "February 5, 2024"
    },
    {
        rating: "4.9",
        review: "These are the best sunglasses I've ever owned. The build quality is exceptional, and they feel very sturdy. I love the variety of styles available. They’ve become my go-to pair for every outing. Definitely worth every penny. Highly recommend!",
        name: "Tanisha agrawal",
        date: "January 20, 2024"
    },
    {
        rating: "4.9",
        review: "Fantastic sunglasses! They offer great eye protection and look fantastic. The design is timeless and versatile. I've worn them at the beach, while driving, and even at formal events. They’re very comfortable and durable. I'll be recommending these to all my friends.",
        name: "Shaswat rathore",
        date: "December 15, 2023"
    }
];

const Testimonials = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="mt-10  pb-20 p-5 bg-gray-50">
            <h2 className="text-2xl font-serif  font-bold text-center mt-4 mb-10">Our Happy customer say's</h2>
            <Slider {...settings} className="space-x-4">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="pl-4 pr-4">
                        <div className="group cursor-pointer bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm">
                            <div>
                                <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="text-base font-semibold text-indigo-600">{testimonial.rating}</span>
                                </div>
                                <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                                    {testimonial.review}
                                </p>
                            </div>
                            <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                                {/* Uncomment the next line if you have an avatar image */}
                                {/* <img className="h-10 w-10" src="path_to_avatar" alt="avatar" /> */}
                                <div className="block">
                                    <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">{testimonial.name}</h5>
                                    <span className="text-sm leading-4 text-gray-500">{testimonial.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonials;
