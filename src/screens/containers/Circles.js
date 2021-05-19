import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import Emoji from 'react-native-emoji';

export default Circles = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Emoji name='building_construction' style={{ fontSize: 150 }} />
    <Text category='h1'>Coming Soon</Text>
    <Text style={{ width: '85%', fontSize: 20, margin: 10 }}>
      Circles are the new way to quickly and dynamically disover groups with
      shared interests to go out with.
    </Text>
  </Layout>
);
