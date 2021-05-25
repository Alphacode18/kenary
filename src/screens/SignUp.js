import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import { Layout, Button, Spinner } from '@ui-kitten/components';
import { Formik, Field } from 'formik';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Firebase, { db } from '../../config/Firebase';
import ValidatedInput from './components/ValidatedInput';
import signUpValidationSchema from './validation/SignUp';

export default SignUp = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = ({ name, email, password }) => {
    setLoading(true);
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setLoading(false);
        if (response.user.uid) {
          const user = {
            uid: response.user.uid,
            name: name,
            email: email,
          };
          db.collection('users').doc(response.user.uid).set(user);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err.toString().split(': ')[1]);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout style={{ flex: 1 }}>
        <Layout style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <FontAwesome5Icon name='chevron-left' size={30}>
              <Text>{'\t  '}</Text>
            </FontAwesome5Icon>
          </TouchableWithoutFeedback>
        </Layout>
        <Layout style={styles.container}>
          <Text style={styles.heroText}>Ready For Adventures?</Text>
          <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={(values) => {
              handleSignUp(values);
            }}
          >
            {({ handleSubmit, isValid }) => (
              <>
                <Field
                  component={ValidatedInput}
                  name='name'
                  placeholder='Name'
                />
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
                />
                <Field
                  component={ValidatedInput}
                  name='confirmPassword'
                  placeholder='Confirm Password'
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
                        Sign Up
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
                        Sign Up
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
            onPress={() => navigation.navigate('Login')}
          >
            <Text>
              <Text>Already have an account? </Text>
              <Text style={{ textDecorationLine: 'underline' }}>Login</Text>
            </Text>
          </TouchableOpacity>
        </Layout>
      </Layout>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    paddingTop: hp('3%'),
    paddingLeft: wp('5.5%'),
  },
  container: {
    flex: 3,
    alignItems: 'center',
    paddingBottom: hp('11%'),
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
