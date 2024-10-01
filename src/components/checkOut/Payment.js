import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectCartItems,
  removeFromCart,
} from '../cartcomponent/store/cartsSlice'
import { selectCheckoutForm } from './store/checkoutSlice'
import axios from 'axios'
import QRCode from 'qrcode.react'
import { useNavigate } from 'react-router-dom'

function Payment() {
  const cartItems = useSelector(selectCartItems)
  const checkoutForm = useSelector(selectCheckoutForm)
  const dispatch = useDispatch()

  const [transactionId, setTransactionId] = useState('')
  const [paymentScreenshot, setPaymentScreenshot] = useState(null)
  const [loading, setLoading] = useState(false)
  const [paymentCompleted, setPaymentCompleted] = useState(false)

  const [transactionIdError, setTransactionIdError] = useState('')
  const [paymentScreenshotError, setPaymentScreenshotError] = useState('')

  const orderTotal = cartItems.reduce(
    (total, item) =>
      total + parseFloat(item.Price - item.Discount) * item.quantity,
    0
  )

  const gst = Math.round(orderTotal * 0.18)
  const amount = orderTotal + gst
  const upiId = '8329687070@axl'
  const myName = 'lense plus'
  const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
    myName
  )}&am=${amount}`

  const handlePayClick = () => {
    window.location.href = upiLink
  }

  console.log('cartItems', cartItems)
  console.log('checkoutForm', checkoutForm)

  const handleFileChange = (event) => {
    setPaymentScreenshot(event.target.files[0])
    setPaymentScreenshotError('')
  }

  const handleTransactionIdChange = (event) => {
    setTransactionId(event.target.value)
    setTransactionIdError('')
  }

  const URL1 = ' https://nyus.5techg.com'
  // const URL2 = "https://fivetechyuswearbackend-a4li.onrender.com";

  useEffect(() => {
    if (paymentCompleted) {
      alert('Payment successful!')
      setTransactionId('')
      setPaymentScreenshot(null)
      setPaymentCompleted(false)
      setLoading(false)
      navigate('/')
    }
  }, [paymentCompleted])

  // const ondowload = () => {
  //     window.open("eyeimage/qrcode/orignalqr.jpeg");
  // };

  const ondowload = () => {
    const link = document.createElement('a')
    link.href = 'eyeimage/qrcode/orignalqr.jpeg'
    link.download = 'nyus-qr-code.jpg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const navigate = useNavigate()
  let data = {
    name: checkoutForm.name,
    email: checkoutForm.email,
    contactNo: checkoutForm.contactNo,
    amount: amount,
    MUID: 'MUID' + Date.now(),
    paymentTransactionNo: 't' + Date.now(),
  }

  const handlePaymentSubmit = async () => {
    setLoading(true)
    const formData = new FormData()

    formData.append('cname', checkoutForm.name)
    formData.append('cemail', checkoutForm.email)
    formData.append('contactNo', checkoutForm.contactNo)
    formData.append('address', checkoutForm.address)
    formData.append('state', checkoutForm.state)
    formData.append('zipCode', checkoutForm.zip)
    formData.append('paymentTransactionNo', transactionId)
    formData.append('paymentScreenshot', paymentScreenshot)

    cartItems.forEach((item) => {
      formData.append('productId', item.id)
      formData.append('productName', item.ProductName)
      formData.append('quantity', item.quantity)
      formData.append('price', item.Price)
    })

    try {
      const response = await axios.post(`${URL1}/orders/new_order`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      setPaymentCompleted(true)
      cartItems.forEach((item) => {
        dispatch(removeFromCart(item.id))
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
    } catch (error) {
      console.error('Error making payment', error)
      setLoading(false)
    }
  }

  return (
    <div>
      <p className="mt-36 ml-20 text-2xl font-medium">Payment Methods</p>
      <div className="mb-10 lg:mx-20 gap-4 lg:grid lg:grid-cols-2">
        <div className="border bg-gray-50 mt-4 p-4">
          <h1 className="text-lg font-bold">Order Summary</h1>
          {cartItems.map((item) => (
            <div key={item.id} className="lg:grid lg:grid-cols-2">
              {/* <img src={` https://nyus.5techg.com/${item.selectedImage}` }></img> */}
              <h3 className="mt-4 hidden">
                Product Name: <span className="font-semibold">{item.id}</span>
              </h3>
              <h3 className="mt-4">
                Product Name:{' '}
                <span className="font-semibold">{item.ProductName}</span>
              </h3>
              <h3 className="mt-2">
                Qty: <span className="font-semibold">{item.quantity}</span>
              </h3>
              <h3 className="mt-2">
                Rate per product:{' '}
                <span className="font-semibold">
                  Rs. {item.Price - item.Discount}
                </span>
              </h3>
              <h3 className="mt-2">
                Description:{' '}
                <span className="font-semibold">{item.Description}</span>
              </h3>
            </div>
          ))}
          <br></br>
          <hr></hr>
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
                Rs. {orderTotal}
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
                Rs. {orderTotal + gst}
              </span>
            </div>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-2 mt-4">
          <div className="border p-4">
            {amount && (
              <div className="lg:block hidden">
                <div className="mx-auto flex item-center justify-center">
                  <QRCode value={upiLink} />
                </div>

                <p className="text-center mt-10 mb-6">Scan to pay {amount} </p>
              </div>
            )}
            {/* <img className='w-60 mx-auto' src='eyeimage/qrcode/lensPlus.jpeg' alt="QR code" /> */}
            <p className="text-center lg:hidden"> Pay Directly</p>
            <button
              onClick={handlePayClick}
              className="border lg:hidden bg-yellow-400 w-full py-2"
            >
              click here to pay {amount}
            </button>
          </div>
          <div>
            <div className="p-4">
              <label
                htmlFor="transaction_id"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Transaction ID
              </label>
              <input
                type="text"
                id="transaction_id"
                value={transactionId}
                onChange={handleTransactionIdChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Transaction ID"
                required
              />
              {transactionIdError && (
                <p className="text-red-500 text-sm">{transactionIdError}</p>
              )}
            </div>
            <div className="font-[sans-serif] max-w-md mx-auto p-4">
              <label className="text-base text-gray-500 font-semibold mb-2 block">
                Upload Screenshot
              </label>
              <input
                required
                type="file"
                onChange={handleFileChange}
                className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded"
              />
              {paymentScreenshotError && (
                <p className="text-red-500 text-sm">{paymentScreenshotError}</p>
              )}
            </div>
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
