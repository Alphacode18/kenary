import React, { useState } from 'react';
import { Layout, Text, Card, ViewPager } from '@ui-kitten/components';
import { ImageBackground, StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('screen');

export default RecommendationCard = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ViewPager
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <Layout style={styles.tab} level='1'>
        <ImageBackground
          source={data[0].image}
          imageStyle={{ borderRadius: 10 }}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            overflow: 'hidden',
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              position: 'absolute',
              bottom: 20,
              left: 20,
            }}
          >
            {data[0].name}
          </Text>
        </ImageBackground>
      </Layout>
      <Layout style={styles.tab} level='1'>
        <ImageBackground
          source={data[1].image}
          imageStyle={{ borderRadius: 10 }}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            overflow: 'hidden',
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              position: 'absolute',
              bottom: 20,
              left: 20,
            }}
          >
            {data[1].name}
          </Text>
        </ImageBackground>
      </Layout>
      <Layout style={styles.tab} level='1'>
        <ImageBackground
          source={data[2].image}
          imageStyle={{ borderRadius: 10 }}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            overflow: 'hidden',
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              position: 'absolute',
              bottom: 20,
              left: 20,
            }}
          >
            {data[2].name}
          </Text>
        </ImageBackground>
      </Layout>
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  tab: {
    height: 0.2 * height,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 20,
  },
});
