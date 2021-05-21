import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
const { height, width } = Dimensions.get('screen');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default Onboarding = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout style={styles.container} level={'1'}>
        <ImageBackground
          source={require('../../assets/background.png')}
          style={{ width: width, height: height, resizeMode: 'cover' }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                top: 60,
                left: width - width / 6,
                fontSize: hp('1.75%'),
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              top: height - height / 3 - 10,
              left: wp('12%'),
              fontSize: hp('4%'),
              width: '85%',
              fontWeight: '400',
            }}
          >
            Experiences that create memories.
          </Text>
          <Button
            style={{
              width: '75%',
              top: height - height / 3.5 - 20,
              left: width / 8,
              backgroundColor: 'black',
              borderRadius: 30,
              borderColor: 'black',
              height: 50,
            }}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={{ color: 'white' }}>Sign Up</Text>
          </Button>
        </ImageBackground>
      </Layout>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: '85%',
    margin: 0,
    padding: 15,
    fontSize: 16,
    textAlign: 'center',
  },
});
