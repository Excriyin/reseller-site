import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SectionTitle2 from '../../common/SectionTitle2';
import Loader from '../../common/Loader';

import OfferList from './OfferList';
import PricingBox from './PricingBox';

// get products from sellix
const getProducts = async () => {
  const response = await fetch('https://dev.sellix.io/v1/products ', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer RVZi7SJsk3JnB1evQKXHyV5hutXo1NEvT7QrAbTU9XYSuUbt7l1kQRcqjhwUOHLl',
    },
  });

  const result = response.json();

  return result;
};

const Pricing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((result) => {
        setProducts(result?.data?.products ?? []);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section id='pricing' className='relative z-10 py-28'>
      <div className='container'>
        <SectionTitle2
          title='Cheapest'
          titleColor=' Pricing'
          paragraph='No more thinking. Check out best plan option for you.'
          center
          width='665px'
          lineImgSrc
        />
        <div className='flex justify-center w-full'>
          <div className='flex w-full justify-center'>
            {loading ? (
              <Loader />
            ) : (
              <div className='grid w-10/12 grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-3'>
                <PricingBox
                  packageName='1x Upgrade'
                  // price='2.45'
                  subtitle='One upgrade key'
                  index={0}
                  plan={1}
                  sellixProduct={products?.[0]} // pass first sellix product
                >
                  <OfferList text='Lifetime Warranty' status='active' />
                  <OfferList text='Automated Replacements' status='active' />
                  <OfferList text='Premium Support' status='active' />
                  <OfferList text='Automated Upgrading' status='active' />
                </PricingBox>

                <PricingBox
                  packageName='3x Upgrades'
                  // price='6.65'
                  index={1}
                  plan={3}
                  sellixProduct={products?.[1]} // pass second sellix product
                >
                  <OfferList text='Lifetime Warranty' status='active' />
                  <OfferList text='Automated Replacements' status='active' />
                  <OfferList text='Premium Support' status='active' />
                  <OfferList text='Automated Upgrading' status='active' />
                </PricingBox>

                <PricingBox
                  packageName='6x Upgrades'
                  // price='12.25'
                  subtitle='Six upgrade keys'
                  index={2}
                  plan={6}
                  sellixProduct={products?.[2]} // pass third sellix product
                >
                  <OfferList text='Lifetime Warranty' status='active' />
                  <OfferList text='Automated Replacements' status='active' />
                  <OfferList text='Premium Support' status='active' />
                  <OfferList text='Automated Upgrading' status='active' />
                </PricingBox>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
