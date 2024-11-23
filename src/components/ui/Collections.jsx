import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import CollectionCard from './CollectionCard';

import 'swiper/css';
import 'swiper/css/pagination';
import './css/collection.css';

export default function Collections() {
  return <div className="md:px-8 md:pb-[60px] pb-0 relative">
    <div className='md:block hidden'>
      <div className="custom-swiper-pagination"></div>
      <Swiper
        pagination={{
          clickable: true,
          el: '.custom-swiper-pagination', // Target the custom pagination
          bulletClass: 'custom-bullet', // Add custom bullet class
          bulletActiveClass: 'custom-bullet-active', // Add active class
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        speed={1000}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper-collection overflow-visible"
      >
        <SwiperSlide>
          <CollectionCard text={"Men Collection"} sex={'m'} />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionCard text={"Women Collection"} sex={'w'} />
        </SwiperSlide>
      </Swiper>
    </div>

    <div className='flex flex-col md:hidden gap-y-8'>
      <CollectionCard text={"Men Collection"} sex={'m'} />
      <CollectionCard text={"Women Collection"} sex={'w'} />
    </div>
  </div>
}