'use client';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './css/products_details.css';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import ArrowLeft from '../icons/ArrowLeft';

export default function ProductDetailsSlider({ mode = 'w' }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='md:max-w-[calc(100%-28px)] max-w-full  prod-details--slider'>
      <div className='relative'>
        <Swiper
          navigation={
            {
              prevEl: '.product-slider-new-arrival--slider-left',
              nextEl: '.product-slider-new-arrival--slider-right'
            }
          }
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {Array.from({ length: 5 }).map((_, i) =>
            <SwiperSlide key={i} className='cursor-grab aspect-square'>
              <Image
                alt='product'
                src={`/data/product-images/h-${mode}-${i + 1}.jpg`}
                width={500}
                height={500}
                className='w-full object-cover'
              />
            </SwiperSlide>
          )}
        </Swiper>

        <div className='absolute w-full top-1/2 left-0 flex justify-between items-center z-10'>
          <button className='product-slider-new-arrival--slider-left'><ArrowLeft /></button>
          <button className='rotate-180 ml-1 product-slider-new-arrival--slider-right'><ArrowLeft /></button>
        </div>
      </div>
      <div className='mt-2'>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='mySwiper'
        >
          {Array.from({ length: 5 }).map((_, i) =>
            <SwiperSlide key={i} className='cursor-grab aspect-square'>
              <Image
                alt='product'
                src={`/data/product-images/h-${mode}-${i + 1}.jpg`}
                width={500}
                height={500}
                className='w-full object-cover'
              />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
}
