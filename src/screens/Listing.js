import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

export default Listing = ({ route, navigation }) => {
  return (
    <Layout style={styles.container}>
      <SafeAreaView>
        <Text category='h1'>Listings</Text>
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
});
