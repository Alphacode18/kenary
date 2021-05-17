import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { Layout } from '@ui-kitten/components';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const { height, width } = Dimensions.get('screen');

const HeaderImage = ({ image, navigation }) => {
  return (
    <Layout>
      <ImageBackground
        source={{ uri: image }}
        style={{ width: width, height: 0.4 * height }}
      >
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <FontAwesome5Icon
            name='arrow-circle-left'
            size={30}
            style={styles.header}
            color={'white'}
          />
        </TouchableWithoutFeedback>
      </ImageBackground>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingLeft: 10,
  },
});

export default HeaderImage;
