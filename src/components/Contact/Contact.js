import React from 'react'
import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Contact() {

    useEffect(() => {
        const ifameData = document.getElementById("iframeId")
        const lat = 19.021670500957427;
        const lon = 73.08980652870908;
        ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })

    return (
        <div >
            <section>
                <div className='bg-light-200'>
                    <div >
                    <LazyLoadImage width="100%" effect="blur"  alt="Image" className="w-full" src="Image/contacts.svg" />
                    </div>
                    <div className='grid grid-cols-3 xs:grid-cols-1 xs:mx-2 xs:h-full rounded-lg bg-[hsl(223,85%,21%)] h-[240px] mx-40 mt-20'>

                        <div className='flex p-14'>
                            <img className='w-16 h-16' src='Image/cotact call.svg'></img>
                            <h2 className='text-white text-lg font-semibold'> Call Us   <br /><a  href="tel:8369791722" className='pt-2 font-light' >(+91) 8369791722</a> <br/><a  href="tel:9892220253" className='pt-2 font-light' >(+91) 9892220253</a></h2>
                        </div>

                        <div className='flex p-14'>
                            <img className='w-16 h-16' src='Image/cotact call.svg'></img>
                            <h2 className='text-white text-lg font-semibold'> Mail Us   <br /><a href = "mailto:yogesh@sanvee.in" className='pt-2 font-light'  >yogesh@sanvee.in</a></h2>
                        </div>
                        <div className='flex p-14'>
                            <img className='w-16 h-16' src='Image/cotact call.svg'></img>
                            <h2 className='text-white text-lg font-semibold'> Location   <br /><h2 className='pt-2 font-light' >A 203, Silver Springs MIDC Taloja, Navi Mumbai 410208</h2></h2>
                        </div>
                    </div>
                    <div className='h-[600px] xs:h-[700px] xs:ml-0 mx-60 mt-[100px] ml-[100px] my-10 xs:grig-cols-1 grid grid-cols-2'>
                        <div  >
                            <img className='ml-[200px] xs:hidden mt-[100px]' src='Image/cont.jpg'></img>
                        </div>

                        <div className='border-2 xs:h-[650px] xs:w-[260px] rounded-lg w-[550px] bg-white h-[500px]'>
                            <form className='mt-10'>
                                <h1 className='text-5xl p-4 font-serif'>Get in Touch</h1>
                                <input type="text" className="bg-white border-[#dfe0e3] xs:w-[80%] border-2 mx-6 my-4 h-12 w-[43%] px-4 pr-20 rounded-[10px] focus:outline-none " placeholder="First Name" name="" />
                                <input type="text" className="bg-white border-[#dfe0e3] xs:w-[80%] border-2 xs:mx-6  h-12   w-[43%] px-4 pr-20 rounded-[10px] focus:outline-none " placeholder="Last Name" name="" />
                                <input type="number" className="bg-white  border-[#dfe0e3] xs:w-[80%] border-2 mx-6 my-4 h-12  w-[43%] px-4 pr-20 rounded-[10px] focus:outline-none " placeholder="Mobile Number" name="" />
                                <input type="email" className="bg-white  border-[#dfe0e3] xs:w-[80%] border-2 h-12 xs:mx-6 w-[43%] px-4 pr-20 rounded-[10px] focus:outline-none " placeholder="Email address" name="" />
                                <input type="text" className="bg-white  border-[#dfe0e3] xs:w-[80%] border-2 h-24 w-[92%] mx-6 my-4 px-4 pr-20 rounded-[10px] focus:outline-none " placeholder="Enter your Massage" name="" />
                                <input type="submit" className="bg-light-500   h-12 w-[92%] xs:w-[80%] mx-6 my-4 px-4 pr-20 rounded-[10px] focus:outline-none " name="" />
                            </form>
                        </div>
                    </div>
                    <div>
                        <iframe id="iframeId" height="500px" width="100%"></iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact