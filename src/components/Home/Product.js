import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../cartcomponent/store/cartsSlice'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ProductList = () => {
  const dispatch = useDispatch()
  const [addedToCart, setAddedToCart] = useState({})
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  // const URL1 = " https://nyus.5techg.com";
  // const URL2 = "https://fivetechyuswearbackend-a4li.onrender.com"
  const URL3 = ' https://nyus.5techg.com'

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${URL3}/products/get_product`)
        setProducts(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleAddToCart = (product, e, payableAmount) => {
    e.stopPropagation()
    if (!addedToCart[product.id]) {
      dispatch(addToCart(product, payableAmount))
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

  const handleShowMore = (category) => {
    navigate(`/products/${category}`)
  }

  const ProductComponent = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false)
    const payableAmount = product.Price - product.Discount

    const productImages = JSON.parse(product?.ProductImage)[0]

    const handleProductDetails = () => {
      navigate(`/ProductDetails/${product.id}`)
    }

    return (
      <div
        className="rounded-md overflow-hidden shadow-md hover:shadow-lg relative"
        onClick={handleProductDetails}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <img
            className="w-full h-40 md:h-80"
            src={`${URL3}/${productImages}`}
            alt={product.ProductName}
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            Save Rs. {product.Discount}
          </div>

          <div
            className={`absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2 flex justify-center transition-all duration-500 ease-in-out ${
              isHovered
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-full'
            }`}
          >
            <button
              onClick={(e) => handleAddToCart(product, e)}
              className={`text-white text-sm font-bold py-2 px-3 rounded ${
                addedToCart[product.id] ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={addedToCart[product.id]}
            >
              {addedToCart[product.id] ? 'Already Added' : 'Add to Cart'}
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="md:text-sm text-xs font-medium mb-2">
            {product.ProductName}
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-600 text-sm md:text-lg">
              Rs. {payableAmount}
            </span>
            <span className="font-medium text-gray-600 text-sm md:text-lg line-through">
              Rs. {product.Price}
            </span>
          </div>
        </div>
      </div>
    )
  }

  const SkeletonProductComponent = () => (
    <div className="rounded-md overflow-hidden shadow-md relative animate-pulse">
      <div className="bg-gray-300 w-full h-40 md:h-80"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
        <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
        <div className="flex items-center justify-between">
          <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="md:max-w-[1440px] md:mx-auto">
      <div className="justify-between flex mb-6">
        <h3 className="font-bold sm:text-4xl text-3xl md:text-5xl font-mono mx-4">
          QUICK PICKS
        </h3>
        <button
          onClick={() => handleShowMore('all')}
          type="button"
          className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
        >
          View More
        </button>
      </div>
      <div className="md:grid md:grid-cols-4 gap-2 grid grid-cols-2 md:gap-6 mx-4">
        {/* {loading
                    ? Array.from({ length: 8 }).map((_, index) => <SkeletonProductComponent key={index} />)
                    : products.map(product => (
                        <ProductComponent key={product.id} product={product} />
                    ))
                } */}

        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <SkeletonProductComponent key={index} />
            ))
          : products
              .slice(0, 8)
              .map((product) => (
                <ProductComponent key={product.id} product={product} />
              ))}
      </div>
      <ToastContainer />
    </div>
  )
}

export default ProductList
