import * as React from 'react';

export const HeartIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    aria-hidden='true'
    className='iconify iconify--twemoji'
    viewBox='0 0 36 36'
    {...props}
  >
    <path
      fill='#DD2E44'
      d='M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z'
    />
  </svg>
);

export const TopArrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='17'
      viewBox='0 0 31 17'
      fill='none'
    >
      <path
        d='M1 16L14.781 1.74378C15.1741 1.33714 15.8259 1.33714 16.219 1.74378L30 16'
        stroke='black'
        strokeWidth='2'
      />
    </svg>
  );
};
