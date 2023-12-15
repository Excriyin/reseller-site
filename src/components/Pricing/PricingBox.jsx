import React from 'react';
import { useEffect } from 'react';

const PricingBox = (props) => {
  const { packageName, children, plan, sellixProduct } = props;

  return (
    <>
      <div
        className={`w-full ${
          plan === 3 ? 'border-[1px] border-[#6EE755] rounded-3xl' : ''
        }`}
      >
        <div
          className='priceCard wow fadeInUp relative z-10 rounded-3xl px-8 py-6 shadow-signUp'
          data-wow-delay='.1s'
        >
          <div className='mx-4 my-4 text-center'>
            <h3 className='price mb-8 text-3xl font-bold text-white'>
              <p className='clashDisplayRegular m-auto mb-6 w-fit bg-[#ffffff26] px-5 py-2 text-lg !font-light text-white'>
                {packageName}
              </p>
              <span className='clashDisplayRegular text-5xl'>
                ${sellixProduct?.price}
              </span>
            </h3>
            <div className='mb-6'>{children}</div>
            <button
              data-sellix-product={sellixProduct?.uniqid}
              type='submit'
              className='clashDisplayRegular flex w-full items-center justify-center rounded-xl border-[1px] border-primary py-3 text-base font-semibold text-black duration-300 ease-in-out bg-primary hover:bg-primary/80'
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingBox;
