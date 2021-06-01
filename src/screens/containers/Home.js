import React, { useState, useEffect } from 'react';
import firebase, { db } from '../../../config/Firebase';
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Layout, Text, Avatar, Spinner } from '@ui-kitten/components';
const { height, width } = Dimensions.get('screen');
import Nearby from '../components/Nearby';
import Catalogue from '../components/Catalogue';
import * as Location from 'expo-location';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import HeroCard from '../components/HeroCard';

export default Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [city, setCity] = useState('Lafayette');
  const [loading, setLoading] = useState(false);
  const [locationPreference, setLocationPreference] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  const getUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('Reading Error');
    }
  };

  const initializer = async () => {
    setLoading(true);
    const tempExperiencesArray = [];
    const queryCity = city === 'Lafayette' ? 'lafayette' : 'west-lafayette';
    const data = db
      .collection('cities')
      .doc(queryCity)
      .collection('experiences');
    await data.get().then((snapshot) => {
      if (snapshot.docs.length > 0) {
        snapshot.docs.forEach((doc) => {
          const data = doc.data();
          tempExperiencesArray.push(data);
        });
      } else {
        console.log('No Data Found');
      }
    });
    setData(tempExperiencesArray);
    let { status } = await Location.getForegroundPermissionsAsync();
    if (status !== 'granted') {
      return;
    }
    setLocationPreference(true);
    const imageRef = firebase.storage().ref('/' + 'Shreyas.JPG');
    imageRef.getDownloadURL().then((url) => {
      setUserProfile(url);
    });
    setLoading(false);
  };

  useEffect(() => {
    initializer();
    getUserData();
  }, [city]);

  return (
    <>
      <Layout style={styles.layout}>
        <SafeAreaView>
          {loading === true ? (
            <Layout>
              <Layout
                style={{
                  flex: 1,
                  alignItems: 'center',
                  marginTop: height / 3,
                }}
              >
                <Spinner size='giant' />
              </Layout>
              <Text
                style={{
                  marginTop: 75,
                  marginLeft: Platform.OS === 'ios' ? width / 8 : width / 9,
                  width: Platform.OS === 'ios' ? '85%' : '75%',
                  fontSize: hp('2%'),
                  fontStyle: 'italic',
                }}
              >
                “Exploration is really the essence of the human spirit.”
                {'\n '}
              </Text>
            </Layout>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Profile');
                }}
              >
                <Layout style={styles.header}>
                  <Text category='h1'>Experience</Text>
                  <Avatar
                    source={{ uri: userProfile }}
                    size={'large'}
                    style={{
                      marginRight: wp('4%'),
                      backgroundColor: 'black',
                    }}
                  />
                </Layout>
              </TouchableWithoutFeedback>
              {/* Replace with the user's location */}
              <TouchableOpacity
                onPress={() => {
                  city === 'West Lafayette'
                    ? setCity('Lafayette')
                    : setCity('West Lafayette');
                }}
              >
                <Text category='h1' style={styles.hero}>
                  {city}
                </Text>
              </TouchableOpacity>
              <Layout style={{ marginTop: 20, alignItems: 'center' }}>
                <Carousel
                  data={data}
                  renderItem={HeroCard}
                  layout={'default'}
                  itemWidth={wp('98')}
                  sliderWidth={wp('98')}
                  onSnapToItem={(index) => {
                    setActiveIndex(index);
                  }}
                />
                <Pagination
                  dotsLength={data.length}
                  activeDotIndex={activeIndex}
                  dotColor='black'
                  inactiveDotColor='grey'
                  containerStyle={{ paddingVertical: 2 }}
                  dotContainerStyle={{ marginHorizontal: 5 }}
                />
              </Layout>
              {locationPreference === true ? (
                <Nearby name='Near You' data={data} navigation={navigation} />
              ) : (
                <></>
              )}
              <Catalogue
                name='Recreation'
                data={data}
                navigation={navigation}
              />
              <Catalogue name='Food' data={data} navigation={navigation} />
              <Catalogue name='Art' data={data} navigation={navigation} />
              <Catalogue name='Relaxing' data={data} navigation={navigation} />
              <Catalogue name='Nature' data={data} navigation={navigation} />
              <Catalogue
                name='Historic Sights'
                data={data}
                navigation={navigation}
              />
            </ScrollView>
          )}
        </SafeAreaView>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 25 : 30,
    marginLeft: wp('4%'),
  },
  hero: {
    color: '#6200EE',
    marginLeft: wp('4%'),
  },
  tab: {
    height: 0.2 * height,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 20,
  },
});
