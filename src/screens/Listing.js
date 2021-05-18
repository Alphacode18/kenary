import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Layout } from '@ui-kitten/components';
import HeaderImage from './components/HeaderImage';
import ListingInfo from './components/ListingInfo';
import Reserve from './components/Reserve';
import Tags from './components/Tags';
import Attractions from './components/Attractions';
import Timings from './components/Timings';
import ViewMap from './components/ViewMap';

export default Listing = ({ route }) => {
  const listingData = route.params.data;
  const navigation = route.params.navigation;
  const {
    name,
    description,
    rating,
    keywords,
    booking,
    coordinates,
    attractions,
    timings,
    image,
  } = listingData;
  return (
    <Layout style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderImage image={image} navigation={navigation} />
        <ListingInfo name={name} rating={rating} description={description} />
        <Reserve booking={booking} />
        <Tags keywords={keywords} />
        <Attractions attractions={attractions} />
        <Timings timings={timings} />
        <ViewMap name={name} coordinates={coordinates} />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
