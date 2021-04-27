import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Layout, Text, Avatar } from '@ui-kitten/components';
import Header from '../components/RecommendationPager';
const { height, width } = Dimensions.get('screen');

export default Home = ({ navigation }) => {
  const [recommendationData, setRecommendationData] = useState([]);
  if (recommendationData.length === 0) {
    setRecommendationData([
      {
        name: 'Happy Hollow Park',
        image: require('../../../assets/Test/Hollow.jpeg'),
      },
      {
        name: '8Eleven Bistro',
        image: require('../../../assets/Test/8Eleven.jpeg'),
      },
      {
        name: 'Coyote Crossing Golf Course',
        image: require('../../../assets/Test/Coyote.jpeg'),
      },
    ]);
  }
  return (
    <>
      <Layout style={styles.layout}>
        <SafeAreaView>
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
          <Header data={recommendationData} />
          <ScrollView>
            <Layout style={styles.header}>
              <Text category='h6'>Near You</Text>
              <TouchableOpacity>
                <Text style={{ marginRight: 20 }}>See All</Text>
              </TouchableOpacity>
            </Layout>
            <Layout style={styles.header}>
              <Text category='h6'>Top Rated</Text>
              <TouchableOpacity>
                <Text style={{ marginRight: 20 }}>See All</Text>
              </TouchableOpacity>
            </Layout>
            <Layout style={styles.header}>
              <Text category='h6'>Near You</Text>
              <TouchableOpacity>
                <Text style={{ marginRight: 20 }}>See All</Text>
              </TouchableOpacity>
            </Layout>
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
