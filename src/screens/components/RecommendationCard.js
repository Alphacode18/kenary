import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { ImageBackground, StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('screen');

export default RecommendationCard = ({ recommendation }) => {
  const { name, image, description } = recommendation;
  return (
    <Layout style={styles.tab}>
      <ImageBackground
        source={image}
        imageStyle={styles.image}
        style={styles.background}
      >
        <Text style={styles.hero}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.recommended}>Top Picks</Text>
      </ImageBackground>
    </Layout>
  );
};

const styles = StyleSheet.create({
  tab: {
    height: 0.25 * height,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 10,
  },
  hero: {
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    fontSize: 30,
    bottom: 60,
    left: 20,
  },
  description: {
    color: 'white',
    position: 'absolute',
    fontSize: 15,
    bottom: 20,
    left: 20,
    width: '50%',
  },
  recommended: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'red',
    position: 'absolute',
    fontSize: 15,
    bottom: '79.5%',
    left: '75%',
    padding: 14,
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
    borderRadius: 10,
    overflow: 'hidden',
  },
});
