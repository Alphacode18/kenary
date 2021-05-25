import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Layout, Text, Input, Button, Spinner } from '@ui-kitten/components';
import Firebase from '../../config/Firebase';
import { Formik, Field } from 'formik';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ValidatedInput from './components/ValidatedInput';
import forgotPasswordValidationSchema from './validation/Forgot';

export default Forgot = () => {
  const [status, setStaus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleForgotPassword = ({ email }) => {
    setLoading(true);
    Firebase.auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setLoading(false);
        setStaus(true);
      })
      .catch((err) => {
        setLoading(false);
        setStaus(false);
        setError(err.toString().split(': ')[1]);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout style={styles.container}>
        <Text style={styles.heroText}>Forgot Password?</Text>
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
                <Text style={styles.successText}>Email sent successfully</Text>
              ) : (
                <Text style={styles.errorText}>{error}</Text>
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
                      Send Email
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
                      Send Email
                    </Text>
                  ) : (
                    <Spinner size='small' status={'basic'} />
                  )}
                </Button>
              )}
            </>
          )}
        </Formik>
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
    width: wp('75%'),
  },
  successText: {
    color: 'green',
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
