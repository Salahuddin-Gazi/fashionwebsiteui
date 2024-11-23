import Image from 'next/image';
import ShopNow from './ShopNow';

export default function CollectionCard({ text, sex }) {
  return <div className='flex justify-start items-center gap-x-8 md:flex-row flex-col gap-y-4'>
    <div className='max-w-[620px] md:w-[calc(100%-300px)] w-full'>
      <Image
        alt={text}
        src={`${sex == 'm' ? '/data/ui-images/man.png' : '/data/ui-images/woman.png'}`}
        width={500}
        height={500}
        className='aspect-square object-cover w-full'
      />
    </div>

    <div className='flex flex-col md:justify-center justify-start items-start min-w-[260px] w-full md:pl-0 pl-4'>
      <h1 className='md:text-[36px] text-[24px]'>{text}</h1>
      <ShopNow />
    </div>
  </div>
}