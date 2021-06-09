import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import { Layout, Divider } from '@ui-kitten/components';
import ListingInfo from './components/ListingInfo';
import HeaderImage from './components/HeaderImage';
import Reserve from './components/Book';
import Attractions from './components/Attractions';
import Timings from './components/Timings';
import ViewMap from './components/ViewMap';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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
        maxHeight={300}
        minHeight={100}
        headerImage={{ uri: image }}
        // headerContainerStyle={{
        //   borderBottomLeftRadius: 25,
        //   borderBottomRightRadius: 25,
        // }}
        renderForeground={() => (
          <Layout
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          ></Layout>
        )}
      >
        <Layout
          style={{
            height: 1000,
          }}
        >
          <TriggeringView>
            {/* <Layout
              style={{
                width: '100%',
                height: '100%',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            >
              <ListingInfo {...listingData} /> */}
            <Layout
              style={{
                width: '100%',
                height: '100%',
                bottom: '5%',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
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
                  marginTop: wp('8%'),
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
                  <Text style={{ color: '#0000FF', paddingLeft: 20 }}>
                    Rate
                  </Text>
                </TouchableOpacity>
              </Layout>
              <Layout
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 20,
                  paddingLeft: wp('6%'),
                  width: wp('95%'),
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
            </Layout>
          </TriggeringView>
        </Layout>
      </ImageHeaderScrollView>
      {/* <ScrollView showsVerticalScrollIndicator={true}>
        <Layout style={{ position: 'relative', height: '100%', width: '100%' }}>
          <HeaderImage image={image} navigation={navigation} />
        </Layout>
        <Layout
          style={{
            position: 'absolute',
            top: '90%',
            width: '100%',
            height: '100%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
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
              marginTop: wp('8%'),
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
              paddingLeft: wp('6%'),
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
              <Text style={{ color: '#0000FF', paddingLeft: 20 }}>
                View Map
              </Text>
            </TouchableOpacity>
          </Layout>
          <Divider
            style={{ width: wp('89%'), marginLeft: wp('6%'), marginBottom: 15 }}
          />
          <Text
            style={{ fontSize: hp('2.5%'), fontWeight: '500', padding: 15 }}
          >
            Main Attractions
          </Text>
          <Attractions attractions={attractions} />
          <Layout style={{ height: 1000 }}>
            <Attractions attractions={attractions} />
            <Attractions attractions={attractions} />
          </Layout>
        </Layout>
      </ScrollView> */}
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
    marginTop: hp('1.2%'),
    paddingRight: wp('5%'),
    backgroundColor: 'white',
    borderColor: 'black',
  },
  text: {
    fontSize: hp('1.75%'),
    color: 'grey',
    paddingBottom: 5,
    paddingLeft: wp('6%'),
    fontWeight: '400',
    width: wp('60%'),
  },
  attractions: {
    width: wp('45%'),
    height: wp('45%'),
    margin: wp('2.5%'),
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: '#dddddd',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    elevation: 10,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  textContainer: {
    flex: 0.75,
    justifyContent: 'space-evenly',
    textAlign: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  name: { fontSize: hp('1.5%'), color: '#000', alignSelf: 'center' },
});
