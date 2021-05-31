import React, { useState, useEffect } from 'react';
import { db } from '../../../config/Firebase';
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
import Entries from '../components/Entries';

export default Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [city, setCity] = useState('Lafayette');
  const [loading, setLoading] = useState(false);
  const [locationPreference, setLocationPreference] = useState(null);

  const getUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      console.log(JSON.parse(jsonValue));
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('Reading Error');
    }
  };

  const initializer = async () => {
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
  };

  useEffect(() => {
    setLoading(true);
    initializer();
    getUserData();
    setTimeout(() => {
      setLoading(false);
    }, 3500);
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
                    source={{
                      uri: `https://robohash.org/${Math.floor(
                        Math.random() * 10
                      )}.png`,
                    }}
                    size={'large'}
                    style={{ marginRight: 20, backgroundColor: 'black' }}
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
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  marginRight: 20,
                  marginTop: 10,
                  fontSize: hp('1%'),
                }}
                onPress={() =>
                  navigation.navigate('See All', {
                    name: 'Top Picks',
                    data: data.filter((datum) => {
                      return datum['top-pick'] === true;
                    }),
                  })
                }
              >
                <Text>Top Picks</Text>
              </TouchableOpacity>
              <Carousel
                data={data}
                renderItem={HeroCard}
                layout={'layout'}
                itemWidth={wp('100')}
                sliderWidth={wp('100')}
                onSnapToItem={(index) => {
                  setActiveIndex(index);
                }}
              />
              <Pagination
                dotsLength={data.length}
                activeDotIndex={activeIndex}
              />
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
    marginTop: Platform.OS === 'ios' ? 10 : 30,
    marginLeft: 10,
  },
  hero: {
    color: '#cc7722',
    marginLeft: 10,
  },
  tab: {
    height: 0.2 * height,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 20,
  },
});
