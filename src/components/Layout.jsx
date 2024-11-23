import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setNewArrivals, setBigDeal } from '@/lib/features/productsSlice';
import Header from './ui/Header';
import { Manrope } from "next/font/google";
import Footer from './ui/Footer';
import { Toaster } from 'react-hot-toast';

const manrope = Manrope();

const Layout = ({ children, data }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (products.items.length === 0 && data?.products?.length > 0) {
      dispatch(setProducts(data.products));
    }

    if (products.items.length > 0 && products.newArrivals.length === 0) {
      const newArrival = products.items.filter(({ new_arrival }) => new_arrival == true);

      if (newArrival.length > 0) {
        dispatch(setNewArrivals(newArrival));
      }
    }

    if (products.items.length > 0 && products.bigDeal.length === 0) {
      const bigDeal = products.items.filter(({ big_deal }) => big_deal == true);

      if (bigDeal.length > 0) {
        dispatch(setBigDeal(bigDeal));
      }
    }
  }, [dispatch, data, products.items.length]); // Only depend on length to avoid triggering from object reference changes

  return (
    <>
      <div className={`bg-[#f4f8ff] text-black ${manrope.className}`}>
        <Header />
        <main className='min-h-[calc(100vh-24px)] sm:pt-[80px] pt-[60px]'>
          <div>
            <Toaster
              position="top-right"
              reverseOrder={true}
            />
          </div>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
