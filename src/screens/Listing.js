import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Layout, Text, Button, Divider } from '@ui-kitten/components';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import openMap from 'react-native-open-maps';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
const { height, width } = Dimensions.get('screen');

export default Listing = ({ route }) => {
  const { name, image, description, keywords, navigation } = route.params;
  return (
    <Layout style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={image}
          style={{ width: width, height: 0.4 * height }}
        >
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <FontAwesome5Icon
              name='arrow-circle-left'
              size='30'
              style={styles.header}
              color={'white'}
            />
          </TouchableWithoutFeedback>
        </ImageBackground>
        <Text style={styles.heading}>{name}</Text>
        <FontAwesome5Icon
          name='star'
          size='20'
          style={{ paddingLeft: 10, paddingTop: 10 }}
          color={'red'}
        >
          <Text style={{ fontSize: 20 }}> 4.2</Text>
        </FontAwesome5Icon>
        <Text style={styles.text}>{description}</Text>
        <Divider
          style={{ width: 0.9 * width, marginLeft: 15, marginBottom: 15 }}
        />
        <Layout
          style={{
            flex: 1,
            flexDirection: 'row',
            alignContent: 'space-between',
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              width: 0.4 * width,
              marginLeft: 15,
              marginRight: 50,
              marginBottom: 10,
            }}
          >
            This experience might be enhanced by booking in advance.
          </Text>
          <Button
            style={{
              backgroundColor: 'teal',
              borderColor: 'teal',
              width: 0.35 * width,
              height: 50,
            }}
          >
            Book
          </Button>
        </Layout>
        <Divider
          style={{ width: 0.9 * width, marginLeft: 15, marginBottom: 15 }}
        />
        <Layout
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingBottom: 20,
          }}
        >
          <Button
            style={{
              borderRadius: 20,
              marginLeft: 10,
              marginBottom: 5,
              marginTop: 5,
            }}
            appearance='outline'
            disabled={true}
          >
            <Text style={{ color: 'teal' }}>{keywords}</Text>
          </Button>
          <Button
            style={{
              borderRadius: 20,
              marginLeft: 10,
              marginBottom: 5,
              marginTop: 5,
            }}
            appearance='outline'
            disabled={true}
          >
            <Text style={{ color: 'teal' }}>{keywords}</Text>
          </Button>
          <Button
            style={{
              borderRadius: 20,
              marginLeft: 10,
              marginBottom: 5,
              marginTop: 5,
            }}
            appearance='outline'
            disabled={true}
          >
            <Text style={{ color: 'teal' }}>{keywords}</Text>
          </Button>
          <Button
            style={{
              borderRadius: 20,
              marginLeft: 10,
              marginBottom: 5,
              marginTop: 5,
            }}
            appearance='outline'
            disabled={true}
          >
            <Text style={{ color: 'teal' }}>{keywords}</Text>
          </Button>
        </Layout>
        <Divider
          style={{ width: 0.9 * width, marginLeft: 15, marginBottom: 15 }}
        />
        <Layout
          styles={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: '500', padding: 15 }}>
            Location
          </Text>
          <MapView
            style={{
              width: 0.9 * width,
              height: 0.3 * height,
              marginLeft: 15,
              borderRadius: 10,
            }}
            minZoomLevel={15}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 40.4350353,
              longitude: -86.8975098,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            scrollEnabled={false}
            onPress={() => {
              openMap({
                query: name,
                provider: 'google',
                travelType: 'drive',
                navigate_mode: 'preview',
              });
            }}
          >
            <Marker
              coordinate={{ latitude: 40.4350353, longitude: -86.8975098 }}
            />
          </MapView>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
