import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import 'tailwindcss/tailwind.css'

const Checkout2 = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const product = state.product
  console.log('Product Data:', product)

  const indianStates = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ]
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const formData = {
      ...data,
      product,
      payableAmount: product.Price - product.Discount,
    }
    navigate('/Payment2', { state: formData })
  }

  const payableAmount = product.Price - product.Discount

  const qty = 1

  // const URL1 = " https://nyus.5techg.com";
  // const URL2 = "https://fivetechyuswearbackend-a4li.onrender.com";
  const URL3 = ' https://nyus.5techg.com'

  return (
    <div className="md:mt-24 mt-28 ">
      <div className="flex-col items-center  bg-white px-6 py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <a href="#" className="text-2xl font-bold text-gray-800">
          Order Summary
        </a>
        <p className="text-gray-400">
          Check your items. And select a suitable shipping method.
        </p>
      </div>
      <div className="grid sm:px-10 gap-4 my-4 lg:grid-cols-2 lg:px-20 xl:px-24">
        <div className="px-4 pt-8 bg-gray-50">
          <div
            className="space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6"
            key={product.id}
          >
            <div className="flex flex-col rounded-lg bg-white sm:flex-row">
              <img
                className="m-2 h-14 w-14 rounded-md border object-cover object-center"
                src={`${URL3}/${product.selectedImage}`}
                alt=""
              />
              <div className=" w-full px-4 py-4">
                <p className="font-semibold text-sm">{product.ProductName}</p>
                <p className="float-right  mt-4 text-gray-400">Qty 1</p>
                <p className="text-lg  mt-4 font-bold">Rs. {payableAmount}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="name"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Your Name
              </label>
              <div className="relative">
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full rounded-md border ${
                    errors.name ? 'border-red-500' : 'border-gray-200'
                  } px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
                  placeholder="Your full name here"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs italic">
                    {errors.name.message}
                  </p>
                )}
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="contactNo"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Mobile No
              </label>
              <div className="relative">
                <input
                  {...register('contactNo', {
                    required: 'contact No is required',
                  })}
                  type="number"
                  id="contactNo"
                  name="contactNo"
                  className={`w-full rounded-md border ${
                    errors.contactNo ? 'border-red-500' : 'border-gray-200'
                  } px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
                  placeholder="Your full name here"
                />
                {errors.contactNo && (
                  <p className="text-red-500 text-xs italic">
                    {errors.contactNo.message}
                  </p>
                )}
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="email"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <div className="relative">
                <input
                  {...register('email')}
                  type="text"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="your.email@gmail.com"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>

              <label
                htmlFor="address"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Billing Address
              </label>
              <div className="flex flex-col sm:flex-row">
                <div className="relative flex-shrink-0 sm:w-7/12">
                  <input
                    {...register('address', {
                      required: 'Address is required',
                    })}
                    type="text"
                    id="address"
                    name="address"
                    className={`w-full rounded-md border ${
                      errors.address ? 'border-red-500' : 'border-gray-200'
                    } px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
                    placeholder="Street Address"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs italic">
                      {errors.address.message}
                    </p>
                  )}
                  {/* <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                        <img className="h-4 w-4 object-contain" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png?20230723002237" alt="" />
                                    </div> */}
                </div>
                <div className="mb-4 mt-4 sm:mt-0 sm:w-1/6 sm:ml-4">
                  <select
                    {...register('state', { required: 'State is required' })}
                    className={`w-full rounded-md border ${
                      errors.state ? 'border-red-500' : 'border-gray-200'
                    } px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
                    id="state"
                  >
                    <option value="">State</option>
                    {indianStates.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  {errors.state && (
                    <p className="text-red-500 text-xs italic">
                      {errors.state.message}
                    </p>
                  )}
                </div>
                <input
                  {...register('zip', { required: 'Pincode is required' })}
                  type="text"
                  name="zip"
                  className={`flex-shrink-0 sm:ml-4 rounded-md border ${
                    errors.zip ? 'border-red-500' : 'border-gray-200'
                  } px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
                  placeholder="Pincode"
                />
                {errors.zip && (
                  <p className="text-red-500 text-xs italic">
                    {errors.zip.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">
                  Rs. {payableAmount.toFixed(2)}
                </p>
              </div>
              {/* <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Shipping</p>
                                <p className="font-semibold text-gray-900">₹0.00</p>
                            </div> */}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">
                Rs. {payableAmount}
              </p>
            </div>
            <button
              type="submit"
              className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Checkout2
