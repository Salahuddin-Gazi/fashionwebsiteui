import Image from 'next/image';
import RatingStars from './StarRating';
import Link from 'next/link';

export default function ProductCard({ data, showRating = false, showBadge = false, path }) {
  const handleRating = (rating) => {
    console.log("Selected Rating:", rating);
  };

  return <div className='bg-white lg:p-2 md:p-[0.4rem] p-2 rounded-[0.7rem] h-full'>
    <Link href={`/details/${path}/${data.id}`}>
      <div className='relative'>
        <Image
          alt={data.title ?? "product"}
          src={`/data/product-images/p-${data.id}.jpg`}
          width={360}
          height={360}
          className='w-full h-full rounded-[0.7rem] aspect-square'
        />

        {showBadge && <div className='absolute top-0 right-[16px] bg-[#8F71E1] text-white xl:text-[16px] text-[14px] pt-1 px-3 pb-2 rounded-b-[30px] text-center font-medium'>
          <div>Up</div><div>to</div><div>40%</div>
        </div>}
      </div>

      {showRating && (<div className='flex justify-start items-center mt-4'>
        <RatingStars totalStars={5} rating={data.rating} onRate={handleRating} /> <span className='ml-2'>({data.number_of_reviews})</span>
      </div>)}

      <div className='my-4 flex md:gap-x-4 gap-x-2 justify-between items-center px-1'>
        <p className='text-base font-medium text-black flex-auto line-clamp-1'>{data.title}</p>
        <p className='text-[19px] font-bold text-black flex-1 text-end'>${data.price}</p>
      </div>
    </Link>

    <div>
      {data.total_availability > 0 ?
        <button className='w-full flex justify-center items-center py-2 border border-[#8F71E1] text-[#8F71E1] rounded-[0.7rem] text-[16px] font-medium'>Add to Cart</button> :
        <button className='w-full flex justify-center items-center py-2 border border-red-500 text-red-400 rounded-[0.7rem] text-[16px] font-medium'>Sold Out</button>}
    </div>
  </div>
}