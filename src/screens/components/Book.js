import React from 'react';
import { Dimensions } from 'react-native';
import { Layout, Text, Divider, Button } from '@ui-kitten/components';
import FeatherIcon from 'react-native-vector-icons/Feather';
import * as WebBrowser from 'expo-web-browser';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('screen');

const Reserve = ({ booking }) => {
  const handleReservation = async () => {
    await WebBrowser.openBrowserAsync(booking);
  };
  if (booking === undefined) {
    return null;
  } else {
    return (
      <Layout>
        <Button
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: 'black',
            width: 0.25 * width,
            height: 30,
          }}
          onPress={handleReservation}
        >
          <Text>Book</Text>
        </Button>
      </Layout>
    );
  }
};

export default Reserve;
