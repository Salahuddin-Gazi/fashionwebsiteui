import { useSelector } from 'react-redux'
import ProductCard from './ProductCard';
import Link from 'next/link';
import NewArrivalSlider from './NewArrivalSlider';
import ArrowLeft from '../icons/ArrowLeft';

export default function SummerBigDeal() {
  const summerBigDeal = useSelector((state) => state.products.bigDeal);

  return <div className='mt-8 pb-12'>
    <div className='flex justify-between items-center'>
      <div>
        <h4 className='text-[#8F71E1] sm:text-[19px] text-[16px] font-light'>SUMMER</h4>
        <h3 className='sm:text-[28px] text-[24px] font-bold'>Big Deal</h3>
      </div>

      <div>
        <button className='summer-new-arrival--slider-left'><ArrowLeft /></button>
        <button className='rotate-180 ml-1 summer-new-arrival--slider-right'><ArrowLeft /></button>
      </div>
    </div>

    {/* {summerBigDeal.length > 0 && (
      <div className='flex gap-x-2 flex-wrap items-stretch'>
        {summerBigDeal.map((product) => <div className='flex-1'>
          <ProductCard data={product} showBadge={true} showRating={true} />
        </div>)}
      </div>
    )} */}

    <NewArrivalSlider data={summerBigDeal} showRating={true} showBadge={true} path={'summer/big-deal'} />

    <div className='w-full flex justify-center items-center mt-3'>
      <Link href={'/'} className='text-[16px] text-white py-2 px-4 bg-[#8F71E1] rounded-lg font-light'>See more</Link>
    </div>
  </div>
}