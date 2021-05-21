import React from 'react';
import { Dimensions } from 'react-native';
import { Layout, Text, Divider, Button } from '@ui-kitten/components';

const { width } = Dimensions.get('screen');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Tags = ({ keywords }) => {
  return (
    <Layout>
      <Layout
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingBottom: 20,
        }}
      >
        {keywords.map((keyword) => {
          return (
            <Button
              style={{
                borderRadius: 20,
                marginLeft: 10,
                marginBottom: 5,
                marginTop: 5,
              }}
              key={keyword}
              appearance='outline'
              disabled={true}
            >
              <Text style={{ color: 'teal', fontSize: hp('1.5%') }}>
                {keyword}
              </Text>
            </Button>
          );
        })}
      </Layout>
      <Divider
        style={{ width: 0.9 * width, marginLeft: 15, marginBottom: 15 }}
      />
    </Layout>
  );
};

export default Tags;
