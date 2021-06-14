import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Divider, Button } from '@ui-kitten/components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Tags = ({ keywords }) => {
  return (
    <Layout>
      {!keywords ? null : (
        <Layout>
          <Layout style={styles.keywordsContainer}>
            {keywords.map((keyword) => {
              return (
                <Button
                  appearance='outline'
                  key={keyword}
                  size={'small'}
                  style={styles.keyword}
                >
                  <Text style={styles.keywordText}>{keyword}</Text>
                </Button>
              );
            })}
          </Layout>
          <Divider style={styles.divider} />
        </Layout>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  keywordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: wp('5%'),
    marginRight: wp('2%'),
    marginBottom: hp('2%'),
  },
  keyword: {
    borderRadius: 25,
    backgroundColor: 'white',
    borderColor: '#DFDFDF',
    marginVertical: wp('2%'),
    marginLeft: wp('1.5%'),
  },
  keywordText: {
    color: '#5B5B5B',
    fontSize: hp('1.5%'),
  },
  divider: {
    width: wp('90%'),
    marginLeft: wp('6%'),
    marginBottom: 15,
  },
});

export default Tags;
