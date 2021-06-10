import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Layout, Divider, Button } from '@ui-kitten/components';
import Reserve from './components/Book';
import Attractions from './components/Attractions';
import Tags from './components/Tags';
import viewMap from 'react-native-open-maps';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';

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

export default Listing = ({ route }) => {
  const [like, setLike] = useState(false);
  const listingData = route.params.data;
  const navigation = route.params.navigation;
  const {
    name,
    description,
    rating,
    keywords,
    booking,
    coordinates,
    attractions,
    timings,
    image,
  } = listingData;

  return (
    <Layout style={styles.container}>
      <ImageHeaderScrollView
        maxHeight={335}
        minHeight={100}
        fadeOutForeground={true}
        headerImage={{ uri: image }}
        renderFixedForeground={() => {
          return (
            <SafeAreaView>
              <Layout style={{ height: 100, backgroundColor: 'transparent' }}>
                <Layout
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    marginLeft: wp('6%'),
                    marginTop: wp('1%'),
                  }}
                >
                  <AntIcon
                    name='arrowleft'
                    size={25}
                    color={'black'}
                    style={{ marginTop: wp('.5'), marginLeft: wp('.5') }}
                    onPress={() => {
                      navigation.goBack();
                    }}
                  />
                </Layout>
              </Layout>
            </SafeAreaView>
          );
        }}
      >
        <Layout
          style={{
            height: 1000,
          }}
        >
          <TriggeringView>
            <Layout
              style={{
                width: '100%',
                height: '100%',
                bottom: '5%',
                borderTopLeftRadius: 18,
                borderTopRightRadius: 18,
              }}
            >
              <Layout
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  top: '5%',
                }}
              >
                <Text style={styles.heading}>{name}</Text>
              </Layout>
              <Layout
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 20,
                  width: wp('95%'),
                  marginTop: wp('8%'),
                  paddingRight: wp('6%'),
                }}
              >
                <Text style={styles.text}>
                  {description.split('.')[0].concat('.')}
                </Text>
                {booking && <Reserve booking={booking} />}
              </Layout>
              <Layout
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: hp('1%'),
                  paddingBottom: 20,
                  paddingLeft: wp('6%'),
                  width: wp('95%'),
                  paddingRight: wp('6%'),
                }}
              >
                <Layout
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <MaterialIcon
                    name='emoticon-excited-outline'
                    size={25}
                    color={'grey'}
                  />
                  <Text
                    style={{ fontSize: 15, color: 'grey', paddingLeft: 10 }}
                  >
                    Excellent
                  </Text>
                </Layout>
                <TouchableOpacity>
                  <Text style={{ color: '#0000FF' }}>Rate</Text>
                </TouchableOpacity>
              </Layout>
              <Layout
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 20,
                  paddingLeft: wp('6%'),
                  width: wp('95%'),
                  paddingRight: wp('6%'),
                }}
              >
                <Layout
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <MaterialIcon
                    name='clock-time-four-outline'
                    size={25}
                    color={'grey'}
                  />
                  <Text
                    style={{ fontSize: 15, color: 'grey', paddingLeft: 10 }}
                  >
                    {timings[weekday[date.getDay()].toLowerCase()]}
                  </Text>
                </Layout>
                <TouchableOpacity>
                  <Text style={{ color: '#0000FF', paddingLeft: 20 }}>
                    More Info
                  </Text>
                </TouchableOpacity>
              </Layout>
              <Layout
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: hp('1%'),
                  paddingBottom: 20,
                  paddingLeft: wp('6%'),
                  width: wp('95%'),
                  paddingRight: wp('6%'),
                }}
              >
                <Layout
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <MaterialIcon
                    name='map-marker-radius-outline'
                    size={25}
                    color={'grey'}
                  />
                  <Text
                    style={{ fontSize: 15, color: 'grey', paddingLeft: 10 }}
                  >
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
                  <Text style={{ color: '#0000FF', paddingLeft: 20 }}>
                    View Map
                  </Text>
                </TouchableOpacity>
              </Layout>
              <Divider
                style={{
                  width: wp('90%'),
                  marginLeft: wp('6%'),
                  marginBottom: 15,
                }}
              />
              <Tags keywords={keywords} />
              {attractions && <Attractions attractions={attractions} />}
            </Layout>
          </TriggeringView>
        </Layout>
      </ImageHeaderScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    marginTop: hp('1%'),
    fontSize: hp('3%'),
    paddingLeft: wp('6%'),
    fontWeight: '500',
  },
  likeButton: {
    marginTop: wp('0.5'),
    marginLeft: wp('0.75%'),
  },
  text: {
    fontSize: hp('1.75%'),
    color: 'grey',
    paddingBottom: 5,
    paddingLeft: wp('6%'),
    fontWeight: '400',
    width: wp('60%'),
  },
  name: { fontSize: hp('1.5%'), color: '#000', alignSelf: 'center' },
});
