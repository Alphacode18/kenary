import React from 'react';
import { Dimensions } from 'react-native';
import { Layout, Text, Divider, List } from '@ui-kitten/components';
import AttractionElement from '../components/AttractionElement';

const { width } = Dimensions.get('screen');
const Attractions = ({ attractions }) => {
  return (
    <Layout>
      <Text style={{ fontSize: 25, fontWeight: '500', padding: 15 }}>
        Major Attractions
      </Text>
      <List
        style={{
          maxLength: 180,
          paddingLeft: 5,
          marginBottom: 20,
        }}
        data={attractions}
        renderItem={AttractionElement}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <Divider
        style={{ width: 0.9 * width, marginLeft: 15, marginBottom: 15 }}
      />
    </Layout>
  );
};

export default Attractions;
