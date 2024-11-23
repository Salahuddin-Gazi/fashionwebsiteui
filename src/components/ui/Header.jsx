import Link from 'next/link';
import MainLogo from '../icons/MainLogo';
import SearchIcon from '../icons/SearchIcon';
import CartIcon from '../icons/CartIcon';
import UserIcon from '../icons/UserIcon';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import NavHamBurger from '../icons/NavHamBurger';

export default function Header() {
  const cart = useSelector((state) => state.cart);
  const totalQuantity = cart.items.reduce((total, item) => total + item.quantity, 0);
  const [searchText, setSearchText] = useState("");
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const [serachClicked, setSerachClicked] = useState(false);

  function updateSearchText(e) {
    setSearchText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(searchText);
  }

  // Function to handle click outside
  const handleClickOutside = (event) => {
    if (!event.target.closest('.nav-hamburger') && !event.target.closest('.nav-hamburger-option')) {
      setHamburgerClicked(false)
    }

    if (!event.target.closest('.search-icon') && !event.target.closest('.search-option')) {
      setSerachClicked(false)
    }
  };

  // useEffect to add/remove the event listener
  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <header className='sm:min-h-[80px] min-h-[60px] sm:max-h-[80px] max-h-[60px] bg-[#f5f3ff] flex justify-between items-center gap-x-6 fixed z-20 top-0 left-0 w-full px-8'>

      <div className='xl:flex-1 md:flex-[1/2] flex items-center justify-start'>

        <div className='cursor-pointer lg:hidden mr-4 nav-hamburger' onClick={() => setHamburgerClicked((prev) => !prev)}>
          <NavHamBurger />
        </div>

        <div className='max-w-[100px] sm:max-h-[60px] max-h-[45px] flex aspect-video'>
          <Link href={'/'}>
            <MainLogo />
          </Link>
        </div>
      </div>

      <div className={`nav-hamburger-option flex-1 flex items-center justify-center lg:relative lg:left-0 absolute top-[calc(100%+5px)] transition-all duration-500 ease-in-out${hamburgerClicked ? ' left-0' : ' -left-[500px]'}`}>
        <div className='flex justify-between gap-x-8 max-w-[350px] lg:flex-row flex-col bg-[#f5f3ff] py-3 lg:px-0 px-4'>
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>Shop</Link>
          <Link href={'/'}>Details</Link>
          <Link href={'/'}>What's New</Link>
        </div>
      </div>

      <div className='flex-1 gap-x-4 flex justify-end'>
        <form onSubmit={handleSubmit} className='search-option'>
          <div className={`sm:block${serachClicked ? ' block' : ' hidden'} sm:relative sm:top-0 right-[30px] absolute top-full flex items-center bg-white rounded-[20px] p-1.5 px-4 gap-x-1.5`}>
            <button type='submit' className='mt-[2px]'><SearchIcon size='16' /></button>
            <input placeholder='Search' className='bg-transparent border-0 focus:outline-none p-1' value={searchText} onChange={updateSearchText} />
          </div>

          <button type='button' className='sm:hidden search-icon' onClick={() => setSerachClicked((prev) => !prev)}><SearchIcon size='30' /></button>
        </form>

        <button className='relative'><CartIcon size='30' />
          <div className='absolute top-[2px] right-[-5px] bg-black p-1 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>{totalQuantity}</div></button>
        <button><UserIcon size='30' />
        </button>
      </div>

    </header>
  )
}