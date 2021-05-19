import React from 'react';
import { Dimensions } from 'react-native';
import { Layout, Text, Divider, List } from '@ui-kitten/components';
import AttractionElement from '../components/AttractionElement';

const { width } = Dimensions.get('screen');

const dummyURI = [
  {
    name: 'Rides',
    uri:
      'https://happyhollow.org/wp-content/uploads/2019/03/20181118_145003-e1555114014311.jpg',
  },
  {
    name: 'Zoo',
    uri:
      'https://happyhollow.org/wp-content/uploads/2019/04/56958805_10161604780090176_4584502173978591232_n-e1555108880109.jpg',
  },
  {
    name: 'Theatre',
    uri:
      'https://happyhollow.org/wp-content/uploads/2019/04/puppetTheatre-8527-e1555112242198.jpg',
  },
];
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
