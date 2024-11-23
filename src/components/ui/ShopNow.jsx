import Link from 'next/link';
import Arrow1oClock from '../icons/Arrow1oClock';

export default function ShopNow({link="/"}) {
  return <div className='md:mt-6 mt-4 flex justify-center items-center'>
    <button className='rounded-[30px] py-3 px-8 bg-[#8F71E1] text-white font-light'>Shop Now</button>
    <Link href={link} className='ml-2'><Arrow1oClock /></Link>
  </div>
}