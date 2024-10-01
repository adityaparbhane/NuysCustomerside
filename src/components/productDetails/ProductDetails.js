// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import './Carousel.css';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../cartcomponent/store/cartsSlice';

// const ProductDetails = () => {
//     const { id } = useParams();
//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const dispatch = useDispatch();
//     const [addedToCart, setAddedToCart] = useState({});
//     const navigate = useNavigate()

//     const handleThumbnailClick = (index) => {
//         setCurrentIndex(index);
//     };

//     const handleAddToCart = (product, e) => {
//         e.stopPropagation();
//         if (!addedToCart[product.id]) {
//             dispatch(addToCart(product));
//             setAddedToCart(prevState => ({
//                 ...prevState,
//                 [product.id]: true
//             }));
//         }
//     };
//     const handleBuyNow = (product) => {
//         navigate('/CheckOut-Product', { state: { product } });
//     };

//     const URL1 = " https://nyus.5techg.com";
//     const URL2 = " https://nyus.5techg.com";

//     useEffect(() => {
//         setLoading(true);
//         const fetchProductDetails = async () => {
//             try {
//                 const response = await axios.get(`${URL1}/products/get_product/${id}`);
//                 setProduct(response.data);
//             } catch (error) {
//                 console.error('Error fetching product details:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProductDetails();
//     }, [id]);

//     if (loading) {
//         return <div class="flex justify-center items-center h-screen">
//             <div class="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
//         </div>
//     }

//     if (!product) {
//         return <div>Product not found</div>;
//     }

//     const productImages = JSON.parse(product.ProductImage);
//     const firstImage = productImages[0];

//     console.log("image", productImages)

//     const payableAmount = product.Price - product.Discount;

//     return (
//         <div className="max-w-5xl pt-32 md:pt-40 pb-24 gap-8 md:grid md:grid-cols-2 mx-auto p-4">
//             <div>

//                 <div className="main-slide-carousel relative mb-6">
//                     <div className="block ">
//                         <img
//                             src={productImages[currentIndex]}
//                             alt="Summer Travel Bag image"
//                             className=" border-2 rounded-2xl mx-auto w-80 h- md:h-[350px] md:w-[500px]"
//                         />
//                     </div>
//                 </div>
//                 <div className="nav-for-slider pb-6 md:pb-0">
//                     <div className="thumbnails flex">
//                         {productImages.map((thumb, index) => (
//                             <div
//                                 key={index}
//                                 className={`thumbs-slide  ${currentIndex === index ? 'active' : ''}`}
//                                 onClick={() => handleThumbnailClick(index)}
//                             >
//                                 <img
//                                     src={thumb}
//                                     alt="Summer Travel Bag thumbnail"
//                                     className="cursor-pointer rounded-xl transition-all duration-500 "
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <div>

//                 <div className="flex justify-center items-center">
//                     <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
//                         <div className="flex items-center justify-between gap-6 mb-6">
//                             <div className="text">
//                                 <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2">{product.ProductName}</h2>
//                                 <p className="font-normal text-base text-gray-500">ABS EYE GLASSES</p>
//                             </div>
//                             <button className="group transition-all duration-500 p-0.5">
//                                 <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <circle className="fill-indigo-50 transition-all duration-500 group-hover:fill-indigo-100" cx="30" cy="30" r="30" />
//                                     <path className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-indigo-700" d="M21.4709 31.3196L30.0282 39.7501L38.96 30.9506M30.0035 22.0789C32.4787 19.6404 36.5008 19.6404 38.976 22.0789C41.4512 24.5254 41.4512 28.4799 38.9842 30.9265M29.9956 22.0789C27.5205 19.6404 23.4983 19.6404 21.0231 22.0789C18.548 24.5174 18.548 28.4799 21.0231 30.9184M21.0231 30.9184L21.0441 30.939M21.0231 30.9184L21.4628 31.3115" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
//                                 </svg>
//                             </button>
//                         </div>

//                         <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
//                             <div className="flex items-center">
//                                 <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 ">Rs. {payableAmount} </h5>
//                                 <span className="ml-3 font-semibold text-lg text-indigo-600">30% off</span>
//                             </div>

//                             <button className="flex items-center gap-1 rounded-lg bg-amber-400 py-1.5 px-2.5 w-max">
//                                 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <g clip-path="url(#clip0_12657_16865)">
//                                         <path d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z" fill="white" />
//                                         <g clip-path="url(#clip1_12657_16865)">
//                                             <path d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z" fill="#FED815" />
//                                         </g>
//                                     </g>
//                                     <defs>
//                                         <clipPath id="clip0_12657_16865">
//                                             <rect width="18" height="18" fill="white" />
//                                         </clipPath>
//                                         <clipPath id="clip1_12657_16865">
//                                             <rect width="18" height="18" fill="white" />
//                                         </clipPath>
//                                     </defs>
//                                 </svg>
//                                 <span className="font-semibold text-sm text-white">4.9</span>
//                             </button>                            </div>

//                         <div className="description border-y border-solid border-gray-200">
//                             <h4 className="font-manrope font-semibold text-lg leading-6 text-gray-900 py-4">Description</h4>
//                             <p className="font-manrope font-normal text-base leading-6 text-gray-500 pb-4">This is a summer eye glass that will match perfectly with your style.</p>
//                         </div>

//                         <div className="flex flex-col sm:flex-row gap-6 items-center mt-8">
//                             <button onClick={(e) => handleBuyNow(product)} className="btn inline-block text-white bg-gray-900 text-center rounded-lg py-4 px-9 w-full sm:w-auto transition-all duration-500 hover:bg-gray-700">Buy Now</button>
//                             <button onClick={(e) => handleAddToCart(product, e)} disabled={addedToCart[product.id]} className="btn inline-block text-gray-900 bg-transparent border border-solid border-gray-200 text-center rounded-lg py-4 px-9 w-full sm:w-auto transition-all duration-500 hover:bg-gray-900 hover:text-white">  {addedToCart[product.id] ? 'Item Added ' : 'Add to Cart'}</button>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default ProductDetails;

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import './Carousel.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../cartcomponent/store/cartsSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const dispatch = useDispatch()
  const [addedToCart, setAddedToCart] = useState({})
  const navigate = useNavigate()

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index)
  }

  const handleAddToCart = (product, e) => {
    e.stopPropagation()
    if (!addedToCart[product.id]) {
      const selectedProduct = {
        ...product,
        selectedImage: productImages[currentIndex],
      }
      dispatch(addToCart(selectedProduct))
      setAddedToCart((prevState) => ({
        ...prevState,
        [product.id]: true,
      }))

      toast.info('Product added to cart', {
        position: 'top-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  const handleBuyNow = (product) => {
    const selectedProduct = {
      ...product,
      selectedImage: productImages[currentIndex],
    }
    dispatch(addToCart(selectedProduct)) // Add product to cart
    navigate('/Cart-Summery', { state: { product: selectedProduct } })
  }

  // const URL3 = " https://nyus.5techg.com";
  const URL3 = ' https://nyus.5techg.com'

  useEffect(() => {
    setLoading(true)
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`${URL3}/products/get_product/${id}`)
        setProduct(response.data)
      } catch (error) {
        console.error('Error fetching product details:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProductDetails()
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
      </div>
    )
  }

  if (!product) {
    return <div>Product not found</div>
  }

  const productImages = JSON.parse(product.ProductImage)
  const firstImage = productImages[0]

  console.log('image', productImages)

  const payableAmount = product.Price - product.Discount

  return (
    <div className="max-w-5xl pt-32 md:pt-40 pb-24 gap-8 md:grid md:grid-cols-2 mx-auto p-4">
      <div>
        <div className="main-slide-carousel relative mb-6">
          <div className="block">
            <img
              src={`${URL3}/${productImages[currentIndex]}`}
              alt="Product image"
              className="border-2 rounded-2xl mx-auto w-80 h- md:h-[350px] md:w-[500px]"
            />
          </div>
        </div>
        <div className="nav-for-slider pb-6 md:pb-0">
          <div className="thumbnails flex">
            {productImages.map((thumb, index) => (
              <div
                key={index}
                className={`thumbs-slide ${
                  currentIndex === index ? 'active' : ''
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  src={`${URL3}/${thumb}`}
                  alt="Product thumbnail"
                  className="cursor-pointer  rounded-xl transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
            <div className="flex items-center justify-between gap-6 mb-6">
              <div className="text">
                <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2">
                  {product.ProductName}
                </h2>
                <p className="font-normal text-base text-gray-500">
                  NUYS EYE GLASSES
                </p>
              </div>
            </div>

            <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
              <div className="flex items-center">
                <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900">
                  Rs. {payableAmount}
                </h5>
                <span className="ml-3 font-semibold text-lg text-indigo-600">
                  30% off
                </span>
              </div>

              <button className="flex items-center gap-1 rounded-lg bg-amber-400 py-1.5 px-2.5 w-max">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_12657_16865)">
                    <path
                      d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                      fill="white"
                    />
                    <g clipPath="url(#clip1_12657_16865)">
                      <path
                        d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                        fill="#FED815"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_12657_16865">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_12657_16865">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="font-semibold text-sm text-white">4.9</span>
              </button>
            </div>

            <div className="description border-y border-solid border-gray-200">
              <h4 className="font-manrope font-semibold text-lg leading-6 text-gray-900 py-4">
                Description
              </h4>
              <p className="font-manrope font-normal text-base leading-6 text-gray-500 lowercase pb-4">
                {product.Description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-center mt-8">
              <button
                onClick={(e) => handleBuyNow(product)}
                className="btn inline-block text-white bg-gray-900 text-center rounded-lg py-4 px-9 w-full sm:w-auto transition-all duration-500 hover:bg-gray-700"
              >
                Buy Now
              </button>
              <button
                onClick={(e) => handleAddToCart(product, e)}
                disabled={addedToCart[product.id]}
                className="btn inline-block text-gray-900 bg-transparent border border-solid border-gray-200 text-center rounded-lg py-4 px-9 w-full sm:w-auto transition-all duration-500 hover:bg-gray-900 hover:text-white"
              >
                {addedToCart[product.id] ? 'Item Added ' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default ProductDetails
