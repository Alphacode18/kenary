import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { ImageBackground, StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('screen');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default HeroCard = ({ item }) => {
  const { name, image } = item;
  return (
    <Layout style={styles.tab}>
      <ImageBackground
        source={{ uri: image }}
        imageStyle={styles.image}
        style={styles.background}
      >
        <Text style={styles.hero}>{name}</Text>
      </ImageBackground>
    </Layout>
  );
};

const styles = StyleSheet.create({
  tab: {
    height: hp('30%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 10,
  },
  hero: {
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 5,
    fontSize: hp('2.5%'),
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 10,
  },
  image: {
    height: null,
    width: null,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
