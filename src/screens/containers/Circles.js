import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import Emoji from 'react-native-emoji';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default Circles = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Emoji name='building_construction' style={{ fontSize: hp('15') }} />
    <Text category='h1'>Coming Soon</Text>
    <Text style={{ width: '85%', fontSize: hp('2.25'), margin: 10 }}>
      Circles are the new way to quickly and dynamically disover groups with
      shared interests to go out with.
    </Text>
  </Layout>
);
