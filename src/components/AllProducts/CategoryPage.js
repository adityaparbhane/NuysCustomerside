import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

const CategoryPage = () => {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const URL1 = ' https://nyus.5techg.com'
  const URL2 = 'https://fivetechyuswearbackend-a4li.onrender.com'

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${URL1}/products/get_product`)
        setProducts(response.data)
        console.log('sca', response.data)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.Category === selectedCategory)

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>
  }

  if (error) {
    return (
      <div className="text-center mt-20">
        Error fetching products: {error.message}
      </div>
    )
  }

  return (
    <div className="md:container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 m-2 ${
            selectedCategory === 'all'
              ? 'bg-green-500 text-white'
              : 'bg-gray-200'
          }`}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>
        <button
          className={`px-4 py-2 m-2 ${
            selectedCategory === 'man'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200'
          }`}
          onClick={() => setSelectedCategory('man')}
        >
          Men
        </button>
        <button
          className={`px-4 py-2 m-2 ${
            selectedCategory === 'woman'
              ? 'bg-pink-500 text-white'
              : 'bg-gray-200'
          }`}
          onClick={() => setSelectedCategory('woman')}
        >
          Women
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default CategoryPage
