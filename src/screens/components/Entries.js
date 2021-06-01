import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Layout, Text, ListItem, Divider } from '@ui-kitten/components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default Entries = ({ item, navigation }) => {
  const { name, image, keywords, rating } = item;
  return (
    <ListItem
      onPress={() =>
        navigation.navigate('Listing', {
          data: item,
          navigation: navigation,
        })
      }
      style={{
        backgroundColor: 'white',
      }}
    >
      <Layout style={styles.container}>
        <Layout style={{ flex: 3 }}>
          <Image source={{ uri: image }} style={styles.image} />
        </Layout>
        <Layout style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Divider style={{ marginBottom: 15 }} />
          <Text>
            {keywords.map((keyword) => {
              return (
                <Text
                  key={keyword}
                  style={styles.keyword}
                >{`${keyword} | `}</Text>
              );
            })}
          </Text>
          <Divider style={{ marginBottom: 15 }} />
          <Layout style={styles.meta}>
            <Text style={styles.text}>$$</Text>
            <Text style={styles.rating}>{rating} / 5</Text>
          </Layout>
        </Layout>
      </Layout>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('50%'),
    height: wp('50%'),
    borderWidth: 0.5,
    borderColor: '#dddddd',
    borderRadius: 20,
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
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingLeft: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  name: {
    fontSize: hp('1.25%'),
    fontWeight: 'bold',
    color: '#000',
    marginTop: hp('1.5%'),
  },
  keyword: { fontSize: hp('1.1 %'), color: '#000' },
  text: {
    fontSize: hp('1.25%'),
    color: '#000',
    flexBasis: '50%',
  },
  rating: {
    fontSize: hp('1.25%'),
    color: '#000',
    marginLeft: wp('10%'),
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('1.5%'),
  },
});
