import { useSelector } from 'react-redux';
import Link from 'next/link';
import ArrowLeft from '../icons/ArrowLeft';
import NewArrivalSlider from './NewArrivalSlider';

export default function RelatedProducts({ currentProduct }) {
  const products = useSelector((state) => state.products.items);

  const relatedProductIds = new Set(); // To keep track of already added products
  const relatedProducts = products.filter((product) => {
    // Exclude the current product
    if (product.id === currentProduct.id) return false;

    // Match categories
    const categoryMatch = product.categories.some((category) =>
      currentProduct.categories.includes(category)
    );

    // Match sex
    const sexMatch = product.sex === currentProduct.sex;

    // Check if product passes all filters and is not already included
    if (categoryMatch && sexMatch) {
      if (!relatedProductIds.has(product.id)) {
        relatedProductIds.add(product.id); // Add product to set to avoid duplicates
        return true;
      }
    }
    return false;
  });


  return <div className='mt-8'>
    <div className='flex justify-between items-center'>
      <div>
        <h3 className='sm:text-[28px] text-[24px] font-bold'>Related Products</h3>
      </div>

      <div>
        <button className='related-product-new-arrival--slider-left'><ArrowLeft /></button>
        <button className='rotate-180 ml-1 related-product-new-arrival--slider-right'><ArrowLeft /></button>
      </div>
    </div>

    <NewArrivalSlider data={relatedProducts} path={`related-product/${currentProduct.categories[0]}`} />

    <div className='w-full flex justify-center items-center mt-3'>
      <Link href={'/'} className='text-[16px] text-white py-2 px-4 bg-[#8F71E1] rounded-lg font-light'>See more</Link>
    </div>
  </div>
}