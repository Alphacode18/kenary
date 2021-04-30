import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Layout, ListItem } from '@ui-kitten/components';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

export default Categories = ({ pack, icon }) => {
  return (
    // <ListItem onPress={() => {}}>
    <Layout style={styles.container}>
      {pack === 'ionicon' ? (
        <IoniconsIcon name={icon} size='35' color='#cc7722' />
      ) : (
        <FontAwesome5Icon name={icon} size='35' color='#cc7722' />
      )}
    </Layout>
    // </ListItem>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 75,
    height: 75,
    borderRadius: 75,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 10,
  },
});
