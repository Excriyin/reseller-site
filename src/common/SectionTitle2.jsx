import React from 'react';
import line from '../assets/images/head-line.png'

const SectionTitle2 = ({
  title,
  titleColor,
  paragraph,
  width = '470px',
  center,
  mb = '100px',
  lineImgSrc
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full items-center px-4 text-center md:flex-row md:justify-start md:text-center`}
        data-wow-delay='.1s'
        style={{ marginBottom: mb }}
      >
        <h2 className='power mb-4 text-3xl relative font-bold leading-tight text-white sm:text-4xl md:text-[45px] clashDisplayRegular'>
        {lineImgSrc && (
            <div className='absolute top-[-140px] w-full z-[-1]'>
              <img
                className='pointer-events-none select-none'
                src={line}
              ></img>
            </div>
          )}
          {typeof title === 'string' ? title : title?.()} <span className="text-[#6EE755]">{titleColor}</span>
        </h2>
        <p className='poppinsRegular ml-4 self-center text-sm leading-tight text-white md:text-md'>
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle2;
