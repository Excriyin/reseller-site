import React from 'react';

import SectionTitle2 from '../../../../common/SectionTitle2';
import numOne from '../../../../assets/images/tutorial/01.png';
import numTwo from '../../../../assets/images/tutorial/02.png';
import numThree from '../../../../assets/images/tutorial/03.png';

const Tutorial = () => {
  return (
    <>
      <section id='how-works' className='py-16 md:py-20 lg:py-28'>
        <div className='container'>
          <div className='flex flex-col place-items-center px-10 w-full'>
            <SectionTitle2
              title='How it'
              titleColor='works?'
              paragraph='Here’s way how we work in best way...'
              mb='50px'
            />
            <div className='flex flex-col mb-20 w-full lg:flex-row gap-4'>
              <div className='flex-shrink-0 mb-4 w-3/12 md:w-2/12 md:mb-0'>
                <img src={numOne} />
              </div>
              <div className='flex ml-0 text-white gap-4 flex-wrap xl:flex-nowrap'>
                <div className='flex justify-start'>
                  <h2 className='mb-4 text-5xl md:text-6xl power'>
                    AUTOMATED UPGRADING
                  </h2>
                </div>
                <p className='mb-8 w-full text-sm font-normal leading-normal text-justify md:w-11/12 inter lg:leading-relaxed '>
                  The customer provides the purchased key, Spotify account
                  login, and Spotify account password. Our system then logs into
                  the customer's account and handles all the necessary tasks on
                  behalf of the customer.
                </p>
              </div>
            </div>
            <div className='flex flex-col-reverse mb-20 w-full md:flex-row gap-4'>
              <div className='flex flex-row-reverse ml-0 text-white gap-4 flex-wrap xl:flex-nowrap'>
                <h2 className='mb-4 text-5xl md:text-6xl power md:text-right'>
                  AUTOMATED RENEWING
                </h2>
                <p className='mb-8 w-full text-sm font-normal leading-normal text-justify md:w-11/12 inter lg:leading-relaxed'>
                  Removed from the family plan? No worries! Our system features
                  an automated renewal system that detects account removal,
                  verifies if it's the same upgraded account, checks for key
                  redemption, and determines eligibility for a replacement. In
                  such cases, it performs the following actions:
                </p>
                <div className='flex flex-col-reverse md:flex-row md:justify-between'>
                  <div className='flex-shrink-0'></div>
                </div>
              </div>
              <div className='flex-shrink-0 mb-4 w-4/12 md:w-3/12 md:mb-0 md:full'>
                <img src={numTwo} />
              </div>
            </div>
            <div className='flex flex-col w-full md:flex-row gap-4'>
              <div className='flex-shrink-0 mb-4 w-4/12 md:w-3/12 md:mb-0 md:full'>
                <img src={numThree} />
              </div>
              <div className='flex ml-0 text-white gap-4 flex-wrap xl:flex-nowrap'>
                <h2 className='mb-4 text-5xl md:text-6xl power'>
                  AUTOMATED ACCOUNT{' '}
                </h2>
                <p className='mb-8 w-11/12 text-sm font-normal leading-normal text-justify inter lg:leading-relaxed'>
                  Want to register an account in France but don't want to go
                  through all the hassle of setting up a VPN? Our system can
                  create a fresh Spotify account in any country within a few
                  seconds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tutorial;
