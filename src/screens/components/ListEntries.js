import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { Layout, Text, ListItem } from '@ui-kitten/components';
const { width } = Dimensions.get('screen');

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
    >
      <Layout style={styles.container}>
        <Layout style={{ flex: 3 }}>
          <Image source={{ uri: image }} style={styles.image} />
        </Layout>
        <Layout style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
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
          <Text style={styles.divider}>
            - - - - - - - - - - - - - - - - - - - - - - - - -
          </Text>
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
    width: width / 2 - 20,
    height: width / 2,
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
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingLeft: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  name: { fontSize: 12, fontWeight: 'bold', color: '#000' },
  keyword: { fontSize: 10, color: '#000' },
  text: { fontSize: 10, color: '#000', flexBasis: '50%' },
  rating: {
    fontSize: 10,
    color: '#000',
    marginLeft: 50,
  },
  divider: { fontSize: 10, color: '#e3e3e3' },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
