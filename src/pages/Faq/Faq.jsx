import React from 'react';
import { useState } from 'react';
import SectionTitle2 from '../../common/SectionTitle2';
import Purchase from '../../components/Purchase';

const leftData = [
  {
    id: 1,
    title: 'Why is Webflow the best nocode tool?',
    description:
      'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
  },
  {
    id: 3,
    title: 'When did Webflow was founded?',
    description:
      'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
  },
  {
    id: 5,
    title: 'Is NoCode the future of the web?',
    description:
      'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
  },
];

const rightData = [
  {
    id: 2,
    title: 'How to launch a Webflow website?',
    description:
      'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
  },
  {
    id: 4,
    title: 'Who founded BRIX Templates?',
    description:
      'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
  },
  {
    id: 6,
    title: 'Who are the Webflow founders?',
    description:
      'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
  },
];

const AccordionIcon = ({ isOpened }) => {
  if (isOpened) {
    return (
      <svg
        width='42'
        height='42'
        viewBox='0 0 42 42'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='0.015625'
          y='0.603027'
          width='41.5'
          height='40.8578'
          rx='8'
          fill='#6EE755'
        />
        <path
          d='M11.7656 21.0319C11.7656 20.4882 12.2064 20.0474 12.7501 20.0474H28.7811C29.3248 20.0474 29.7656 20.4882 29.7656 21.0319C29.7656 21.5756 29.3248 22.0164 28.7811 22.0164H12.7501C12.2064 22.0164 11.7656 21.5756 11.7656 21.0319Z'
          fill='black'
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='43'
      height='42'
      viewBox='0 0 43 42'
      fill='none'
    >
      <rect
        x='1.30371'
        y='1.21082'
        width='40.5'
        height='39.8578'
        rx='7.5'
        stroke='#6EE755'
      />
      <path
        d='M21.5537 12.1289C20.9186 12.1289 20.4037 12.6438 20.4037 13.2789V29.0004C20.4037 29.6355 20.9186 30.1504 21.5537 30.1504C22.1888 30.1504 22.7037 29.6355 22.7037 29.0004V13.2789C22.7037 12.6438 22.1888 12.1289 21.5537 12.1289Z'
        fill='#6EE755'
        stroke='#6EE755'
        strokeWidth='0.3'
        strokeLinecap='round'
      />
      <path
        d='M13.5382 20.0052C12.9117 20.0052 12.4037 20.5131 12.4037 21.1397C12.4037 21.7663 12.9117 22.2742 13.5382 22.2742H29.5692C30.1958 22.2742 30.7037 21.7663 30.7037 21.1397C30.7037 20.5131 30.1958 20.0052 29.5692 20.0052H13.5382Z'
        fill='#6EE755'
        stroke='#6EE755'
        strokeWidth='0.3'
        strokeLinecap='round'
      />
    </svg>
  );
};

const Faq = () => {
  const [accordionIds, setAccordionIds] = useState([]);

  const handleAccordionClick = (id) => {
    if (accordionIds.includes(id)) {
      setAccordionIds(accordionIds.filter((item) => item !== id));
    } else {
      setAccordionIds([...accordionIds, id]);
    }
  };

  return (
    <div className='pt-[100px]'>
      <section id='pricing' className='relative z-10 w-full text-white py-2'>
        <div className='container pt-10 w-full'>
          <SectionTitle2
            title={() => {
              return (
                <>
                  Frequently <span className='text-[#6EE755]'>Asked</span>{' '}
                  Questions
                </>
              );
            }}
            paragraph='No more thinking, Check out best plan option for you.'
            center
            width='805px'
            mb='20px'
            lineImgSrc
          />

          {/* <div className='mx-10 flex flex-wrap gap-8'> */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16'>
            <div className='flex flex-1 flex-col gap-6'>
              {leftData.map((item) => {
                return (
                  <details
                    key={item.id}
                    className={`group p-8 border-2 ${
                      accordionIds.includes(item.id)
                        ? 'border-[#6EE755]'
                        : 'border-transparent'
                    } faqCard`}
                  >
                    <summary
                      className='flex justify-between items-center font-medium cursor-pointer list-none'
                      onClick={() => handleAccordionClick(item.id)}
                    >
                      <span>{item.title}</span>
                      <span className='transition group-open:rotate-180'>
                        <AccordionIcon
                          isOpened={accordionIds.includes(item.id)}
                        />
                      </span>
                    </summary>
                    <p className='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                      {item.description}
                      dolor
                    </p>
                  </details>
                );
              })}
            </div>
            <div className='flex flex-1 flex-col gap-6'>
              {rightData.map((item) => {
                return (
                  <details
                    key={item.id}
                    className={`group p-8 border-2  ${
                      accordionIds.includes(item.id)
                        ? 'border-[#6EE755]'
                        : 'border-transparent'
                    } faqCard`}
                  >
                    <summary
                      className='flex justify-between items-center font-medium cursor-pointer list-none'
                      onClick={() => handleAccordionClick(item.id)}
                    >
                      <span>{item.title}</span>
                      <span className='transition group-open:rotate-180'>
                        <AccordionIcon
                          isOpened={accordionIds.includes(item.id)}
                        />
                      </span>
                    </summary>
                    <p className='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                      {item.description}
                      dolor
                    </p>
                  </details>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div className='mt-20'>
        <Purchase />
      </div>
    </div>
  );
};

export default Faq;
