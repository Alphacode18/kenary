import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

export default Home = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text category='h1'>HOME</Text>
      </Layout>
    </TouchableWithoutFeedback>
  );
};
