import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../cartcomponent/store/cartsSlice';
import { Link, useNavigate } from 'react-router-dom';

function Header() {

  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const handleShowMore = (category) => {
    navigate(`/products/${category}`);
  };


  return (
    <div>
      <div>
        <div className="bg-white hidden md:block  fixed top-0 z-10 w-full">
          <div className="border py-3 px-6">
            <div className="flex justify-between">
              <div className="ml-10">
                <Link to='/'> <img src='eyeimage/logo/eyelogo.jpeg' className="h-14 w-14 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"></img></Link>
              </div>

              {/* <div className="ml-6 flex flex-1 gap-x-3">

                <input type="text" className="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm" defaultValue="DJI phantom" />
              </div> */}
              <div className="flex gap-x-8">
                <button
                  onClick={() => handleShowMore('man')} className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Men</button>
                <button
                  onClick={() => handleShowMore('woman')} className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Women</button>
                <button onClick={() => handleShowMore('CatEye')} className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Cat Eye</button>
                <button onClick={() => handleShowMore('Aviators')} className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Aviators</button>
                <button onClick={() => handleShowMore('Wayfarer')} className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Wayfarer</button>
                <button onClick={() => handleShowMore('Rimless')} className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Rimless</button>
                <button onClick={() => handleShowMore('Rectangular')} className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Rectangular</button>
                <button onClick={() => handleShowMore('Oversized')} className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Oversized</button>
              </div>

              <div className="ml-2 flex">
                {/* <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                    <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Orders</span>
                </div> */}

                {/* <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Favorites</span>
                </div> */}

                <Link to="/Cart-Summery" className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 mr-10 hover:bg-gray-100">
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    {cartItems.length > 0 && (
                      <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">{cartItems.length}</span>
                    )}
                  </div>
                  <span className="text-sm  font-medium">Cart</span>
                </Link>
{/* 
                <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
                  <span className="text-sm font-medium">Sign in</span>
                </div> */}
              </div>
            </div>

            {/* <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-x-2 py-1 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">India</span>
              </div>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100"></span>
            </div> */}
          </div>
        </div>
      </div>
      <div className='md:hidden block'>
        {/* <a href="https://flowbite.com/" class="flex mt- items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a> */}
        {/* <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button> */}
      </div>
    </div >
  );
}

export default Header;
