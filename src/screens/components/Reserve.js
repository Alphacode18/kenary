import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Layout, Text, Divider, Button } from '@ui-kitten/components';
import FeatherIcon from 'react-native-vector-icons/Feather';
import * as WebBrowser from 'expo-web-browser';
const { height, width } = Dimensions.get('screen');

const Reserve = ({ booking }) => {
  const handleReservation = async () => {
    await WebBrowser.openBrowserAsync(booking);
  };
  return (
    <Layout>
      <Layout
        style={{
          flex: 1,
          flexDirection: 'row',
          alignContent: 'space-between',
          marginBottom: 10,
        }}
      >
        <FeatherIcon
          name='alert-octagon'
          style={{
            width: 0.4 * width,
            marginLeft: 15,
            marginRight: 50,
            marginBottom: 10,
            color: '#cc7722',
          }}
        >
          {' '}
          <Text style={{ color: '#cc7722' }}>
            This experience might be enhanced by booking in advance.
          </Text>
        </FeatherIcon>
        <Button
          style={{
            backgroundColor: 'teal',
            borderColor: 'teal',
            width: 0.35 * width,
            height: 50,
          }}
          onPress={handleReservation}
        >
          Reserve
        </Button>
      </Layout>
      <Divider
        style={{ width: 0.9 * width, marginLeft: 15, marginBottom: 15 }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingLeft: 10,
  },
  heading: {
    fontSize: 40,
    paddingTop: 15,
    paddingLeft: 10,
    fontWeight: '500',
  },
  text: {
    fontSize: 15,
    paddingTop: 15,
    paddingLeft: 10,
    paddingBottom: 20,
    fontWeight: '400',
  },
});

export default Reserve;
