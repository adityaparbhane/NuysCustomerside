import React, { useState } from 'react';

const AboutUs = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="md:container  mt-28  md:mx-auto px-4 py-8">
            <h1 className="text-4xl sm:ml-10 font-semibold mb-4">About Us</h1>
            <div className='lg:grid lg:grid-cols-2 md:mx-10 mt-10 py-10 px-4 md:px-8 border'>
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Who we are</h2>
                    <p className="text-gray-700 text-lg">
                        We are a leader in crafting stylish, high-quality eyewear at affordable prices. We operate more than 5+ retail locations across India and are also expanding into other cities. We offer a wide variety of fashionable eyewear with high quality, focusing on reinventing the eyewear shopping experience with exceptional service and an unprecedented level of speed and convenience to make the process of buying glasses fun and enjoyable.
                    </p>
                </div>
                <div>
                    <img className='lg:w-[70%] mx-auto' src='eyeimage/about/about.jpg' alt='Eyewear' />
                </div>
            </div>
            {/* <div>
                <img className='w-full ' src='eyeimage/home/Hustlr_Ace_Desktop_Banner.webp' alt='Eyewear' />
            </div> */}

            <div className='w-full h-80 bg-cover bg-center' style={{ backgroundImage: "url('eyeimage/home/Hustlr_Ace_Desktop_Banner.webp')" }} alt='Eyewear'>
            </div>

            <div className='md:grid md:grid-cols-2 md:mx-10 mt-10 py-10 px-8 border'>
                <div className="mb-8">
                    <h2 className="text-4xl font-semibold mb-2">Our Story</h2>
                    <p className="text-gray-700 font-serif text-lg">
                        Once upon a time, in a bustling city, a young boy named Yash dreamed of creating something special. Despite his tender age, his heart beat with the ambition of a seasoned entrepreneur. His vision? To establish a brand that would offer a dazzling array of frames, glassware, and goggles, catering to every individual's style and budget.
                        Yash's dream was not just to create a successful business but to make quality eyewear accessible to all. Whether it was an office-goer looking for sleek frames, a college student searching for trendy goggles, or a businessman in need of elegant glassware, Yash wanted his brand to be the answer.
                        What set Yash's brand apart was its unwavering commitment...
                        {isExpanded && (
                            <>
                                to affordability. In a world where quality often came at a steep price, Yash wanted to break the mold. He believed that everyone deserved to accessorize with flair, regardless of their budget. This commitment became the cornerstone of his brand's identity and its unique selling point.
                                As Yash embarked on this journey, the city buzzed with anticipation. People admired his passion and determination, seeing in him the spirit of entrepreneurship that inspires and uplifts. Yash's story was not just about starting a business; it was about believing in a dream and making it a reality. And as his brand flourished, Yash became a beacon of hope for all those who dared to dream big.
                            </>
                        )}
                        <span className='text-blue-400 cursor-pointer' onClick={toggleReadMore}>
                            {isExpanded ? ' Show less' : ' Read more'}
                        </span>
                    </p>
                </div>
                <div>
                    <img className='md:w-[70%] h-[90%] rounded-xl mx-auto' src='eyeimage/about/realyash.jpeg' alt='Eyewear' />
                </div>
            </div>
            {/* <div className='grid grid-cols-2 mx-10 mt-10 py-10 px-8 border'>
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
                    <p className="text-gray-700 text-lg">
                        2. Meet Yash, a young visionary with a passion for affordable eyewear. His dream is to revolutionize the market with a range of eye-catching frames, stylish goggles, and more, all at prices that won't break the bank.
                        From a young age, Yash's entrepreneurial spirit burned bright. He was always drawn to the world of business, with a keen eye for detail and a love for creating products that stand out from the crowd. His passion for eyewear was evident in every aspect of his work, from the design of his frames to the selection of materials.
                        Yash's vision for 
                        {isExpanded && (
                            <>
                             his brand was clear - to provide high-quality  eyewear that is affordable for everyone. He believed that looking good shouldn't have to cost a fortune, and he set out to make his dream a reality.
                        As Yash's brand grew, so did his reputation for excellence. Customers were drawn to his products not just for their affordability, but for their quality and style. Yash's attention to detail and passion for his work shone through in every pair of glasses he sold, earning him a loyal following of customers who appreciated his commitment to excellence.
                        Today, Yash's brand is a household name, known for its affordable eyewear that doesn't compromise on style or quality. His story is a testament to the power of passion and perseverance, and serves as an inspiration to young entrepreneurs everywhere.
                            </>
                        )}
                        <span className='text-blue-400 cursor-pointer' onClick={toggleReadMore}>
                            {isExpanded ? ' Show less' : ' Read more'}
                        </span>
                    </p>
                </div>
                <div>
                    <img className='w-[70%] mx-auto' src='eyeimage/about/yash.jpg' alt='Eyewear' />
                </div>
            </div> */}
        </div>
    );
};

export default AboutUs;
