import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import {
  Layout,
  Text,
  Button,
  Divider,
  Popover,
  List,
} from '@ui-kitten/components';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import openMap from 'react-native-open-maps';
import * as WebBrowser from 'expo-web-browser';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
const { height, width } = Dimensions.get('screen');
import Attractions from './components/Attractions';
import Timings from './components/Timings';
import ViewMap from './components/ViewMap';
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

export default Listing = ({ route }) => {
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
  console.log(coordinates);
  const handleReservation = async () => {
    await WebBrowser.openBrowserAsync(booking);
  };
  return (
    <Layout style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={{ uri: image }}
          style={{ width: width, height: 0.4 * height }}
        >
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <FontAwesome5Icon
              name='arrow-circle-left'
              size={30}
              style={styles.header}
              color={'white'}
            />
          </TouchableWithoutFeedback>
        </ImageBackground>
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
        <Layout
          style={{
            flex: 1,
            flexDirection: 'row',
            alignContent: 'space-between',
            marginBottom: 10,
          }}
        >
          <FeatherIcon
            name='alert-octagon'
            style={{
              width: 0.4 * width,
              marginLeft: 15,
              marginRight: 50,
              marginBottom: 10,
              color: '#cc7722',
            }}
          >
            {' '}
            <Text style={{ color: '#cc7722' }}>
              This experience might be enhanced by booking in advance.
            </Text>
          </FeatherIcon>
          <Button
            style={{
              backgroundColor: 'teal',
              borderColor: 'teal',
              width: 0.35 * width,
              height: 50,
            }}
            onPress={handleReservation}
          >
            Reserve
          </Button>
        </Layout>
        <Divider
          style={{ width: 0.9 * width, marginLeft: 15, marginBottom: 15 }}
        />
        <Layout
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingBottom: 20,
          }}
        >
          {keywords.map((keyword) => {
            return (
              <Button
                style={{
                  borderRadius: 20,
                  marginLeft: 10,
                  marginBottom: 5,
                  marginTop: 5,
                }}
                id={keyword}
                appearance='outline'
                disabled={true}
              >
                <Text style={{ color: 'teal' }}>{keyword}</Text>
              </Button>
            );
          })}
        </Layout>
        <Divider
          style={{ width: 0.9 * width, marginLeft: 15, marginBottom: 15 }}
        />
        <Text style={{ fontSize: 25, fontWeight: '500', padding: 15 }}>
          Major Attractions
        </Text>
        <List
          style={{
            maxLength: 180,
            paddingLeft: 5,
            marginBottom: 20,
          }}
          data={dummyURI}
          renderItem={Attractions}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <Divider
          style={{ width: 0.9 * width, marginLeft: 15, marginBottom: 15 }}
        />
        <Timings timings={timings} />
        <ViewMap coordinates={coordinates} />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
