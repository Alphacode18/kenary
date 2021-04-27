import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { Layout, Text, ViewPager, Avatar, Card } from '@ui-kitten/components';

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
          <ViewPager
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}
            style={{ marginTop: 20 }}
          >
            <Layout style={styles.tab} level='1'>
              <Card>
                <Text>
                  The Maldives, officially the Republic of Maldives, is a small
                  country in South Asia, located in the Arabian Sea of the
                  Indian Ocean. It lies southwest of Sri Lanka and India, about
                  1,000 kilometres (620 mi) from the Asian continent
                </Text>
              </Card>
            </Layout>
            <Layout style={styles.tab} level='1'>
              <Card>
                <Text>
                  The Maldives, officially the Republic of Maldives, is a small
                  country in South Asia, located in the Arabian Sea of the
                  Indian Ocean. It lies southwest of Sri Lanka and India, about
                  1,000 kilometres (620 mi) from the Asian continent
                </Text>
              </Card>
            </Layout>
            <Layout style={styles.tab} level='1'>
              <Card>
                <Text>
                  The Maldives, officially the Republic of Maldives, is a small
                  country in South Asia, located in the Arabian Sea of the
                  Indian Ocean. It lies southwest of Sri Lanka and India, about
                  1,000 kilometres (620 mi) from the Asian continent
                </Text>
              </Card>
            </Layout>
          </ViewPager>
          <Layout
            style={{
              marginHorizontal: 20,
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text category='h6'>Experience</Text>
            <Text category='h6'>See All</Text>
          </Layout>
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
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});
