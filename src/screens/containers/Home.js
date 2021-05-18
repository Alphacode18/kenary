import React, { useState, useEffect } from 'react';
import { db } from '../../../config/Firebase';
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Layout, Text, Avatar } from '@ui-kitten/components';
const { height } = Dimensions.get('screen');
import Hero from '../components/Hero';
import Catalogue from '../components/Catalogue';

export default Home = ({ navigation }) => {
  const [data, setData] = useState([]);

  const retriveExperiences = async () => {
    const tempExperiencesArray = [];
    const data = db
      .collection('cities')
      .doc('west-lafayette')
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
    retriveExperiences();
  }, []);

  return (
    <>
      <Layout style={styles.layout}>
        <SafeAreaView>
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
                  source={require('../../../assets/Shreyas.jpg')}
                  style={{ marginRight: 20 }}
                />
              </Layout>
            </TouchableWithoutFeedback>
            {/* Replace with the user's location */}
            <Text category='h1' style={styles.hero}>
              West Lafayette
            </Text>
            <Hero
              data={data}
              toggleVerticalScroll={toggleVerticalScroll}
              navigation={navigation}
            />
            <Catalogue name='Near You' data={data} navigation={navigation} />
            <Catalogue name='Specials' data={data} navigation={navigation} />
            <Catalogue
              name='Experimental'
              data={data}
              navigation={navigation}
            />
          </ScrollView>
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
    marginTop: 10,
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
