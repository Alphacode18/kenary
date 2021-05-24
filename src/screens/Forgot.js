import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Layout, Text, Input, Button, Spinner } from '@ui-kitten/components';
import Firebase from '../../config/Firebase';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import ValidatedInput from './components/ValidatedInput';

const forgotPasswordValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
});

export default Forgot = () => {
  const [status, setStaus] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = ({ email }) => {
    setLoading(true);
    Firebase.auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setLoading(false);
        setStaus(true);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
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
          Forgot Password?
        </Text>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={forgotPasswordValidationSchema}
          onSubmit={(values) => handleForgotPassword(values)}
        >
          {({ handleSubmit, isValid }) => (
            <>
              <Field
                component={ValidatedInput}
                name='email'
                placeholder='Email Address'
                keyboardType='email-address'
              />
              {status ? (
                <Text style={{ color: '#28A745' }}>
                  Email sent successfully
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
                  <Text style={{ color: 'white' }}>Send Email</Text>
                ) : (
                  <Spinner size='small' status='basic' />
                )}
              </Button>
            </>
          )}
        </Formik>
      </Layout>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
  },
  inputBox: {
    width: '85%',
    margin: 0,
    padding: 15,
    fontSize: 16,
    textAlign: 'center',
  },
});
