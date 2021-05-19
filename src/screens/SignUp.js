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
  Select,
  SelectItem,
  IndexPath,
} from '@ui-kitten/components';
import Firebase, { db } from '../../config/Firebase';
import { events, initialize, track } from '../../Analytics';

export default SignUp = ({ navigation }) => {
  const cities = ['West Lafayette', 'Lafayette'];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const displayValue = cities[selectedIndex.row];

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
    if (password === confirmPassword) {
      Firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          setLoading(false);
          if (response.user.uid) {
            const user = {
              uid: response.user.uid,
              name: name,
              email: email,
              city: displayValue,
            };
            db.collection('users').doc(response.user.uid).set(user);
          }
        })
        .catch((error) => {
          setLoading(false);
          Alert.alert(error);
        });
    } else {
      setLoading(false);
      Alert.alert('Passwords do not match. Please try again');
    }
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
          Ready For Adventures?
        </Text>
        <Input
          style={styles.inputBox}
          placeholder='Name'
          autoCapitalize='none'
          value={name}
          onChangeText={(name) => setName(name)}
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
        <Select
          style={styles.inputBox}
          placeholder='City'
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
          value={displayValue}
        >
          {cities.map((city) => {
            return <SelectItem key={city} title={city} />;
          })}
        </Select>
        <Button
          onPress={handleSignUp}
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
            <Spinner size='small' />
          )}
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: '85%',
    margin: 0,
    padding: 15,
    fontSize: 16,
    textAlign: 'center',
  },
});
