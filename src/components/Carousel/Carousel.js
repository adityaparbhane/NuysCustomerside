import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousell = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    centerPadding: "15px",
    cssEase: "linear",
    prevArrow: null,
    nextArrow: null,

    responsive: [{
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  };



  return (
    <div className="slick">

      <Slider {...settings}>
        <div>
          <img src='Image/product1.png' />
        </div>
        <div>
          <img src= 'Image/product2.png'/>
        </div>

        <div>
          <img src='Image/product3.png' />
        </div>
        <div>
          <img src='Image/product 4.svg' />
        </div>
        <div>
          <img src='Image/product 5.svg' />
        </div>
        <div>
          <img src='Image/product 6.svg' />
        </div>

      </Slider>
    </div>
  )

}
export default Carousell

