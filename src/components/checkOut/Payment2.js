import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectCartItems,
  removeFromCart,
} from '../cartcomponent/store/cartsSlice'
import QRCode from 'qrcode.react'

const Payment2 = () => {
  const { state } = useLocation()
  const dispatch = useDispatch()
  const {
    name,
    contactNo,
    email,
    address,
    state: userState,
    zip,
    product,
    cartItems,
    payableAmount,
    orderTotal,
  } = state || {}

  const [loading, setLoading] = useState(false)
  const [paymentCompleted, setPaymentCompleted] = useState(false)
  const [orderid, setOrderid] = useState('')

  const amount = Math.round(payableAmount / (1 + 18 / 100))

  const gst = payableAmount - amount
  // const amount = payableAmount + gst;

  // const URL1 = " https://nyus.5techg.com";
  const URL1 = 'https://nyus.5techg.com'
  // const URL2 = "https://fivetechyuswearbackend-a4li.onrender.com";

  useEffect(() => {
    if (paymentCompleted) {
      alert('Payment successful!', orderid)

      setPaymentCompleted(false)
      setLoading(false)
    }
  }, [paymentCompleted, orderid])

  const navigate = useNavigate()

  // const ondowload = () => {
  //     window.open("eyeimage/qrcode/orignalqr.jpeg");
  // };

  //   const ondowload = () => {
  //     const link = document.createElement("a");
  //     link.href = "eyeimage/qrcode/orignalqr.jpeg";
  //     link.download = "nyus-qr-code.jpg";
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   };

  let data = {
    name: name,
    email: email,
    contactNo: contactNo,
    amount: payableAmount,
    MUID: 'MUID' + Date.now(),
    paymentTransactionNo: 't' + Date.now(),
  }
  console.log('data:', data)
  console.log('pro', product)

  const handlePaymentSubmit = async () => {
    const formData = new FormData()

    formData.append('cname', name)
    formData.append('cemail', email)
    formData.append('contactNo', contactNo)
    formData.append('address', address)
    formData.append('state', userState)
    formData.append('zipCode', zip)
    formData.append('paymentTransactionNo', data.paymentTransactionNo)
    formData.append('price', data.payableAmount)
    formData.append('productId', product.id)
    formData.append('quantity', product.Quantity)
    formData.append('productName', product.ProductName)
    // formData.append('productimage', ` https://nyus.5techg.com/${product.selectedImage}`);

    try {
      const response = await axios.post(`${URL1}/orders/new_order`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      const res = await axios.post(' https://nyus.5techg.com/order', {
        ...data,
      })
      console.log('API Response:', res)
      if (res.data.success === true) {
        window.location.href = res.data.data.instrumentResponse.redirectInfo.url
      } else {
        console.error('Redirect URL not found in response')
      }

      // cartItems.forEach((item) => {
      //   dispatch(removeFromCart(item.id));
      // });
      // console.log("Order Response:", response);
    } catch (error) {
      console.error('Error during payment:', error)
    }
  }

  if (!state) {
    return <p>Data is missing, please go back to checkout.</p>
  }

  console.log('Payment Data:', state)

  return (
    <div>
      <p className="mt-36 ml-20 text-2xl font-medium">Payment Methods</p>
      <div className="mb-10 lg:mx-20 gap-4 lg:grid lg:grid-cols-2">
        <div className="border bg-gray-50 mt-4 p-4">
          <h1 className="text-lg mt-4 font-bold">Address Summary</h1>
          <div className="md:grid md:grid-cols-2">
            <h3 className="mt-4">
              Your Name: <span className="font-semibold">{name}</span>
            </h3>
            <h3 className="mt-2">
              Address: <span className="font-semibold">{address}</span>
            </h3>
            <h3 className="mt-2">
              Contact No.: <span className="font-semibold">{contactNo}</span>
            </h3>
            <h3 className="mt-2">
              Email: <span className="font-semibold">{email}</span>
            </h3>
            <h3 className="mt-2">
              Pin: <span className="font-semibold">{zip}</span>
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

export default Payment2
