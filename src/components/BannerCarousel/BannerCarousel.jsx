import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import axios from 'axios'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './BannerCarousel.css'
import 'react-lazy-load-image-component/src/effects/blur.css'

const settings = {
  dots: false,
  fade: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const BannerCarousel = () => {
  const [images, setImages] = useState([])

  const URL = 'https://nyus.5techg.com' // Replace with your backend URL

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${URL}/banner/get_banner`)
        const bannerData = response.data

        // Parse the BannerImage field to extract image URLs
        const parsedImages = bannerData.flatMap((banner) => {
          const imageArray = JSON.parse(banner.BannerImage)
          return imageArray.map((image) => `${URL}/${image}`)
        })

        setImages(parsedImages)
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    fetchImages()
  }, [])

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            width="100%"
            effect="blur"
            alt={`Slide ${index + 1}`}
            className="w-full"
            src={image}
            placeholderSrc="Image/BannerSlider/san1.png"
          />
        </div>
      ))}
    </Slider>
  )
}

export default BannerCarousel
