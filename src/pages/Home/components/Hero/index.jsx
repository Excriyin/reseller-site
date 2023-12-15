import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImg from '../../../../assets/images/hero/herosection.png';
import line from '../../../../assets/images/head-line.png';

const Hero = () => {
  return (
    <>
      <section className='overflow-hidden relative z-20 h-full'>
        <div className='container z-20 h-full'>
          <div className='flex flex-col justify-start md:mx-10 lg:flex-row'>
            <div className='px-4 xs:w-full lg:w-1/2 pt-[120px] md:pt-[150px] xl:pt-[230px] '>
              <div
                className='wow fadeInUp relative max-w-[800px]'
                data-wow-delay='.2s'
              >
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: 'spring',
                      delay: 0.25,
                      duration: 1,
                      ease: 'easeOut',
                    },
                  }}
                >
                  <div className='absolute top-[-20px] w-full z-[-1]'>
                    <img
                      className='pointer-events-none select-none'
                      src={line}
                    ></img>
                  </div>
                  <h1 className='mb-5 text-3xl font-bold leading-none text-center text-white lg:text-5xl textplaceholder:-black leader-tight md:leading-none sm:text-4xl sm:leading-tight md:text-6xl md:text-start Power'>
                    <span className='text-[#6EE755]'>Spotify</span> Premium
                    <br></br>
                  </h1>
                  <h1 className='mb-5 text-3xl font-bold leading-none text-center text-white lg:text-5xl textplaceholder:-black leader-tight md:leading-none sm:text-4xl sm:leading-tight md:text-6xl md:text-start power'>
                    made Cheap...
                  </h1>
                </motion.div>
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring',
                      delay: 0.25,
                      duration: 1,
                      ease: 'easeOut',
                    },
                  }}
                >
                  <p className='mb-8 text-base font-medium !leading-relaxed text-white sm:text-md md:text-lg text-center md:text-start break-words  inter w-full lg:w-11/12'>
                    We believe you shouldn't have to pay excessive monthly fees
                    for a simple service, no hassle fine tuned automated system
                    to make your life simple.
                  </p>

                  <div className='flex justify-center md:justify-start'>
                    <Link
                      to='/pricing'
                      className='flex z-50 justify-center items-center py-2 mr-4 w-56 text-sm font-semibold text-black rounded-xl duration-300 ease-in-out md:text-lg md:py-3 bg-primary hover:bg-primary/80'
                    >
                      Pricing
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 200 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: 'spring',
                  delay: 0.25,
                  duration: 1,
                  ease: 'easeOut',
                },
              }}
              className='px-4 pt-[85px] w-full lg:w-1/2 hidden lg:block'
            >
              <img
                className='pointer-events-none select-none'
                src={heroImg}
              ></img>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
