import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import {
  Layout,
  Text,
  Avatar,
  Card,
  List,
  ListItem,
  Divider,
} from '@ui-kitten/components';
const { height, width } = Dimensions.get('screen');
import RecommendationPager from '../../screens/components/RecommendationPager';

export default Home = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <ListItem onPress={() => navigation.navigate('Profile')}>
      <Layout
        style={{
          flex: 1,
          width: width / 2,
          height: width / 2,
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
        }}
      >
        <Layout style={{ flex: 3 }}>
          <Image
            source={item.image}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
        </Layout>
        <Layout
          style={{
            flex: 2,
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
            paddingLeft: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000' }}>
            {item.name}
          </Text>
          <Text style={{ fontSize: 10, color: '#000' }}>{item.keywords}</Text>
          <Text style={{ fontSize: 10, color: '#e3e3e3' }}>
            - - - - - - - - - - - - - - - - - - - - - - - - -
          </Text>
          <Layout
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 10, color: '#000' }}>25 mins</Text>
            <Text style={{ fontSize: 10, color: '#000', marginLeft: '15%' }}>
              15 mins
            </Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 10, color: '#000', marginLeft: '25%' }}>
                Rating: 9.5
              </Text>
            </TouchableOpacity>
          </Layout>
        </Layout>
      </Layout>
    </ListItem>
  );
  const [recommendationData, setRecommendationData] = useState([]);
  const [allowVerticalScroll, setAllowVerticalScroll] = useState(true);
  const toggleVerticalScroll = () => {
    setTimeout(() => {
      allowVerticalScroll
        ? setAllowVerticalScroll(false)
        : setAllowVerticalScroll(true);
    }, 0);
  };
  if (recommendationData.length === 0) {
    setRecommendationData([
      {
        name: 'Happy Hollow',
        image: require('../../../assets/Test/Hollow.jpeg'),
        description: 'Assorted adventures for every family ',
        keywords: 'Family Trek',
      },
      {
        name: '8Eleven Bistro',
        image: require('../../../assets/Test/8Eleven.jpeg'),
        description: 'Fingerlicking food served with flair',
        keywords: 'Bar For Friends',
      },
      {
        name: 'Coyote Course',
        image: require('../../../assets/Test/Coyote.jpeg'),
        description: 'A course you will keep coming back to',
        keywords: 'Golf Fun',
      },
    ]);
  }
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
            <RecommendationPager
              data={recommendationData}
              toggleVerticalScroll={toggleVerticalScroll}
            />
            <Layout style={styles.header}>
              <Text category='h6'>Near You</Text>
              <TouchableOpacity>
                <Text style={{ marginRight: 20 }}>See All</Text>
              </TouchableOpacity>
            </Layout>
            <List
              style={{ maxLength: 180 }}
              data={recommendationData}
              renderItem={renderItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
            <Layout style={styles.header}>
              <Text category='h6'>Specials</Text>
              <TouchableOpacity>
                <Text style={{ marginRight: 20 }}>See All</Text>
              </TouchableOpacity>
            </Layout>
            <List
              style={{ maxLength: 180 }}
              data={recommendationData}
              renderItem={renderItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
            <Layout style={styles.header}>
              <Text category='h6'>Events</Text>
              <TouchableOpacity>
                <Text style={{ marginRight: 20 }}>See All</Text>
              </TouchableOpacity>
            </Layout>
            <List
              style={{ maxLength: 180 }}
              data={recommendationData}
              renderItem={renderItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
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
