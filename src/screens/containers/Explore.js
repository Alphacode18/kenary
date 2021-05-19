import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import Emoji from 'react-native-emoji';

export default Explore = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Emoji name='building_construction' style={{ fontSize: 150 }} />
      <Text category='h1'>Coming Soon</Text>
      <Text style={{ width: '85%', fontSize: 20, margin: 10 }}>
        Explore is a new discovery engine that assists you in finding a
        selection of great experiences for just any occasion.
      </Text>
    </Layout>
  );
};
