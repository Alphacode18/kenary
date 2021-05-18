import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const { height } = Dimensions.get('screen');

export default HeroCard = ({ data, navigation }) => {
  const { name, image } = data;
  return (
    <Layout style={styles.tab}>
      <Text style={{ alignSelf: 'flex-end' }}>Learn More</Text>
      <ImageBackground
        source={{ uri: image }}
        imageStyle={styles.image}
        style={styles.background}
      >
        <Text style={styles.hero}>{name}</Text>
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
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 5,
    fontSize: 30,
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
    bottom: '76.4%',
    left: '75.3%',
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
    marginTop: 10,
  },
  image: {
    height: null,
    width: null,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
