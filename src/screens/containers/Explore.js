import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import Emoji from 'react-native-emoji';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default Explore = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Emoji name='building_construction' style={{ fontSize: hp('15') }} />
      <Text category='h1'>Coming Soon</Text>
      <Text style={{ width: '85%', fontSize: hp('2.25%'), margin: 10 }}>
        Explore is a new discovery engine that assists you in finding a
        selection of great experiences for just any occasion.
      </Text>
    </Layout>
  );
};
