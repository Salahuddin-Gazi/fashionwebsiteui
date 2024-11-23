import { useSelector } from 'react-redux';
import Link from 'next/link';
import ArrowLeft from '../icons/ArrowLeft';
import NewArrivalSlider from './NewArrivalSlider';

export default function NewArrival() {
  const newArrival = useSelector((state) => state.products.newArrivals);

  return <div className='mt-8'>
    <div className='flex justify-between items-center'>
      <div>
        <h4 className='text-[#8F71E1] sm:text-[19px] text-[16px] font-light'>FEATURED PRODUCT</h4>
        <h3 className='sm:text-[28px] text-[24px] font-bold'>New Arrivals</h3>
      </div>

      <div>
        <button className='feature-product-new-arrival--slider-left'><ArrowLeft /></button>
        <button className='rotate-180 ml-1 feature-product-new-arrival--slider-right'><ArrowLeft /></button>
      </div>
    </div>

    <NewArrivalSlider data={newArrival} path={'feature-product/new-arrival'}/>

    <div className='w-full flex justify-center items-center mt-3'>
      <Link href={'/'} className='text-[16px] text-white py-2 px-4 bg-[#8F71E1] rounded-lg font-light'>See more</Link>
    </div>
  </div>
}