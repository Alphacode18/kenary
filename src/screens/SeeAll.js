import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Layout, Text, List } from '@ui-kitten/components';
import ListEntries from './components/ListEntries';

export default SeeAll = ({ route }) => {
  const { title, data } = route.params;
  return (
    <Layout style={styles.container}>
      <SafeAreaView>
        <List
          style={{
            maxLength: 180,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
          data={data}
          renderItem={ListEntries}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-around' }}
        />
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
