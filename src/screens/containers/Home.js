import React, { useState, useEffect } from 'react';
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
import { catalogueDummyData } from '../../../test/Data';

export default Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [allowVerticalScroll, setAllowVerticalScroll] = useState(true);
  const toggleVerticalScroll = () => {
    setTimeout(() => {
      allowVerticalScroll
        ? setAllowVerticalScroll(false)
        : setAllowVerticalScroll(true);
    }, 0);
  };
  useEffect(() => {
    setData(catalogueDummyData);
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
            <Hero data={data} toggleVerticalScroll={toggleVerticalScroll} />
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
