import React from 'react';
import { Dimensions, StyleSheet, Image } from 'react-native';
import { Layout, Text, Divider } from '@ui-kitten/components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const { width } = Dimensions.get('screen');
const Attractions = ({ attractions }) => {
  return (
    <Layout style={{ flex: 1 }}>
      <Text style={{ fontSize: hp('2.5%'), fontWeight: '500', padding: 15 }}>
        Main Attractions
      </Text>
      <Layout style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {attractions.map((item) => {
          return (
            <Layout style={styles.container}>
              <Layout style={{ flex: 1 }}>
                <Layout style={{ flex: 3 }}>
                  <Image source={{ uri: item.uri }} style={styles.image} />
                </Layout>
                <Layout style={styles.textContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                </Layout>
              </Layout>
            </Layout>
          );
        })}
      </Layout>
      <Divider style={{ width: width, marginTop: 20 }} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('45%'),
    height: wp('45%'),
    margin: wp('2.5%'),
    justifyContent: 'space-between',
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
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  textContainer: {
    flex: 0.75,
    justifyContent: 'space-evenly',
    textAlign: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  name: { fontSize: hp('1.5%'), color: '#000', alignSelf: 'center' },
});

export default Attractions;
