import React, { useState } from 'react';
import { ViewPager } from '@ui-kitten/components';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('screen');
import RecommendationCard from '../components/RecommendationCard';

export default RecommendationPager = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ViewPager
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      {data.map((recommendation, index) => {
        return (
          <RecommendationCard key={index} recommendation={recommendation} />
        );
      })}
    </ViewPager>
  );
};
