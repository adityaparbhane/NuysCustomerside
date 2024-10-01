import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component'

function Gallery() {
  return (
    <div >

      <section>
        <div >
    <LazyLoadImage width="100%" effect="blur"  alt="Image" className="w-full" src="Image/gallery 2.svg"     />

          {/* <img className='w-full' src='Image/gallery 2.svg'></img> */}
        </div>
        <div className='h-20   bg-[#EEEEEE]  ' >
          <h1 className='text-3xl p-4 xs:text-lg  text-[#8C8C8C] font-medium text-center'>We Are Here To Serve You Deliciou Flavours</h1>
        </div>

        <section class="overflow-hidden my-6 text-gray-700">
          <div class="container px-5 py-2 mx-auto  lg:px-32">
            <div class="flex flex-wrap -m-1 md:-m-2">
              <div class="flex flex-wrap w-1/2">
                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full cursor-pointer hover:scale-110 transition duration-500 ease-in-out  rounded-lg"
                    src="Image/g4.jpg" />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full cursor-pointer hover:scale-110 transition duration-500 ease-in-out  rounded-lg"
                    src="Image/g5.jpg" />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full  rounded-lg"
                    src="Image/cont.jpg" />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2">
                <div class="w-full p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src="Image/g7.jpg" />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full cursor-pointer hover:scale-110 transition duration-500 ease-in-out  rounded-lg"
                    src="Image/g8.jpg" />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full cursor-pointer hover:scale-110 transition duration-500 ease-in-out  rounded-lg"
                    src="Image/g6.jpg" />
                </div>
              </div>
            </div>
          </div>
        </section>


        <div className='h-[360px] xs:grid-cols-1  xs:h-[200px] grid grid-cols-8 bg-[#EEEEEE]'>
          <div className=' xs:hidden col-span-2 p-10'>
            <img src='Image/drinkkk g.svg'></img>
          </div>
          <div className='col-span-4'>
            <h1 className='text-3xl xs:mt-10 mt-20 xs:text-lg text-[#8C8C8C]  text-center'>Satisfying people’s hunger for life’s simple pleasures. Make people happy, have some fun and be number one. The pleasure of finding the difference.</h1>
          </div>
          <div className=' xs:hidden col-span-2 '>
            <img src='Image/mix g.svg'></img>
          </div>

        </div>
        <div className=" container mx-auto lg:px-20  py-6 grid gap-4 lg:grid-cols-4">
          <img
            src="Image/g1.jpg"
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm lg:col-start-3 lg:row-start-1   "
          />
          <img
            className="w-full h-full cursor-pointer hover:scale-110 transition duration-500 ease-in-out "
            src="Image/g2.jpg"
          />
          <img
            className="w-full h-full  cursor-pointer hover:scale-110 transition duration-500 ease-in-out"
            src="Image/g3.jpg"
          />
          <img
            className="w-full h-full cursor-pointer hover:scale-110 transition duration-500 ease-in-out"
            src="Image/g7.jpg"
          />
          <img
            className="w-full h-full cursor-pointer hover:scale-110 transition duration-500 ease-in-out"
            src="Image/g8.jpg"
          />
        </div>
      </section>
    </div>
  )
}

export default Gallery