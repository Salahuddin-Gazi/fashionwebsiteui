import Link from 'next/link';
import MainLogo from '../icons/MainLogo';
import { useState } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [searchText, setSearchText] = useState("");

  function updateSearchText(e) {
    setSearchText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(searchText);
  }

  return <footer className='bg-[#1d1d1d] text-[#F4F8FF]'>
    <div className='md:px-12 px-4 md:py-16 py-8'>
      <div className='flex flex-wrap lg:flex-row flex-col lg:gap-y-0 gap-y-8'>
        <div className="flex-1">
          <div className='max-w-[100px] max-h-[60px] flex aspect-video'>
            <Link href={'/'}>
              <MainLogo />
            </Link>
          </div>

          <p className='sm:text-[16px] text-[13px] font-normal lg:max-w-[411px] lg:mt-8 mt-4'>Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo est consectetur maxime quos fugit velit assumenda est. </p>
        </div>

        <div className="flex-1">
          <h1 className='font-normal text-xl'>Sign Up For Our Newsletter!</h1>
          <p className='sm:text-[16px] text-[13px] font-normal lg:max-w-[600px] mt-3'>Get notified about updates and be the first to get early access to new Podcast episodes.</p>

          <form onSubmit={handleSubmit} className='flex items-center bg-white rounded-md py-2 px-4 gap-x-1.5 mt-8 relative'>
            <input placeholder='Your email address' className='bg-transparent border-0 focus:outline-none p-1 md:text-[24px] text-[16px] md:w-[calc(100%-195px)] sm:w-[calc(100%-150px)] w-[calc(100%-100px)] h-[49px] text-[#1d1d1d]' value={searchText} onChange={updateSearchText} />
            <button type='submit' className='md:w-[195px] sm:w-[150px] w-[100px] h-full absolute top-0 right-[-2px] bg-[#8F71E1] md:text-[18px] text-[16px] font-normal rounded-r-md'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className='mt-12 flex justify-between items-start md:flex-row flex-col md:gap-y-0 gap-y-3'>
        <div>
          <Link href={'/'}><p className='text-[16px] font-normal'>Contact Us</p></Link>
          <p className='text-[12px] font-light mt-3'>support@gg.com</p>
        </div>
        <div>
          <Link href={'/'}><p className='text-[18px] font-normal'>About Us</p></Link>
          <Link href={'/'}><p className='text-[18px] font-normal mt-3'>Contact Us</p></Link>
        </div>
        <div>
          <Link href={'/'}><p className='text-[18px] font-normal'>Privacy policy</p></Link>
          <Link href={'/'}><p className='text-[18px] font-normal mt-3'>Terms & Condition</p></Link>
        </div>
        <div>
          <p className='text-[18px] font-normal'>Social Link</p>
          <div className='flex gap-x-2 mt-3'>
            <Link href={'/'}>
              <Image
                alt='facebook'
                src={'/data/ui-images/facebook.png'}
                width={500}
                height={500}
                className='w-[24px] h-[24px]'
              />
            </Link>

            <Link href={'/'}>
              <Image
                alt='twitter'
                src={'/data/ui-images/twitter.png'}
                width={500}
                height={500}
                className='w-[24px] h-[24px]'
              />
            </Link>

            <Link href={'/'}>
              <Image
                alt='linkedin'
                src={'/data/ui-images/linkedin.png'}
                width={500}
                height={500}
                className='w-[24px] h-[24px]'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className='h-[60px] flex justify-center items-center text-[16px] font-light bg-[#8F71E1]'>
      © 2024 | GGFashion
    </div>
  </footer>
}