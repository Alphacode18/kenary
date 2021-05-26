import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Layout, Text, List } from '@ui-kitten/components';
import Entries from './Entries';
const haversine = require('haversine');
import * as Location from 'expo-location';
import _ from 'lodash';

/* The previewNumber denotes the number of data points to be shown
 * on the Homepage horizontal flatlists.
 */
const previewNumber = 5;

export default Nearby = ({ name, data, navigation }) => {
  const [nearby, setNearby] = useState([]);
  const retrieveNearbyExperiences = async () => {
    let lastPosition = await Location.getLastKnownPositionAsync({});
    const userLocation = {
      latitude: lastPosition['coords']['latitude'],
      longitude: lastPosition['coords']['longitude'],
    };
    const sortable = [];
    data.map((datum) => {
      if (datum['coordinates']) {
        datum['distanceTo'] = haversine(userLocation, datum['coordinates'], {
          unit: 'meter',
        });
        sortable.push(datum);
      }
    });
    const sorted = _.sortBy(sortable, 'distanceTo');
    setNearby(sorted);
  };

  useEffect(() => {
    retrieveNearbyExperiences();
  }, []);

  const preview = nearby.slice(0, previewNumber);

  return (
    <Layout>
      <Layout style={styles.header}>
        <Text category='h6'>{name}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('See All', {
              name: name,
              data: nearby,
            })
          }
        >
          <Text style={{ marginRight: 20 }}>{'See All'}</Text>
        </TouchableOpacity>
      </Layout>
      <List
        style={{ maxLength: 180 }}
        data={preview}
        renderItem={({ item }) => (
          <Entries item={item} navigation={navigation} />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </Layout>
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
