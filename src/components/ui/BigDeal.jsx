import Image from 'next/image';
// import BigDealIcon from '../icons/BigDealIcon';
import ShopNow from './ShopNow';
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: '400'
});

export default function BigDeal() {
  return <div className="md:px-8">
    {/* <div className='bg-[#EEECFB] flex justify-between items-center rounded-md relative xl:h-[450px] lg:h-[350px] md:h-[300px] sm:h-[200px]'> */}
    <div className='bg-[#EEECFB] flex md:justify-between justify-center items-center rounded-md md:flex-row flex-col gap-y-8 md:pt-8 pt-8 '>
      <div className='flex justify-center md:items-start items-center md:w-[60%] flex-col md:pl-16'>
        {/* <div className="flex justify-center items-start flex-col"> */}
        {/* <BigDealIcon /> */}
        <h1 className={`${pacifico.className} lg:text-[24px] md:text-[20px] text-[24px] font-bold text-[#6F42C1]`}>Big Deal</h1>
        <h1 className='xl:text-[48px] lg:text-[36px] md:text-[24px] text-[28px] font-normal md:max-w-full max-w-[275px] text-center mt-2'><span className='text-[#6F42C1]'>30%</span> Off for New Customers</h1>
        <ShopNow />
        {/* </div> */}
      </div>
      {/* <div className='w-full max-w-[40%] absolute md:-top-16 -top-12 right-0 aspect-auto'>
        <Image
          alt='Big Deal'
          src={'/data/ui-images/big-deal.jpg'}
          width={500}
          height={500}
          className='w-full xl:h-[450px] lg:h-[350px] md:h-[300px] sm:h-[200px] rounded-md object-cover object-center aspect-auto max-w-[85%]'
        />
      </div> */}
      <div className='w-full md:max-w-[40%] aspect-auto flex md:justify-start justify-center items-center'>
        <Image
          alt='Big Deal'
          src={'/data/ui-images/big-deal.jpg'}
          width={500}
          height={500}
          className='w-full rounded-md object-cover object-center aspect-auto max-w-[85%]'
        />
      </div>
    </div>
  </div>
}