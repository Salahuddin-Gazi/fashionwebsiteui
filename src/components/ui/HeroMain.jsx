import Image from 'next/image';
import ShopNow from './ShopNow';

export default function HeroMain() {
  return <div>
    <div className='relative min-h-[350px]'>
      <Image
        src={'/data/ui-images/cover.jpg'}
        height={0}
        width={0}
        objectFit="cover"
        alt="carousel"
        priority
        unoptimized={true}
        className='w-full sm:aspect-video aspect-square lg:max-h-[550px] max-h-[400px] object-cover'
      />

      <div className="absolute bg-black top-0 left-0 w-full h-full opacity-50"></div>

      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
        <div>
          <h1 className='md:text-[48px] sm:text-[36px] text-[24px] text-white text-center'>Elevate Your Everyday Style</h1>
          <h4 className='md:text-[19px] sm:text-[18px] text-[12px] text-white text-center opacity-80'>Discover the Latest Trends in Sustainable Fashion</h4>
        </div>

        <ShopNow />
      </div>
    </div>

    <div className='sm:mt-[-10px] mt-[-16px] w-full min-h-[70px] xl:min-h-[100px] aspect-auto relative'>
      <Image
        alt='options'
        src={'/data/ui-images/option.png'}
        height={0}
        width={0}
        className='w-full h-full sm:block hidden absolute top-0 left-0'
        unoptimized={true}
      />

      <Image
        alt='options'
        src={'/data/ui-images/option-2.png'}
        height={0}
        width={0}
        className='w-full sm:hidden block max-h-[236px] object-fit aspect-square'
        unoptimized={true}
      />
    </div>
  </div>
}