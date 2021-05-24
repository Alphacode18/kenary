import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  ImageBackground,
  Text,
} from 'react-native';
import { Layout, Button } from '@ui-kitten/components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default Onboarding = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout style={styles.container}>
        <ImageBackground
          source={require('../../assets/background.png')}
          style={styles.backgroundImage}
        >
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.minorCallToAction}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.tagline}>Experiences that create memories.</Text>
          <Button
            style={styles.majorCallToAction}
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: wp('100%'),
    height: hp('100%'),
    resizeMode: 'cover',
  },
  minorCallToAction: {
    top: hp('7.5%'),
    left: wp('100%') - wp('100%') / 6,
    fontSize: hp('1.75%'),
  },
  tagline: {
    top: hp('100%') - hp('100%') / 3 - 10,
    left: wp('12%'),
    fontSize: hp('3.5%'),
    width: wp('85%'),
  },
  majorCallToAction: {
    width: wp('75%'),
    top: hp('100%') - hp('100%') / 3.5 - 20,
    left: wp('100%') / 8,
    backgroundColor: 'black',
    borderRadius: 30,
    borderColor: 'black',
    height: 50,
  },
});
