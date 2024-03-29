import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { Layout, Text, ListItem } from '@ui-kitten/components';
const { width } = Dimensions.get('screen');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default AttractionElement = ({ item }) => {
  return (
    <>
      <TouchableWithoutFeedback>
        <ListItem>
          <Layout style={styles.container}>
            <Layout style={{ flex: 3 }}>
              <Image source={{ uri: item.uri }} style={styles.image} />
            </Layout>
            <Layout style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
            </Layout>
          </Layout>
        </ListItem>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('50%'),
    height: wp('50%'),
    borderWidth: 0.5,
    borderColor: '#dddddd',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    elevation: 10,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  textContainer: {
    flex: 0.5,
    justifyContent: 'space-evenly',
    paddingLeft: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  name: { fontSize: hp('1.5%'), color: '#000' },
});
