import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import spotifyPremium from '../../assets/images/purchase/spotify-premium.png';
import line from '../../assets/images/head-line.png';

const Purchase = () => {
  return (
    <>
      <section id='features' className='-z-20'>
        <div className='flex items-center w-full h-full'>
          <div className='container flex items-center w-full h-full'>
            <div className='flex flex-col justify-start items-center w-full lg:flex-row gap-8'>
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
                className='justify-center items-center max-w-full xs:w-full h-[400px] hidden lg:flex'
              >
                <img src={spotifyPremium} />
              </motion.div>
              <div className='px-4 xs:w-full lg:w-1/2'>
                <div
                  className='wow fadeInUp relative  max-w-[800px]'
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
                    <div className='absolute top-[-20px] w-full'>
                      <img
                        className='pointer-events-none select-none'
                        src={line}
                      ></img>
                    </div>
                    <h1 className='mb-5 text-3xl font-bold leading-none text-center text-white lg:text-5xl textplaceholder:-black leader-tight md:leading-none sm:text-4xl sm:leading-tight md:text-6xl md:text-start Power'>
                      Automated<br></br>
                    </h1>
                    <h1 className='mb-5 text-3xl font-bold leading-none text-center text-[#6EE755] lg:text-5xl textplaceholder:-black leader-tight md:leading-none sm:text-4xl sm:leading-tight md:text-6xl md:text-start power'>
                      Spotify Account
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
                    <p className='mb-8 text-xs font-medium !leading-relaxed text-white text-center md:text-start break-words inter w-full lg:w-9/12'>
                      You'll enjoy the best experience by choosing us instead of
                      competitors.
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Purchase;
