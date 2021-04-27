import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Layout, Text, ViewPager, Avatar, Card } from '@ui-kitten/components';
const { height, width } = Dimensions.get('screen');

export default Home = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
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
          <ScrollView>
            <ViewPager
              selectedIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}
            >
              <Layout style={styles.tab} level='1'>
                <Text category='h5'>USERS</Text>
              </Layout>
              <Layout style={styles.tab} level='1'>
                <Text category='h5'>ORDERS</Text>
              </Layout>
              <Layout style={styles.tab} level='1'>
                <Text category='h5'>TRANSACTIONS</Text>
              </Layout>
            </ViewPager>
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
    borderRadius: 10,
    margin: 20,
  },
});
