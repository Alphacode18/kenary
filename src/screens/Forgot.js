import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Layout, Text, Input, Button, Spinner } from '@ui-kitten/components';
import Firebase from '../../config/Firebase';

export default Forgot = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = () => {
    setLoading(true);
    Firebase.auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout style={styles.container} level={'1'}>
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
        <Input
          style={styles.inputBox}
          placeholder='Email'
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <Button
          onPress={handleForgotPassword}
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
            <Text style={{ color: 'white' }}>Sign Up</Text>
          ) : (
            <Spinner size='small' status={'basic'} />
          )}
        </Button>
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
