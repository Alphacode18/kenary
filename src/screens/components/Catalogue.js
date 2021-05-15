import React from 'react';
import { TouchableOpacity, Dimensions, Image, StyleSheet } from 'react-native';
import { Layout, Text, List } from '@ui-kitten/components';
import Entries from './Entries';

/* The previewNumber denotes the number of data points to be shown
 * on the Homepage horizontal flatlists.
 */
const previewNumber = 2;

export default Catalogue = ({ name, data }) => {
  const preview = data.slice(0, previewNumber);
  return (
    <>
      <Layout style={styles.header}>
        <Text category='h6'>{name}</Text>
        <TouchableOpacity>
          <Text style={{ marginRight: 20 }}>See All</Text>
        </TouchableOpacity>
      </Layout>
      <List
        style={{ maxLength: 180 }}
        data={preview}
        renderItem={Entries}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
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
});
