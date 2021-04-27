import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  Keyboard,
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
import { events, initialize, track } from '../../Analytics';

export default SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);

  const AlertIcon = (props) => <Icon {...props} name='alert-circle-outline' />;

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const handleSignUp = () => {
    setLoading(true);
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
        track(events.REGISTRATIONS);
        navigation.navigate('Home');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout style={styles.container} level={'1'}>
        <Text category='h1' style={{ padding: 20, marginTop: 50 }}>
          Welcome To Kenary!
        </Text>
        <Input
          style={styles.inputBox}
          autoCapitalize='none'
          value={username}
          placeholder='Username'
          onChangeText={(username) => setUsername(username)}
        />
        <Input
          style={styles.inputBox}
          placeholder='Email'
          autoCapitalize='none'
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
        <Input
          style={styles.inputBox}
          value={confirmPassword}
          placeholder='Confirm Password'
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={(confirmPassword) =>
            setConfirmPassword(confirmPassword)
          }
        />
        <Button
          onPress={handleSignUp}
          style={{ width: '50%', borderRadius: 20, marginTop: 20 }}
          appearance='outline'
        >
          {loading === false ? <Text>Sign Up</Text> : <Spinner size='small' />}
        </Button>
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
