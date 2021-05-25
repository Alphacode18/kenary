import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import { Layout, Button, Spinner } from '@ui-kitten/components';
import Firebase from '../../config/Firebase';
import { Formik, Field } from 'formik';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ValidatedInput from './components/ValidatedInput';
import loginValidationSchema from './validation/Login';

export default Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = ({ email, password }) => {
    setLoading(true);
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.toString().split(': ')[1]);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout style={styles.container}>
        <Text style={styles.heroText}>Welcome Back!</Text>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginValidationSchema}
          onSubmit={(values) => handleLogin(values)}
        >
          {({ handleSubmit, isValid }) => (
            <>
              <Field
                component={ValidatedInput}
                name='email'
                placeholder='Email Address'
                keyboardType='email-address'
              />
              <Field
                component={ValidatedInput}
                name='password'
                placeholder='Password'
                secureTextEntry
              />

              {error.length !== 0 ? (
                <Text style={styles.errorText}>{error}</Text>
              ) : (
                <></>
              )}
              {isValid ? (
                <Button
                  onPress={handleSubmit}
                  disabled={!isValid}
                  style={styles.validSubmit}
                  appearance='outline'
                >
                  {loading === false ? (
                    <Text
                      style={{
                        color: 'white',
                      }}
                    >
                      Login
                    </Text>
                  ) : (
                    <Spinner size='small' status={'basic'} />
                  )}
                </Button>
              ) : (
                <Button
                  onPress={handleSubmit}
                  disabled={!isValid}
                  style={styles.invalidSubmit}
                  appearance='outline'
                >
                  {loading === false ? (
                    <Text
                      style={{
                        color: 'white',
                      }}
                    >
                      Login
                    </Text>
                  ) : (
                    <Spinner size='small' status={'basic'} />
                  )}
                </Button>
              )}
            </>
          )}
        </Formik>

        <TouchableOpacity
          style={{ color: 'white', marginTop: 40 }}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text>
            <Text>Do not have an account yet? </Text>
            <Text style={{ textDecorationLine: 'underline' }}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ color: 'white', marginTop: 40 }}
          onPress={() => navigation.navigate('Forgot')}
        >
          <Text>
            <Text style={{ textDecorationLine: 'underline' }}>
              Forgot Your Password ?
            </Text>
          </Text>
        </TouchableOpacity>
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
  inputBox: {
    width: wp('85%'),
    margin: 0,
    padding: wp('5%'),
    fontSize: hp('3.5%'),
    textAlign: 'center',
    backgroundColor: 'white',
    borderColor: 'white',
    borderBottomColor: 'black',
  },
  heroText: {
    padding: 20,
    marginTop: 50,
    fontSize: hp('3.5%'),
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    paddingVertical: 10,
  },
  validSubmit: {
    width: wp('75%'),
    backgroundColor: 'black',
    borderRadius: 30,
    borderColor: 'black',
    height: 50,
    marginTop: 20,
  },
  invalidSubmit: {
    width: wp('75%'),
    backgroundColor: 'grey',
    borderRadius: 30,
    borderColor: 'grey',
    height: hp('5%'),
    marginTop: 20,
  },
});
