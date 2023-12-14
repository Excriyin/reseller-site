import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuData } from './menuData';
import logo from '../assets/images/logo/logo.png';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
  });

  return (
    <header
      className={`bold header top-0 left-0 z-40 flex w-full items-center border-b-0 border-primary border-opacity-50 bg-transparent ${
        // Adjusted top value to 80px (or the height of your announcement banner)
        sticky
          ? '!fixed !z-[9999] !border-b-2 !bg-primary !bg-opacity-20 shadow-sticky backdrop-blur-sm !transition'
          : 'absolute'
      }`}
    >
      <div className='container'>
        <div className='relative flex items-center justify-between'>
          <div className='w-60 max-w-full px-4 xl:mr-12'>
            <Link
              to='/'
              className={`header-logo block w-full ${
                sticky ? 'py-5 lg:py-2' : 'py-5'
              } `}
            >
              <img src={logo} alt='logo' className='logo' />
            </Link>
          </div>

          <div className='flex items-center justify-between px-4'>
            <div>
              <button
                onClick={navbarToggleHandler}
                id='navbarToggler'
                aria-label='Mobile Menu'
                className='absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 xl:hidden'
              >
                <span
                  className={`w-[30px]transition-all relative my-1.5 block h-0.5 bg-white duration-300 ${
                    navbarOpen ? ' top-[7px] rotate-45' : ' '
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px]  bg-white transition-all duration-300 ${
                    navbarOpen ? 'opacity-0 ' : ' '
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px]  bg-white transition-all duration-300 ${
                    navbarOpen ? ' top-[-8px] -rotate-45' : ' '
                  }`}
                />
              </button>
              <nav
                id='navbarCollapse'
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-black py-4 px-6 duration-300 xl:bg-opacity-50   xl:visible xl:static xl:w-auto xl:border-none xl:!bg-transparent xl:p-0 xl:opacity-100 ${
                  navbarOpen
                    ? 'visibility top-full opacity-100'
                    : 'invisible top-[120%] opacity-0'
                }`}
              >
                <ul className='block xl:flex xl:space-x-12'>
                  {menuData.map((menuItem) => (
                    <li
                      key={
                        menuItem?.scrollId ? menuItem.scrollId : menuItem.path
                      }
                      className='menuItem group relative'
                    >
                      {menuItem.path ? (
                        <a
                          href={
                            menuItem.scrollId
                              ? menuItem.scrollId
                              : menuItem.path
                          }
                          className={`clashDisplayRegular flex py-2 text-base text-white transition duration-300 group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                          // onClick={() =>
                          //   handleSectionScroll(menuItem?.scrollId)
                          // }
                        >
                          {menuItem.title}
                        </a>
                      ) : (
                        <>
                          <a className='clashDisplayRegular flex cursor-pointer items-center justify-between py-2 text-base text-white group-hover:opacity-70 lg:mr-0 lg:inline-flex lg:py-6 lg:px-0'>
                            {menuItem.title}
                            <span className='pl-3'>
                              <svg width='15' height='14' viewBox='0 0 15 14'>
                                <path
                                  d='M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z'
                                  fill='currentColor'
                                />
                              </svg>
                            </span>
                          </a>
                        </>
                      )}
                    </li>
                  ))}
                  <Link
                    to='/'
                    className='flex xl:hidden z-50 justify-center items-center py-2 w-32 text-sm font-semibold text-black rounded-xl duration-300 ease-in-out md:text-lg md:py-3 bg-primary hover:bg-primary/80 my-2'
                  >
                    Contact Us
                  </Link>
                </ul>
              </nav>
            </div>
          </div>

          <Link
            to='/'
            className='hidden xl:flex z-50 justify-center items-center py-2 w-32 text-sm font-semibold text-black rounded-xl duration-300 ease-in-out md:text-lg md:py-3 bg-primary hover:bg-primary/80'
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
