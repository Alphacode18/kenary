import React, { useState } from 'react';
import { ViewPager } from '@ui-kitten/components';
import HeroCard from './HeroCard';

export default Hero = ({ data, toggleVerticalScroll }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  data = data.filter((datum) => {
    return datum['top-pick'] === true;
  });
  return (
    <ViewPager
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
      onTouchStart={toggleVerticalScroll}
      onTouchEnd={toggleVerticalScroll}
    >
      {data.map((data, index) => {
        return <HeroCard key={index} data={data} />;
      })}
    </ViewPager>
  );
};
