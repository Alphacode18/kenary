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

const handleReservation = async () => {
  await WebBrowser.openBrowserAsync('https://happyhollow.org/visit/');
};

export default Listing = ({ route }) => {
  const [mondayVisible, setMondayVisible] = useState(false);
  const [tuesdayVisible, setTuesdayVisible] = useState(false);
  const [wednesdayVisible, setWednesdayVisible] = useState(false);
  const [thursdayVisible, setThursdayVisible] = useState(false);
  const [fridayVisible, setFridayVisible] = useState(false);
  const [saturdayVisible, setSaturdayVisible] = useState(false);
  const [sundayVisible, setSundayVisible] = useState(false);
  const renderTimingButton = (day) => (
    <Button
      style={{
        width: 55,
        height: 55,
        borderRadius: width / 2,
        borderColor: 'teal',
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: 'teal',
      }}
      onPress={() => {
        switch (day) {
          case 'M':
            setMondayVisible(true);
            break;
          case 'T':
            setTuesdayVisible(true);
            break;
          case 'W':
            setWednesdayVisible(true);
            break;
          case 'R':
            setThursdayVisible(true);
            break;
          case 'F':
            setFridayVisible(true);
            break;
          case 'S':
            setSaturdayVisible(true);
            break;
          case 'Su':
            setSundayVisible(true);
            break;
        }
      }}
    >
      {day === 'Su' ? 'S' : day}
    </Button>
  );
  const { name, image, description, keywords, navigation } = route.params;
  return (
    <Layout style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={image}
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
          <Text style={{ fontSize: 20 }}> 4.2</Text>
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
          <Button
            style={{
              borderRadius: 20,
              marginLeft: 10,
              marginBottom: 5,
              marginTop: 5,
            }}
            appearance='outline'
            disabled={true}
          >
            <Text style={{ color: 'teal' }}>{keywords}</Text>
          </Button>
          <Button
            style={{
              borderRadius: 20,
              marginLeft: 10,
              marginBottom: 5,
              marginTop: 5,
            }}
            appearance='outline'
            disabled={true}
          >
            <Text style={{ color: 'teal' }}>{keywords}</Text>
          </Button>
          <Button
            style={{
              borderRadius: 20,
              marginLeft: 10,
              marginBottom: 5,
              marginTop: 5,
            }}
            appearance='outline'
            disabled={true}
          >
            <Text style={{ color: 'teal' }}>{keywords}</Text>
          </Button>
          <Button
            style={{
              borderRadius: 20,
              marginLeft: 10,
              marginBottom: 5,
              marginTop: 5,
            }}
            appearance='outline'
            disabled={true}
          >
            <Text style={{ color: 'teal' }}>{keywords}</Text>
          </Button>
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
        <Text style={{ fontSize: 25, fontWeight: '500', padding: 15 }}>
          Timings
        </Text>
        <Layout
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignContent: 'space-between',
            marginBottom: 10,
          }}
        >
          <Popover
            visible={mondayVisible}
            anchor={() => renderTimingButton('M')}
            onBackdropPress={() => setMondayVisible(false)}
            placement={'top'}
          >
            <Layout style={styles.content}>
              <Text>8:00 AM - 8:40 PM</Text>
            </Layout>
          </Popover>
          <Popover
            visible={tuesdayVisible}
            anchor={() => renderTimingButton('T')}
            onBackdropPress={() => setTuesdayVisible(false)}
            placement={'top'}
          >
            <Layout style={styles.content}>
              <Text>8:00 AM - 8:40 PM</Text>
            </Layout>
          </Popover>
          <Popover
            visible={wednesdayVisible}
            anchor={() => renderTimingButton('W')}
            onBackdropPress={() => setWednesdayVisible(false)}
            placement={'top'}
          >
            <Layout style={styles.content}>
              <Text>8:00 AM - 8:40 PM</Text>
            </Layout>
          </Popover>
          <Popover
            visible={thursdayVisible}
            anchor={() => renderTimingButton('R')}
            onBackdropPress={() => setThursdayVisible(false)}
            placement={'top'}
          >
            <Layout style={styles.content}>
              <Text>8:00 AM - 8:40 PM</Text>
            </Layout>
          </Popover>
          <Popover
            visible={fridayVisible}
            anchor={() => renderTimingButton('F')}
            onBackdropPress={() => setFridayVisible(false)}
            placement={'top'}
          >
            <Layout style={styles.content}>
              <Text>8:00 AM - 8:40 PM</Text>
            </Layout>
          </Popover>
          <Popover
            visible={saturdayVisible}
            anchor={() => renderTimingButton('S')}
            onBackdropPress={() => setSaturdayVisible(false)}
            placement={'top'}
          >
            <Layout style={styles.content}>
              <Text>8:00 AM - 8:40 PM</Text>
            </Layout>
          </Popover>
          <Popover
            visible={sundayVisible}
            anchor={() => renderTimingButton('Su')}
            onBackdropPress={() => setSundayVisible(false)}
            placement={'top'}
          >
            <Layout style={styles.content}>
              <Text>8:00 AM - 8:40 PM</Text>
            </Layout>
          </Popover>
        </Layout>
        <Divider
          style={{ width: 0.9 * width, marginLeft: 15, marginBottom: 15 }}
        />
        <Layout
          styles={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: '500', padding: 15 }}>
            Location
          </Text>
          <MapView
            style={{
              width: 0.9 * width,
              height: 0.3 * height,
              marginLeft: 15,
              borderRadius: 10,
              marginBottom: 20,
            }}
            minZoomLevel={15}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 40.4350353,
              longitude: -86.8975098,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            scrollEnabled={false}
            onPress={() => {
              openMap({
                query: `${name}, West Lafayette`,
                provider: 'google',
                travelType: 'drive',
                navigate_mode: 'preview',
              });
            }}
          >
            <Marker
              coordinate={{ latitude: 40.4350353, longitude: -86.8975098 }}
            />
          </MapView>
        </Layout>
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
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
});
