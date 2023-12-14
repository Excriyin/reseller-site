import React from 'react';

import supportIcon from '../../../../assets/images/features/support_icon.png';
import cheapIcon from '../../../../assets/images/features/cheap_icon.png';
import instantIcon from '../../../../assets/images/features/instant_icon.png';

const featuresData = [
  {
    id: 1,
    icon: (
      <img src={supportIcon}></img>
    ),
    title: "24/7 Support",
    paragraph:
      "We have an experience staff team ready to help you whenever you need help within our service.",
  },
  {
    id: 2,
    icon: (
      <img src={cheapIcon}></img>
    ),
    title: "Affordable Prices",
    paragraph:
      "We have one of the best pricing on the whole market beating some of our competitors!",
  },
  {
    id: 3,
    icon: (
      <img src={instantIcon}></img>
    ),
    title: "Instant Delivery",
    paragraph:
      "We deliver all your purchased keys upon payment confirmation, zero hassle for you and no need of contacting us.",
  },
];
export default featuresData;
