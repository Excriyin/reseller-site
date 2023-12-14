import React from 'react';

import SingleFeature from './SingleFeature';
import featuresData from './featuresData';
import SectionTitle2 from '../../../../common/SectionTitle2';

const Features = () => {
  return (
    <>
      <section id='why-us' className='py-20 w-full'>
        <div className='container flex flex-col items-center'>
          <div className='w-full'>
            <SectionTitle2
              title='WHY'
              titleColor='US?'
              paragraph="You'll enjoy the best experience by choosing us instead of competitors."
            />

            <div className='flex align-center justify-center flex-wrap gap-5'>
              {featuresData.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
