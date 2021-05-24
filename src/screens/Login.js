import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Text,
} from 'react-native';
import { Layout, Button, Spinner } from '@ui-kitten/components';
import Firebase from '../../config/Firebase';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import ValidatedInput from './components/ValidatedInput';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export default Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = ({ email, password }) => {
    setLoading(true);
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        Alert.alert('Username/Password did not match');
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout style={styles.container}>
        <Text
          style={{
            padding: 20,
            marginTop: 50,
            fontSize: 30,
            fontWeight: '400',
          }}
        >
          Welcome Back!
        </Text>
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
                  <Text style={{ color: 'white' }}>Login</Text>
                ) : (
                  <Spinner size='small' status='basic' />
                )}
              </Button>
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
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: '85%',
    margin: 10,
    padding: 15,
    fontSize: 20,
    textAlign: 'center',
  },
});
