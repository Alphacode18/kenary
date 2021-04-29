import React from 'react';
import { StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Layout, Text, Input } from '@ui-kitten/components';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default Explore = () => {
  return (
    <DismissKeyboard>
      <Layout style={styles.container}>
        <Layout style={styles.search}>
          <Input
            autoCapitalize='none'
            autoCorrect={false}
            status='info'
            placeholder='Search'
            style={{
              borderRadius: 25,
              borderColor: '#cc7722',
              alignItems: 'flex-start',
              width: '95%',
              marginVertical: 100,
            }}
            textStyle={{ color: '#000' }}
          />
        </Layout>
        <Layout style={styles.container}>
          <Text category='h1'>Explore</Text>
        </Layout>
      </Layout>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  search: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#cc7722',
    width: '100%',
    borderBottomRightRadius: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 10,
  },
});
