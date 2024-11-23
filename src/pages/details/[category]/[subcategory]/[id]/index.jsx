import CartIcon from '@/components/icons/CartIcon';
import DetailsSection from '@/components/ui/DetailsSection';
import ProductDetailsSlider from '@/components/ui/ProductDetailsSlider';
import RelatedProducts from '@/components/ui/RelatedProducts';
import SelectSizesAndColor from '@/components/ui/SelectSizesAndColor';
import RatingStars from '@/components/ui/StarRating';
import { addToCart } from '@/lib/features/cartSlice';
import { addProduct, setCurrentProduct } from '@/lib/features/productsSlice';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id, category, subcategory } = router.query; // 'id' is the dynamic route param

  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const totalQuantity = cart.items.reduce((total, item) => total + item.quantity, 0);
  const product = products.product;
  const dispatch = useDispatch();

  const [selectedColor, setSelectedColor] = useState('w');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [warning, setWarning] = useState({
    warn: false,
    text: ''
  })

  useEffect(() => {
    if (id && (!products.product.id || products.product.id != id)) {
      const currentProduct = products.items.find((p) => p.id == id);
      if (currentProduct) {
        dispatch(setCurrentProduct(currentProduct))
      } else {
        fetchProduct();
      }
    }
  }, [id, products]);

  async function fetchProduct() {
    const res = await fetch(`/api/products/${id}`);
    const currentProduct = await res.json();
    if (currentProduct) {
      dispatch(addProduct(currentProduct));
      dispatch(setCurrentProduct(currentProduct));
    }
  }

  // Handle loading state in case of a fallback route
  if (router.isFallback || !product?.id) {
    return <div>Loading...</div>;
  }

  function handleProductQuantity(mode) {
    console.log(`🔥 ~ handleProductQuantity ~ mode:`, mode)
    if (mode == 'increase') {
      setQuantity((prev) => prev + 1)
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1)
      }
    }
  }

  function handleAddToCart() {
    if (selectedSize != '' && selectedColor != '' && quantity > 0) {
      setWarning({
        warn: false,
        text: ''
      })

      dispatch(addToCart({
        id: product.id,
        product: product,
        quantity: quantity,
        color: selectedColor,
        size: selectedSize,
        price: product.price * quantity
      }));
      toast.success('Added to cart')
    } else {
      setWarning({
        warn: true,
        text: `Please Select${!selectedSize ? ' size' : ''}${!selectedColor ? ' color' : ''}${quantity <= 0 ? ' quantity' : ''} to continue.`
      })
    }
  }

  return <div className='mt-8 relative'>
    <div className='max-w-[1280px] mx-auto px-4'>
      <div className='text-[16px] text-[#000] font-medium'>
        <span className='capitalize'>{category.replaceAll('-', " ")}</span> / <span className='capitalize text-[#7E53D4]'>{subcategory.replaceAll('-', " ")}</span>
      </div>

      <div className='flex md:justify-between md:items-start gap-y-10 mt-4 pb-14 md:flex-row flex-col items-center justify-center'>
        <div className='flex-1 md:w-[calc(50%-16px)] w-full flex justify-start items-start'>
          <ProductDetailsSlider mode={selectedColor} />
        </div>

        <div className='flex-1 md:w-[calc(50%-16px)] w-full'>
          <div className='capitalize bg-[#2F1C59] text-[#fff] px-12 py-2 text-[16px] rounded-lg max-w-[185px]'>{subcategory.replaceAll('-', " ")}</div>

          <div className='mt-3 flex flex-col gap-y-2'>
            <h1 className='lg:text-[33px] text-[28px] text-[#000] font-semibold'>{product.title}</h1>
            <div className='flex justify-start items-center gap-x-2 flex-wrap gap-y-1'>
              <RatingStars rating={product.rating} onRate={() => console.log('GG')} />
              <span>({product.rating})
                <span className='ml-2 text-[#7E53D4]'>{product.number_of_reviews} reviews</span>
              </span>
            </div>
            <h3 className='lg:text-[28px] text-[24px] font-medium'>${product.price}</h3>
          </div>

          <div className='flex justify-between items-start md:mt-8 mt-4 md:pt-8 pt-4 md:pb-8 pb-4 border-dotted border-t border-b border-[#cecece62] flex-wrap gap-y-6 md:flex-row flex-col'>
            <SelectSizesAndColor product={product} setSelectedColor={setSelectedColor} selectedColor={selectedColor} setSelectedSize={setSelectedSize} selectedSize={selectedSize} />
          </div>

          <div className='my-8'>
            <h4 className='text-[19px]'>Quantity</h4>
            <div className='inline-block mt-2'>
              <div className='flex gap-x-8 bg-[#ECE9FE] py-3 px-6 rounded-[20px] justify-start items-center'>
                <button className="h-[24px] w-[14px] flex justify-center items-center relative" onClick={() => handleProductQuantity()}>
                  <span className="before:content-[''] before:w-[14px] before:h-[1.5px] before:bg-[#000] before:absolute before:left-0"></span>
                </button>
                <div>{quantity}</div>
                <button className="h-[24px] w-[14px] flex justify-center items-center relative" onClick={() => handleProductQuantity('increase')}>
                  <span className="before:content-[''] before:w-[14px] before:h-[1.5px] before:bg-[#000] before:absolute before:left-0"></span>
                  <span className="after:content-[''] after:w-[1.5px] after:h-[13px] after:bg-[#000] after:absolute after:left-[5.5px] after:top-[6.5px]"></span>
                </button>
              </div>
            </div>
          </div>

          {warning.warn && (<div className='text-red-500 text-[18px] font-medium'><span className='-mt-[5px]'>**</span> {warning.text}</div>)}
          <div className='mt-2 flex justify-between gap-x-4 flex-wrap md:flex-row flex-col gap-y-4'>
            <button className='flex-1 md:max-w-[50%] bg-[#7E53D4] text-white rounded-lg py-2 text-[16px] font-medium' onClick={handleAddToCart}>Buy Now</button>
            <button className='flex-1 md:max-w-[50%] border text-[#7E53D4] border-[#7E53D4] bg-white rounded-lg py-2 text-[16px] font-medium' onClick={handleAddToCart}>Add To Cart</button>
          </div>

        </div>

      </div>
    </div>

    <div className='py-8 bg-[#fff]'>
      <DetailsSection product={product} />
    </div>

    <div className='max-w-[1280px] mx-auto py-8 px-4'>
      <RelatedProducts currentProduct={product} />
    </div>

    <button className='fixed md:top-[calc(50%-50px)] top-[calc(50%-70px)] right-0 bg-[#581FC1] rounded-l-[20px] md:py-3 md:px-4 px-2 py-2 text-white text-[13px] font-medium flex justify-center items-center flex-col gap-y-2 z-10'>
      <CartIcon size='30' color='#fff' />
      <div className='flex justify-center items-center flex-col'>
        <p>Your Bag</p>
        <p>{totalQuantity}</p></div>
    </button>
  </div>
}