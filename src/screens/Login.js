import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import {
  Layout,
  Text,
  Input,
  Button,
  Spinner,
  Icon,
} from '@ui-kitten/components';
import Firebase from '../../config/Firebase';

export default Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const handleLogin = () => {
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
        <Input
          style={styles.inputBox}
          placeholder='Email'
          autoCapitalize={'none'}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <Input
          style={styles.inputBox}
          value={password}
          placeholder='Password'
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={(password) => setPassword(password)}
        />
        <Button
          onPress={handleLogin}
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
