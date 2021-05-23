import React from 'react';
import { Dimensions } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import openMap from 'react-native-open-maps';
const { height, width } = Dimensions.get('screen');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default ViewMap = ({ name, coordinates }) => {
  if (coordinates === undefined) {
    return <Layout></Layout>;
  } else {
    return (
      <Layout
        styles={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: hp('2.5'), fontWeight: '500', padding: 15 }}>
          Location
        </Text>
        <MapView
          style={{
            width: 0.9 * width,
            height: 0.3 * height,
            marginLeft: 15,
            borderRadius: 10,
            marginBottom: 20,
          }}
          minZoomLevel={15}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: coordinates['latitude'],
            longitude: coordinates['longitude'],
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          scrollEnabled={false}
          onPress={() => {
            openMap({
              query: `${name}, West Lafayette`,
              provider: 'google',
              travelType: 'drive',
              navigate_mode: 'preview',
            });
          }}
        >
          <Marker
            coordinate={{
              latitude: coordinates['latitude'],
              longitude: coordinates['longitude'],
            }}
          />
        </MapView>
      </Layout>
    );
  }
};
