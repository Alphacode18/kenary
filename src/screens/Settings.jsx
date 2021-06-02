import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import { Layout, List, Avatar, Divider } from '@ui-kitten/components';
import Firebase from '../../config/Firebase';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('user');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('Reading Error');
  }
};

const Settings = ({ route, navigation }) => {
  const [userData, setUserData] = useState(null);
  const { userProfile } = route.params;
  useEffect(() => {
    getUserData().then((userData) => setUserData(userData));
  }, []);
  const handleImageUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    if (!result.cancelled) {
      let uri = result.uri;
      let imageName = `${userData.name.split(' ')[0]}.jpg`;
      let cleanedURI = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
      const uploadURI = cleanedURI.substring(
        cleanedURI.lastIndexOf('/') + 1,
        cleanedURI.length
      );

      console.log(uri);
      console.log(imageName);
      Firebase.storage()
        .ref(imageName)
        .putString(uploadURI)
        .then((snapshot) => {
          console.log(`${imageName} has been successfully uploaded.`);
        })
        .catch((e) => console.log('uploading image error => ', e));
    }
  };
  return (
    <Layout style={styles.layout}>
      <ScrollView>
        <SafeAreaView>
          <Layout style={styles.header}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <FontAwesome5Icon name='chevron-left' size={25} color={'grey'}>
                <Text style={{ color: 'black' }}>{'\t Settings'}</Text>
              </FontAwesome5Icon>
            </TouchableWithoutFeedback>
          </Layout>
          <Divider style={{ marginTop: 10 }} />
          <Layout style={styles.header}>
            <Layout>
              <Avatar
                source={{ uri: userProfile }}
                size={'giant'}
                style={{
                  marginLeft: wp('5%'),
                  marginBottom: wp('5%'),
                  backgroundColor: 'black',
                }}
              />
              <TouchableOpacity>
                <Text
                  style={{
                    marginLeft: wp('7%'),
                    color: '#0000FF',
                    fontSize: hp('1.5'),
                    fontWeight: '500',
                  }}
                >
                  {'Edit'}
                </Text>
              </TouchableOpacity>
            </Layout>
          </Layout>
          <Divider style={{ marginTop: 10 }} />
        </SafeAreaView>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 25 : 30,
    marginLeft: wp('4%'),
  },
});

export default Settings;
