import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png';

export default function Footer() {
  return (
    <footer
      className='wow fadeInUp z-10 flex justify-center bg-opacity-5 pt-12 lg:pt-14'
      data-wow-delay='.1s'
    >
      <div className='w-10/12'>
        <div className='flex flex-row justify-between'>
          <div className='w-full'>
            <div className='flex w-full justify-center border-b-[1px] border-primary md:justify-start'>
              <Link to='/' className='mb-5 inline-block'>
                <img src={logo} alt='logo' className='logo' />
              </Link>
            </div>
            <div className='mt-4 mb-5 flex w-full'>
              <ul className='flex w-full flex-col items-center justify-between md:flex-row lg:flex lg:space-x-12'>
                <p className='clashDisplayRegular flex text-xs font-medium leading-relaxed text-white md:text-base'>
                  © 2023 SpotiUprader. Not affiliated with Spotify.
                </p>
                <div className='hidden w-3/12 justify-between lg:flex align-center'>
                  <li>
                    <a
                      href='/upgrade'
                      className='clashDisplayRegular whitespace-pre mr-2 text-base font-medium text-white hover:text-primary'
                    >
                      {' '}
                      Upgrade{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      href='/renew'
                      className='clashDisplayRegular whitespace-pre mr-2 text-base font-medium text-white hover:text-primary'
                    >
                      {' '}
                      Renew{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      href='/pricing'
                      className='clashDisplayRegular whitespace-pre mr-2 text-base font-medium text-white hover:text-primary'
                    >
                      {' '}
                      Pricing{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      href='/faq'
                      className='clashDisplayRegular whitespace-pre mr-2 text-base font-medium text-white hover:text-primary'
                    >
                      {' '}
                      FAQs{' '}
                    </a>
                  </li>
                </div>            
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
