import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Layout, Text, Divider } from '@ui-kitten/components';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const { height, width } = Dimensions.get('screen');

const ListingInfo = ({ name, rating, description }) => {
  return (
    <Layout>
      <Text style={styles.heading}>{name}</Text>
      <FontAwesome5Icon
        name='star'
        size={20}
        style={{ paddingLeft: 10, paddingTop: 10 }}
        color={'red'}
      >
        <Text style={{ fontSize: 20 }}> {rating}</Text>
      </FontAwesome5Icon>
      <Text style={styles.text}>{description}</Text>
      <Divider
        style={{ width: 0.9 * width, marginLeft: 15, marginBottom: 15 }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingLeft: 10,
  },
  heading: {
    fontSize: 40,
    paddingTop: 15,
    paddingLeft: 10,
    fontWeight: '500',
  },
  text: {
    fontSize: 15,
    paddingTop: 15,
    paddingLeft: 10,
    paddingBottom: 20,
    fontWeight: '400',
  },
});

export default ListingInfo;
