"use client"

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from './ProductCard';

export default function NewArrivalSlider({ data, showRating, showBadge, path }) {
  const navigationPart = path.split('/')[0]

  return <div className='my-6'>
    <Swiper
      navigation={
        {
          prevEl: `.${navigationPart}-new-arrival--slider-left`,
          nextEl: `.${navigationPart}-new-arrival--slider-right`
        }
      }
      modules={[Navigation]}
      spaceBetween={16}
      slidesPerView={4}
      breakpoints={{
        0: {
          slidesPerView: 1.3,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 2.2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1279: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      }}
    >
      {data.length > 0 ? (<>
        {data.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard data={product} showRating={showRating} showBadge={showBadge} path={path}/>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide className="aspect-square">
          <div className="h-full flex justify-center items-center">
            <button className='w-full flex justify-center items-center py-4 border border-[#8F71E1] text-[#8F71E1] rounded-[0.7rem] text-[16px] font-medium gap-x-4'>See All
              <span className="rotate-180"><ArrowLeft size="25px" /></span>
            </button>
          </div>
        </SwiperSlide> */}
      </>)
        : Array.from({ length: 10 }).map((_, i) =>
          <SwiperSlide key={i}>GG</SwiperSlide>
        )}
    </Swiper>
  </div>
}