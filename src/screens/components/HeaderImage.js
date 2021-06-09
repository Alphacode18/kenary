import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { Layout } from '@ui-kitten/components';
import AntIcon from 'react-native-vector-icons/AntDesign';

const { height, width } = Dimensions.get('screen');

const HeaderImage = ({ image, navigation }) => {
  return (
    <Layout>
      <ImageBackground
        source={{ uri: image }}
        style={{ width: width, height: 0.35 * height }}
        imageStyle={{ resizeMode: 'cover' }}
      >
        <SafeAreaView>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            {/* <AntIcon
              name='leftsquare'
              size={30}
              style={styles.header}
              color={'white'}
            /> */}
            <Layout
              style={{
                height: 30,
                width: 30,
                backgroundColor: 'white',
                borderRadius: 7,
              }}
            ></Layout>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </ImageBackground>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
});

export default HeaderImage;
