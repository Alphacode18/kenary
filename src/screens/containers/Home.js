import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Layout, Text, ViewPager, Avatar } from '@ui-kitten/components';

export default Home = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <Layout style={styles.layout}>
        <SafeAreaView>
          <Layout style={styles.header}>
            <Text category='h1'>Experience</Text>
            <Avatar
              source={require('../../../assets/Shreyas.jpg')}
              style={{ marginRight: 20 }}
              onPress={() => navigation.navigate('Profile')}
            />
          </Layout>
          {/* Replace with the user's location */}
          <Text category='h1' style={styles.hero}>
            West Lafayette
          </Text>
          <ViewPager
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}
            style={{ marginTop: 20 }}
          >
            <Layout style={styles.tab} level='4'>
              <Text category='h5'>USERS</Text>
            </Layout>
            <Layout style={styles.tab} level='4'>
              <Text category='h5'>ORDERS</Text>
            </Layout>
            <Layout style={styles.tab} level='4'>
              <Text category='h5'>TRANSACTIONS</Text>
            </Layout>
          </ViewPager>
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
    marginLeft: 20,
  },
  hero: {
    color: '#cc7722',
    marginLeft: 20,
  },
  tab: {
    height: 192,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});
