import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeFromCart,
  updateCartItemQuantity,
  selectCartItems,
} from './store/cartsSlice'
import { Link } from 'react-router-dom'

const CartSummary = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  console.log('cart items', cartItems)

  const [cartData, setCartData] = useState([])

  useEffect(() => {
    setCartData(cartItems)
  }, [cartItems])

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId))
  }

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCartItemQuantity({ productId, quantity: newQuantity }))
  }

  const orderTotal = cartItems.reduce(
    (total, item) =>
      total + parseFloat(item.Price - item.Discount) * item.quantity,
    0
  )

  // const URL1 = " https://nyus.5techg.com";
  // const URL2 = "https://fivetechyuswearbackend-a4li.onrender.com";
  const URL3 = ' https://nyus.5techg.com'

  return (
    <div className="py-14 px-4 mt-20 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
        Customer’s Cart
      </p>

      <div className="md:grid md:grid-cols-3 mt-10 flex-col xl:flex-row justify-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        {cartItems.length > 0 ? (
          <div className="flex md:col-span-2 flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            {cartItems.map((item) => {
              const productImages = JSON.parse(item.ProductImage)
              const firstImage = productImages[0]
              const cartImage = item.selectedImage
              return (
                <div
                  key={item.id}
                  className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full"
                >
                  <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                    <div className="pb-4 md:pb-8 w-full md:w-40">
                      {cartImage ? (
                        <img
                          className="w-full "
                          src={`${URL3}/${cartImage}`}
                          alt="product"
                        />
                      ) : (
                        <img
                          className="w-full  "
                          src={`${URL3}/${firstImage}`}
                          alt="product"
                        />
                      )}
                      {/* <img className="w-full md:hidden" src={firstImage} alt="product" /> */}
                    </div>
                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                      <div className="w-full flex flex-col justify-start items-start space-y-8">
                        <h3 className="text-sm dark:text-white font-semibold leading-6 text-gray-800">
                          {item.ProductName}
                        </h3>
                      </div>
                      <div className="flex justify-between space-x-8 items-start w-full">
                        <p className="text-base dark:text-white xl:text-lg leading-6">
                          Rs. {item.Price - item.Discount}{' '}
                          <span className="text-red-300 line-through"></span>
                        </p>
                        <p className="text-base dark:text-white xl:text-lg leading-6 hidden text-gray-800">
                          {item.quantity}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            handleQuantityChange(
                              item.id,
                              item.quantity > 1 ? item.quantity - 1 : 1
                            )
                          }
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          -
                        </button>
                        <span className="text-lg">{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          +
                        </button>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="px-2 py-1 bg-red-500 text-white rounded"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div>
            <p className="text-xl">
              There are no items in your cart. Please add items to the cart.
            </p>
            <p>
              To add products to the cart, go to the{' '}
              <Link to="/" className="text-indigo-600 cursor-pointer">
                product page
              </Link>
              .
            </p>
          </div>
        )}

        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
            Summary
          </h3>
          <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
            <div className="flex justify-between w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">
                Subtotal
              </p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                Rs. {orderTotal.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-2xl dark:text-white font-semibold leading-4 text-gray-800">
              Total
            </p>
            <p className="text-2xl dark:text-gray-300 font-semibold leading-4 text-gray-600">
              Rs. {orderTotal.toFixed(2)}
            </p>
          </div>
          {cartItems.length !== 0 && (
            <Link
              to="/CheckOut"
              className="w-full flex justify-center items-center"
            >
              <button className="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">
                Checkout
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartSummary
