import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { Layout, Divider, List, Avatar } from '@ui-kitten/components';
import Attractions from './components/Attractions';
import Reserve from './components/Book';
import ReviewCard from './components/Review';
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
import ImageView from 'react-native-image-viewing';

const reviews = [
  {
    reviewer: 'Shreyas Kharbanda',
    review:
      ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem',
    rating: 4,
    timestamp: 'Two Weeks Ago',
  },
  {
    reviewer: 'Shreyas Kharbanda',
    review:
      ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem',
    rating: 4,
    timestamp: 'Two Weeks Ago',
  },
  {
    reviewer: 'Shreyas Kharbanda',
    review:
      ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem',
    rating: 4,
    timestamp: 'Two Weeks Ago',
  },
];

const images = [
  {
    key: 1,
    uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',
  },
  {
    key: 2,
    uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
  },
  {
    key: 3,
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
  },
  {
    key: 4,
    uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',
  },
  {
    key: 5,
    uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
  },
  {
    key: 6,
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
  },
];

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
  const [visible, setIsVisible] = useState(false);
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
            height: 2200,
          }}
        >
          <TriggeringView>
            <Layout
              style={{
                width: '100%',
                height: '100%',
                bottom: hp('3%'),
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
                  marginTop: wp('10%'),
                  paddingRight: wp('1%'),
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
                  paddingRight: wp('2%'),
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
                    size={20}
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
                  paddingRight: wp('2%'),
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
                    size={20}
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
                  paddingRight: wp('2%'),
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
                    size={20}
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
                  marginBottom: hp('1.5%'),
                  marginTop: hp('1%'),
                }}
              />
              <Tags keywords={keywords} />
              <ImageView
                images={images}
                imageIndex={0}
                visible={visible}
                onRequestClose={() => setIsVisible(false)}
              />
              <Layout
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text
                  style={{
                    fontSize: hp('2.5%'),
                    fontWeight: '500',
                    marginLeft: wp('8%'),
                    marginTop: wp('2.5%'),
                  }}
                >
                  Photos
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Photos', { images: images })
                  }
                >
                  <Text
                    style={{
                      color: '#0000FF',
                      marginRight: wp('8%'),
                      marginTop: wp('2.5%'),
                    }}
                  >
                    See All
                  </Text>
                </TouchableOpacity>
              </Layout>
              <Layout
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  paddingLeft: wp('6%'),
                  width: wp('95%'),
                  paddingRight: wp('2%'),
                  justifyContent: 'space-between',
                  marginVertical: hp('2%'),
                }}
              >
                {images
                  .filter((_, index) => index < 4)
                  .map((image) => {
                    return (
                      <TouchableOpacity onPress={() => setIsVisible(true)}>
                        <Image
                          source={{ uri: image.uri }}
                          style={{
                            height: 150,
                            width: 175,
                            marginVertical: 5,
                            borderWidth: 0.5,
                            borderColor: '#dddddd',
                            borderRadius: 10,
                            shadowColor: '#000',
                            shadowOffset: {
                              width: 0,
                              height: 5,
                            },
                            shadowOpacity: 0.1,
                          }}
                        />
                      </TouchableOpacity>
                    );
                  })}
              </Layout>
              <Divider
                style={{
                  width: wp('90%'),
                  marginLeft: wp('6%'),
                  marginBottom: hp('1.5%'),
                  marginTop: hp('1%'),
                }}
              />
              <Layout
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text
                  style={{
                    fontSize: hp('2.5%'),
                    fontWeight: '500',
                    marginLeft: wp('8.5%'),
                    marginTop: wp('2.5%'),
                    marginBottom: hp('2%'),
                  }}
                >
                  Reviews
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: '#0000FF',
                      marginRight: wp('8%'),
                      marginTop: wp('2.5%'),
                    }}
                  >
                    See All
                  </Text>
                </TouchableOpacity>
              </Layout>
              <Layout
                style={{
                  width: wp('95%'),
                  paddingRight: wp('2%'),
                  justifyContent: 'space-between',
                }}
              >
                <List
                  style={{ backgroundColor: 'white', paddingLeft: 20 }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={reviews}
                  renderItem={ReviewCard}
                />
              </Layout>
              <Layout
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: hp('5%'),
                }}
              >
                <Divider
                  style={{
                    width: wp('30%'),
                    marginLeft: wp('6%'),
                    marginBottom: hp('1.5%'),
                    marginTop: hp('3%'),
                  }}
                />
                <Avatar
                  source={require('../../assets/appstore.png')}
                  size={'large'}
                />
                <Divider
                  style={{
                    width: wp('30%'),
                    marginRight: wp('6%'),
                    marginBottom: hp('1.5%'),
                    marginTop: hp('3%'),
                  }}
                />
              </Layout>
              <Text
                style={{ alignSelf: 'center', paddingTop: 10, color: 'grey' }}
              >
                More from
              </Text>
              <Text
                style={{
                  alignSelf: 'center',
                  paddingTop: 10,
                  fontSize: 25,
                  fontWeight: '600',
                }}
              >
                {name}
              </Text>
              {attractions && <Attractions attractions={attractions} />}
              <Divider
                style={{
                  width: wp('90%'),
                  marginLeft: wp('6%'),
                  marginTop: hp('3%'),
                }}
              />
              <Text
                style={{
                  fontSize: hp('2.5%'),
                  fontWeight: '500',
                  marginLeft: wp('8%'),
                  marginTop: hp('3%'),
                }}
              >
                More Like This
              </Text>
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
