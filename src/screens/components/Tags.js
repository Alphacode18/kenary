import React from 'react';
import { Layout, Text, Divider, Button } from '@ui-kitten/components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Tags = ({ keywords }) => {
  return (
    <Layout>
      <Layout
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginLeft: wp('5%'),
          marginRight: wp('8%'),
          marginBottom: hp('2%'),
        }}
      >
        {keywords &&
          keywords.map((keyword) => {
            return (
              <Button
                appearance='outline'
                style={{
                  borderRadius: 25,
                  backgroundColor: 'white',
                  borderColor: '#d3d3d3',
                  marginVertical: wp('2%'),
                  marginLeft: wp('1.5%'),
                }}
              >
                <Text style={{ color: 'grey', fontSize: hp('1.25%') }}>
                  {keyword}
                </Text>
              </Button>
            );
          })}
      </Layout>
      <Divider
        style={{
          width: wp('90%'),
          marginLeft: wp('6%'),
          marginBottom: 15,
        }}
      />
    </Layout>
  );
};

export default Tags;
