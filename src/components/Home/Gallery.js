



import React from 'react';
import { useNavigate } from 'react-router-dom';

function Gallery ()  {

  const navigate = useNavigate()

  const handlecatory = (category) =>{
      navigate(`/products/${category}`)
  }
  

  const galleryItems = [
    { id: 1, imageUrl: 'eyeimage/home/gallery/cat5.jpg', videoUrl: 'eyeimage/home/gallery/v1.mp4',  category: 'Men' , navigates:'man' },
    { id: 2, imageUrl: 'eyeimage/home/gallery/cart8.jpg', category: 'Unisex', navigates:"all" },
    { id: 3, imageUrl: 'eyeimage/home/gallery/cat3.jpg', category: 'Woman' , navigates:'woman' },
    // { id: 4, imageUrl: 'eyeimage/home/gallery/cat5.jpg', category: 'Man' },
    // { id: 5, imageUrl: 'eyeimage/home/gallery/cat6.jpg', category: 'Woman' }
  ];

  const GalleryItem = ({ imageUrl, category, colSpan  ,navigates}) => {
    return (
      <div onClick={()=>handlecatory(`${navigates}`)} className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-[600px] cursor-pointer ${colSpan}`}>
        <img   src={imageUrl} loading="lazy" alt="Gallery Item" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        <span className="relative ml-4 mb-6 inline-block uppercase text-sm font-bold text-center text-white md:ml-5 md:text-2xl">{category}</span>
      </div>
    );
  };

  return (
    <div className="h-full py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-center gap-8 sm:mb-8 md:mb-12">
          {/* <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Gallery</h2>
            <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
              This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.
            </p>
          </div> */}
        </div>
        <div className="grid grid-cols-5 gap-4 sm:grid-cols-7 md:gap-6 xl:gap-8">
          {galleryItems.map((item, index) => {
            let colSpan = 'col-span-2';
            if (index === 1) {
              colSpan = 'col-span-3';
            }
            return (
              <GalleryItem key={item.id} imageUrl={item.imageUrl} category={item.category} colSpan={colSpan} navigates = {item.navigates} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
