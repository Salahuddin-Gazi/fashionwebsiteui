import { useState } from 'react'

export default function SelectSizesAndColor({ product, selectedSize, setSelectedSize, setSelectedColor, selectedColor }) {
  function sizeClickHandler(e) {
    setSelectedSize(e.target.value)
  }

  function sizeColorHandler(e) {
    setSelectedColor(e.target.value)
  }

  return <>
    <div className='flex-1'>
      <h4 className='text-[19px]'>Available Size</h4>
      <div className='flex gap-x-1 mt-2'>
        {product.sizes.map((psize, i) =>
          <button key={i}
            className={`${selectedSize == psize.size ? 'border-[#7E53D4] ' : 'border-transparent '}border rounded-lg py-1 px-3 text-[16px] font-bold bg-[#fff]${!psize.available ? ' opacity-40' : ''}`}
            disabled={!psize.available}
            title={psize.available ? psize.size : 'Not Available'}
            value={psize.size}
            onClick={sizeClickHandler}
            type='button'>
            {psize.size}
          </button>)}
      </div>
    </div>
    <div className='flex-1'>
      <h4 className='text-[19px]'>Available Color</h4>
      <div className='flex gap-x-4 mt-2 justify-start items-center'>
        <div className='flex justify-start items-center gap-x-2'>
          <button
            className={`before:content-[''] relative before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[16px] w-[16px] before:h-[16px] h-[16px] before:rounded-full before:bg-[#F1F0F5] p-3 border border-full rounded-full${selectedColor == 'w' ? ' border-[#7E53D4]' : ' border-transparent'}`}
            value={'w'}
            onClick={sizeColorHandler}
            type='button'>
          </button>
          <p className='text-[12px] font-medium' value="w">Off White</p>
        </div>

        <div className='flex justify-start items-center gap-x-1'>
          <button
            className={`before:content-[''] relative before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[16px] w-[16px] before:h-[16px] h-[16px] before:rounded-full before:bg-[#000] p-3 border rounded-full${selectedColor == 'b' ? ' border-[#7E53D4]' : ' border-transparent'}`}
            value={'b'}
            onClick={sizeColorHandler}
            type='button'>
          </button>
          <p className='text-[12px] font-medium' value="b">Black</p>
        </div>
      </div>
    </div></>
}