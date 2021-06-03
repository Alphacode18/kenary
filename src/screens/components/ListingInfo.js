import React, { useState } from 'react';
import { StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Layout, Divider } from '@ui-kitten/components';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const { height, width } = Dimensions.get('screen');

const ListingInfo = ({ name, rating, description }) => {
  const [like, setLike] = useState(false);
  return (
    <Layout>
      <Layout style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.heading}>{name}</Text>
        {like ? (
          <FontAwesomeIcon
            name='heart'
            size={30}
            style={styles.likeButton}
            color={'red'}
            fill={true}
            onPress={() => {
              like ? setLike(false) : setLike(true);
            }}
          />
        ) : (
          <FontAwesomeIcon
            name='heart-o'
            size={30}
            style={styles.likeButton}
            color={'grey'}
            fill={true}
            onPress={() => {
              like ? setLike(false) : setLike(true);
            }}
          />
        )}
      </Layout>
      {/* <FontAwesome5Icon
        name='star'
        size={20}
        style={{ paddingLeft: 10, paddingTop: 10 }}
        color={'red'}
      >
        <Text style={{ fontSize: 20 }}> {rating}</Text>
      </FontAwesome5Icon> */}

      <Text style={styles.text}>
        {description.split('.')[0].concat('.')}
        <TouchableOpacity>
          <Text>Read More</Text>
        </TouchableOpacity>
      </Text>

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
    marginTop: hp('4%'),
    fontSize: hp('3%'),
    paddingLeft: wp('4%'),
    fontWeight: '500',
  },
  text: {
    fontSize: hp('1.75%'),
    marginTop: hp('2%'),
    paddingBottom: 20,
    paddingLeft: wp('4%'),
    fontWeight: '400',
    width: wp('95%'),
  },
  likeButton: {
    marginTop: hp('4%'),
    paddingRight: wp('5%'),
    backgroundColor: 'white',
  },
});

export default ListingInfo;
