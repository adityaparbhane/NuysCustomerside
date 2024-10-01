import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectCartItems,
  removeFromCart,
} from '../cartcomponent/store/cartsSlice'
import { selectCheckoutForm } from './store/checkoutSlice'
import axios from 'axios'
// import { useNavigate } from "react-router-dom";

function Payment() {
  const cartItems = useSelector(selectCartItems)
  const checkoutForm = useSelector(selectCheckoutForm)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const orderTotal = cartItems.reduce(
    (total, item) =>
      total + parseFloat(item.Price - item.Discount) * item.quantity,
    0
  )
  console.log('orderTotal', orderTotal)

  const amount = Math.round(orderTotal / (1 + 18 / 100))
  const gst = orderTotal - amount
  const payableAmount = amount + gst

  console.log('cartItems', cartItems)
  console.log('checkoutForm', checkoutForm)

  let data = {
    name: checkoutForm.name,
    email: checkoutForm.email,
    contactNo: checkoutForm.contactNo,
    amount: payableAmount,
    MUID: 'MUID' + Date.now(),
    paymentTransactionNo: 't' + Date.now(),
  }

  // const URL1 = " https://nyus.5techg.com";
  const URL1 = 'https://nyus.5techg.com'
  // const URL2 = "https://fivetechyuswearbackend-a4li.onrender.com";

  console.log('data:', data)

  const updatePaymentStatus = async (status) => {
    try {
      await axios.post(`${URL1}/orders/update_status`, {
        paymentTransactionNo: data.paymentTransactionNo,
        status: status,
      })
    } catch (error) {
      console.error('Error updating payment status:', error)
    }
  }

  const handlePaymentSubmit = async (e) => {
    const formData = new FormData()

    formData.append('cname', checkoutForm.name)
    formData.append('cemail', checkoutForm.email)
    formData.append('contactNo', checkoutForm.contactNo)
    formData.append('address', checkoutForm.address)
    formData.append('state', checkoutForm.state)
    formData.append('zipCode', checkoutForm.zip)
    formData.append('paymentTransactionNo', data.paymentTransactionNo)
    const arr = cartItems.map((item) => {
      return {
        productId: item.id,
        productName: item.ProductName,
        quantity: item.quantity,
        price: item.Price - item.Discount,
      }
    })
    formData.append('items', JSON.stringify(arr))

    e.preventDefault()
    try {
      const response = await axios.post(`${URL1}/orders/new_order`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      const res = await axios.post('https://nyus.5techg.com/order', {
        ...data,
      })
      console.log('API Response:', res)

      if (res.data.success === true) {
        window.location.href = res.data.data.instrumentResponse.redirectInfo.url
        // await updatePaymentStatus('success')
      } else {
        console.error('Redirect URL not found in response')
        await updatePaymentStatus('failed')
      }
      cartItems.forEach((item) => {
        dispatch(removeFromCart(item.id))
      })
      console.log('Order Response:', response)
    } catch (error) {
      console.error('Error during payment:', error)
      await updatePaymentStatus('failed')
    }
  }

  return (
    <div>
      <p className="mt-36 ml-20 text-2xl font-medium">Payment Methods</p>
      <div className="mb-10 lg:mx-20 gap-4 lg:grid lg:grid-cols-2">
        <div className="border bg-gray-50 mt-4 p-4">
          <h1 className="text-lg mt-4 font-bold">Address Summary</h1>
          <div className="md:grid md:grid-cols-2">
            <h3 className="mt-4">
              Your Name:{' '}
              <span className="font-semibold">{checkoutForm.name}</span>
            </h3>
            <h3 className="mt-2">
              Address:{' '}
              <span className="font-semibold">{checkoutForm.address}</span>
            </h3>
            <h3 className="mt-2">
              Contact No.:{' '}
              <span className="font-semibold">{checkoutForm.contactNo}</span>
            </h3>
            <h3 className="mt-2">
              Email: <span className="font-semibold">{checkoutForm.email}</span>
            </h3>
            <h3 className="mt-2">
              Pin: <span className="font-semibold">{checkoutForm.zip}</span>
            </h3>
          </div>

          <div className="border bg-gray-100 mt-2 ">
            <div className="grid grid-cols-3">
              <div></div>
              <h4 className="text-center text-md py-3">Total : </h4>
              <span className=" my-auto justify-center flex item-center  text-md">
                Rs. {amount}
              </span>
            </div>
            <hr />
            <div className="grid grid-cols-3">
              <div></div>
              <h4 className="text-center text-md py-3">Gst 18 % : </h4>
              <span className=" my-auto justify-center flex item-center  text-md">
                Rs. {gst}
              </span>
            </div>
            <hr />

            <div className="grid grid-cols-3">
              <div></div>
              <h4 className="text-center font-semibold  text-xl py-3">
                Total Amount :{' '}
              </h4>
              <span className="font-semibold my-auto  justify-center flex item-center">
                Rs. {payableAmount}
              </span>
            </div>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-2 mt-4">
          <div>
            {loading ? (
              <button className="m-4 border mt-4 w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white">
                Loading...
              </button>
            ) : (
              <div>
                <button
                  onClick={handlePaymentSubmit}
                  className="m-4 border mt-4 w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white"
                  disabled={loading}
                >
                  Complete Payment
                </button>
                <div className="flex gap-x-4">
                  <h4 className="ml-4 font-semibold  text-lg ">Note </h4>
                  <p className="font-semibold text-xs">
                    Record VIDEO when open the package check for damages,
                    Missing or Wrong item. otherwise Return will NOT be
                    accepted.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
