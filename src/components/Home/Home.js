import React from 'react'
import Slider from '../BannerCarousel/BannerCarousel'
import Category from './Category'
import ProductList from './Product'
import Gallery from './Gallery'
import TestimonialSlider from './Testimonial'
import './home.css'

function Home() {
  return (
    <div className=''>
      <div className='md:mt-20 mt-24' >
        <Slider />
      </div>

      <div className='mt-10 '>
        <Category />
      </div>
      {/* <div className='mt-10 '>
        <img src='eyeimage/home/slides/NewArrivalDesktop.webp'></img>
      </div> */}

      <div className="hidden  lg:block ">
        <div className="parallax-image "></div>
      </div>
      <div className='mt-20'>
        <ProductList />
      </div>
      <div className='mt-20'>
        <Gallery />
      </div>
      <div>
        {/* <img src='eyeimage/home/banner2.jpg'></img> */}
        <TestimonialSlider />
      </div>



    </div >

  )
}

export default Home