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
import * as yup from 'yup';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Firebase, { db } from '../../config/Firebase';
import ValidatedInput from './components/ValidatedInput';

const signUpValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/(\w.+\s).+/, 'Please enter your full name')
    .required('Full name is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});

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
          <Text
            style={{
              padding: 20,
              marginTop: 50,
              fontSize: 30,
            }}
          >
            Ready For Adventures?
          </Text>
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
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 12,
                      paddingVertical: 10,
                    }}
                  >
                    {error}
                  </Text>
                ) : (
                  <></>
                )}
                <Button
                  onPress={handleSubmit}
                  disabled={!isValid}
                  style={{
                    width: '75%',
                    backgroundColor: 'black',
                    borderRadius: 30,
                    borderColor: 'black',
                    height: 50,
                    marginTop: 20,
                  }}
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
    paddingTop: 25,
    paddingLeft: 25,
  },
  container: {
    flex: 3,
    alignItems: 'center',
    paddingBottom: 100,
  },
  inputBox: {
    width: '85%',
    margin: 0,
    padding: 15,
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: 'white',
    borderColor: 'white',
    borderBottomColor: 'black',
  },
});
