import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, ListItem } from '@ui-kitten/components';
import { Rating } from 'react-native-ratings';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default Review = ({ item }) => {
  const { reviewer, review, rating, timestamp } = item;
  return (
    <ListItem
      style={{
        backgroundColor: 'white',
      }}
    >
      <Layout style={styles.container}>
        <Text style={{ marginTop: 20, paddingLeft: 20 }}>{reviewer}</Text>
        <Layout
          style={{
            backgroundColor: '#F6F6F6',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Rating
            imageSize={12}
            tintColor='#F6F6F6'
            readonly={true}
            ratingCount={rating}
            startingValue={rating}
            style={{
              paddingLeft: 20,
              paddingTop: 10,
              alignItems: 'flex-start',
            }}
          />
          <Text
            style={{
              paddingRight: 20,
              fontSize: 10,
              color: 'grey',
            }}
          >{`\t${timestamp}`}</Text>
        </Layout>
        <Text style={{ padding: 20, fontSize: 15 }}>{review}</Text>
      </Layout>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('75%'),
    height: wp('40%'),
    borderWidth: 0.5,
    borderColor: '#F4F4F4',
    borderRadius: 10,
    backgroundColor: '#F4F4F4',
  },
  textContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingLeft: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  name: {
    fontSize: hp('1.25%'),
    fontWeight: 'bold',
    color: '#000',
    marginTop: hp('1.5%'),
  },
  keyword: { fontSize: 10, color: '#000' },
  text: { fontSize: hp('1.25%'), color: '#000', flexBasis: '50%' },
  rating: {
    fontSize: hp('1.25%'),
    color: '#000',
    marginLeft: wp('10%'),
  },
  divider: { fontSize: 10, color: '#e3e3e3' },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('1.5%'),
  },
});
