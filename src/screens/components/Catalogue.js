import React from 'react';
import {
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import { Layout, List } from '@ui-kitten/components';
import Entries from './Entries';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

/* The previewNumber denotes the number of data points to be shown
 * on the Homepage horizontal flatlists.
 */
const previewNumber = 5;

export default Catalogue = ({ name, data, navigation }) => {
  data = data.filter((datum) => {
    return datum['catalogue'] === name;
  });
  const preview = data.slice(0, previewNumber);
  return (
    <>
      <Layout style={styles.header}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: hp('2.25'),
          }}
        >
          {name}
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('See All', {
              name: name,
              data: data,
            })
          }
        >
          <Text
            style={{
              marginRight: 20,
              color: '#0000FF',
              fontSize: hp('1.5'),
              fontWeight: '500',
            }}
          >
            {'See All'}
          </Text>
        </TouchableOpacity>
      </Layout>
      <List
        data={preview}
        renderItem={({ item }) => (
          <Entries item={item} navigation={navigation} />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10, marginHorizontal: 0, backgroundColor: 'white' }}
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
    marginTop: 20,
    marginLeft: wp('4%'),
  },
  hero: {
    color: '#cc7722',
    marginLeft: 10,
  },
});
