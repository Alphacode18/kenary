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
  return (
    <Layout>
      {!booking ? null : (
        <Button
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: 'black',
            width: 0.3 * width,
            height: 30,
          }}
          onPress={handleReservation}
        >
          <Text>Book | $15</Text>
        </Button>
      )}
    </Layout>
  );
};

export default Reserve;
