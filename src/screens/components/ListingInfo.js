import React, { useState } from 'react';
import { StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Layout, Divider } from '@ui-kitten/components';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const { height, width } = Dimensions.get('screen');

var date = new Date();
var weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';

const ListingInfo = ({ name, rating, description, timings }) => {
  const [like, setLike] = useState(false);
  const [readMore, setReadMore] = useState(false);
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
      {readMore === false ? (
        <Text style={styles.text}>
          {description.split('.')[0].concat('.')}
          <TouchableOpacity
            onPress={() => {
              setReadMore(true);
            }}
          >
            <Text style={{ color: '#0000FF', marginLeft: 20 }}>
              {'Read More'}
            </Text>
          </TouchableOpacity>
        </Text>
      ) : (
        <Text style={styles.text}>
          {description}
          <TouchableOpacity
            onPress={() => {
              setReadMore(false);
            }}
          >
            <Text style={{ color: '#0000FF', paddingLeft: 20 }}>
              {'Read Less'}
            </Text>
          </TouchableOpacity>
        </Text>
      )}
      <Layout
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: hp('1%'),
          paddingBottom: 20,
          paddingLeft: wp('4%'),
          width: wp('95%'),
        }}
      >
        <Layout
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}
        >
          <MaterialIcon
            name='emoticon-excited-outline'
            size={20}
            color={'grey'}
          />
          <Text style={{ fontSize: 15, color: 'grey', paddingLeft: 16 }}>
            Excellent
          </Text>
        </Layout>
        <TouchableOpacity>
          <Text>
            {[1, 2, 3].map(() => {
              return <Text style={{ paddingLeft: 20, color: 'black' }}>$</Text>;
            })}
            <Text style={{ paddingLeft: 20, color: 'grey' }}>$</Text>
            <Text style={{ paddingLeft: 20, color: 'grey' }}>$</Text>
          </Text>
        </TouchableOpacity>
      </Layout>
      <Layout
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 20,
          paddingLeft: wp('4%'),
          width: wp('95%'),
        }}
      >
        <Layout
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}
        >
          <EvilIcon name='clock' size={25} color={'grey'} />
          <Text style={{ fontSize: 15, color: 'grey', paddingLeft: 10 }}>
            {timings[weekday[date.getDay()].toLowerCase()]}
          </Text>
        </Layout>
        <TouchableOpacity>
          <Text style={{ color: '#0000FF', paddingLeft: 20 }}>More Info</Text>
        </TouchableOpacity>
      </Layout>
      <Layout
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: hp('1%'),
          paddingBottom: 20,
          paddingLeft: wp('4%'),
          width: wp('95%'),
        }}
      >
        <Layout
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}
        >
          <MaterialIcon
            name='map-marker-radius-outline'
            size={25}
            color={'grey'}
          />
          <Text style={{ fontSize: 15, color: 'grey', paddingLeft: 16 }}>
            500 m
          </Text>
        </Layout>
        <TouchableOpacity>
          <Text style={{ color: '#0000FF', paddingLeft: 20 }}>
            Show Location
          </Text>
        </TouchableOpacity>
      </Layout>
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
    color: 'grey',
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
