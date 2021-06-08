import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import viewMap from 'react-native-open-maps';
import { Layout, Divider } from '@ui-kitten/components';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

var date = new Date();
var weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const ListingInfo = ({ name, rating, description, timings }) => {
  const [like, setLike] = useState(false);
  return (
    <Layout>
      <Layout style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.heading}>{name}</Text>
        {like ? (
          <MaterialIcon
            name='heart'
            size={35}
            style={styles.likeButton}
            color={'red'}
            fill={true}
            onPress={() => {
              like ? setLike(false) : setLike(true);
            }}
          />
        ) : (
          <MaterialIcon
            name='heart'
            size={35}
            style={styles.likeButton}
            color={'grey'}
            fill={true}
            onPress={() => {
              like ? setLike(false) : setLike(true);
            }}
          />
        )}
      </Layout>
      <Layout
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 20,
          width: wp('95%'),
          marginTop: wp('4%'),
        }}
      >
        <Text style={styles.text}>{description.split('.')[0].concat('.')}</Text>

        <Text>
          {[1, 2, 3].map(() => {
            return <Text style={styles.dollar}>$</Text>;
          })}
          <Text style={styles.placeholderDollar}>$</Text>
          <Text style={styles.placeholderDollar}>$</Text>
        </Text>
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
            name='emoticon-excited-outline'
            size={25}
            color={'grey'}
          />
          <Text style={{ fontSize: 15, color: 'grey', paddingLeft: 10 }}>
            Excellent
          </Text>
        </Layout>
        <TouchableOpacity>
          <Text style={{ color: '#0000FF', paddingLeft: 20 }}>Rate</Text>
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
          <MaterialIcon
            name='clock-time-four-outline'
            size={25}
            color={'grey'}
          />
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
          <Text style={{ fontSize: 15, color: 'grey', paddingLeft: 10 }}>
            500 m
          </Text>
        </Layout>
        <TouchableOpacity
          onPress={() => {
            viewMap({
              query: `${name}, West Lafayette`,
              provider: 'google',
              travelType: 'drive',
              navigate_mode: 'preview',
            });
          }}
        >
          <Text style={{ color: '#0000FF', paddingLeft: 20 }}>View Map</Text>
        </TouchableOpacity>
      </Layout>
      <Divider style={{ width: wp('100%'), marginBottom: 15 }} />
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
    color: 'grey',
    paddingBottom: 5,
    paddingLeft: wp('4%'),
    fontWeight: '400',
    width: wp('70%'),
  },
  likeButton: {
    marginTop: hp('4%'),
    paddingRight: wp('5%'),
    backgroundColor: 'white',
  },
  dollar: {
    fontSize: hp('2.15%'),
    color: 'black',
    paddingBottom: 5,
    paddingLeft: wp('4%'),
    fontWeight: '400',
    width: wp('70%'),
  },
  placeholderDollar: {
    fontSize: hp('2.15%'),
    color: 'grey',
    paddingBottom: 5,
    paddingLeft: wp('4%'),
    fontWeight: '400',
    width: wp('70%'),
  },
});

export default ListingInfo;
