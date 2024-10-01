import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addToCart } from '../cartcomponent/store/cartsSlice'
import Spinner from './Spinner'

// const API_URL = 'https://fivetechyuswearbackend-a4li.onrender.com/products/get_product';
// const URL1 = " https://nyus.5techg.com/products/get_product"
const URL2 = ' https://nyus.5techg.com/products/get_product'

const ProductCard = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [addedToCart, setAddedToCart] = useState({})
  const [selectedCategory, setSelectedCategory] = useState(category || 'all')
  const [hoveredProductId, setHoveredProductId] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    if (!addedToCart[product.id]) {
      dispatch(addToCart(product))
      setAddedToCart((prevState) => ({
        ...prevState,
        [product.id]: true,
      }))
    }
  }

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(URL2)
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
        console.error('Error fetching products', error)
      }
    }

    getProducts()
  }, [])

  useEffect(() => {
    setSelectedCategory(category || 'all')
  }, [category])

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.Category === selectedCategory)

  if (loading) return <Spinner />
  if (error) return <div>Error loading products</div>

  const handleProductDetails = (product) => {
    navigate(`/ProductDetails/${product.id}`)
  }

  return (
    <div className="ms:container mt-20 sm:mt-24 mb-10 lg:mx-10 p-4">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <div className="flex md:overflow-hidden overflow-scroll space-x-4 mb-10">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 ${
            selectedCategory === 'all'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory('man')}
          className={`px-4 py-2 ${
            selectedCategory === 'man'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200'
          }`}
        >
          Men
        </button>
        <button
          onClick={() => setSelectedCategory('woman')}
          className={`px-4 py-2 ${
            selectedCategory === 'woman'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200'
          }`}
        >
          Women
        </button>
        <button
          onClick={() => setSelectedCategory('CatEye')}
          className={`px-4 py-2 ${
            selectedCategory === 'CatEye'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200'
          }`}
        >
          CatEye
        </button>
        <button
          onClick={() => setSelectedCategory('Aviators')}
          className={`px-4 py-2 ${
            selectedCategory === 'Aviators'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200'
          }`}
        >
          Aviators
        </button>
        <button
          onClick={() => setSelectedCategory('Wayfarer')}
          className={`px-4 py-2 ${
            selectedCategory === 'Wayfarer'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200'
          }`}
        >
          Wayfarer
        </button>
        <button
          onClick={() => setSelectedCategory('Rimless')}
          className={`px-4 py-2 ${
            selectedCategory === 'Rimless'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200'
          }`}
        >
          Rimless
        </button>
        <button
          onClick={() => setSelectedCategory('Rectangular')}
          className={`px-4 py-2 ${
            selectedCategory === 'Rectangular'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200'
          }`}
        >
          Rectangular
        </button>
        <button
          onClick={() => setSelectedCategory('Oversized')}
          className={`px-4 py-2 ${
            selectedCategory === 'Oversized'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200'
          }`}
        >
          Oversized
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductDetails(product)}
            className="rounded-md overflow-hidden shadow-md hover:shadow-lg relative"
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            <div className="relative">
              <img
                className="w-full h-40 md:h-80"
                src={` https://nyus.5techg.com/${
                  JSON.parse(product.ProductImage)[0]
                }`}
                alt={product.ProductName}
              />

              <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                Save Rs. {product.Discount}
              </div>

              <div
                onClick={() => handleAddToCart(product)}
                disabled={addedToCart[product.id]}
                className={`absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2 flex justify-center transition-all duration-500 ease-in-out ${
                  hoveredProductId === product.id
                    ? 'opacity-100 transform translate-y-0 cursor-pointer'
                    : 'opacity-0 transform translate-y-full cursor-pointer'
                }`}
              >
                <button
                  className={`text-white text-sm font-bold py-2 px-3 rounded ${
                    addedToCart[product.id]
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}
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
                  Rs. {product.Price - product.Discount}
                </span>
                <span className="font-medium text-gray-600 text-sm md:text-lg line-through">
                  Rs. {product.Price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCard
