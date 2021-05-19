import React, { useState, useEffect } from 'react';
import Firebase, { db } from '../../../config/Firebase';
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Layout, Text, Avatar, Spinner } from '@ui-kitten/components';
const { height, width } = Dimensions.get('screen');
import Hero from '../components/Hero';
import Catalogue from '../components/Catalogue';
const user = Firebase.auth().currentUser;

export default Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState('West Lafayette');
  const [loading, setLoading] = useState(false);

  const retriveExperiences = async () => {
    const tempExperiencesArray = [];
    const queryCity =
      city === 'West Lafayette' ? 'west-lafayette' : 'lafayette';
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
        console.log('No Data Found :(');
      }
    });
    setData(tempExperiencesArray);
  };

  const [allowVerticalScroll, setAllowVerticalScroll] = useState(true);
  const toggleVerticalScroll = () => {
    setTimeout(() => {
      allowVerticalScroll
        ? setAllowVerticalScroll(false)
        : setAllowVerticalScroll(true);
    }, 0);
  };

  useEffect(() => {
    setLoading(true);
    retriveExperiences();
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
                  marginLeft: width / 8,
                  width: '85%',
                  fontSize: 17,
                  fontStyle: 'italic',
                }}
              >
                “Exploration is really the essence of the human spirit.”
                {'\n '}
              </Text>
            </Layout>
          ) : (
            <ScrollView
              showsVerticalScrollIndicator={false}
              scrollEnabled={allowVerticalScroll}
            >
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
                <Text>Learn More</Text>
              </TouchableOpacity>
              <Hero data={data} toggleVerticalScroll={toggleVerticalScroll} />
              <Catalogue name='Art' data={data} navigation={navigation} />
              <Catalogue name='Relaxing' data={data} navigation={navigation} />
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
    marginTop: 15,
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
