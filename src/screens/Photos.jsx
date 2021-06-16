import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  SafeAreaView,
} from 'react-native';
import { Layout } from '@ui-kitten/components';
import MasonryList from 'react-native-masonry-list';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Photos = ({ route, navigation }) => {
  const images = route.params.images;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Layout style={styles.container}>
        <Layout>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <FontAwesome5Icon
              name='chevron-left'
              size={25}
              style={{ paddingLeft: wp('2.5%'), paddingBottom: hp('2.5%') }}
            />
          </TouchableWithoutFeedback>
        </Layout>
        <MasonryList
          images={images}
          columns={2}
          imageContainerStyle={{ borderRadius: 20 }}
        />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Photos;
