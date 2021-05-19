import React from 'react';
import { StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Layout, Text, Input, Icon, Avatar } from '@ui-kitten/components';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Categories from '../components/Categories';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const SearchIcon = (props) => (
  // TODO: Add function to search
  <TouchableWithoutFeedback
    onPress={() => {
      Keyboard.dismiss();
    }}
  >
    <Icon {...props} name='search-outline' />
  </TouchableWithoutFeedback>
);

export default Explore = () => {
  return (
    // <DismissKeyboard>
    //   <Layout style={styles.container}>
    //     <Layout style={styles.search}>
    //       <Input
    //         autoCapitalize='none'
    //         autoCorrect={false}
    //         status='info'
    //         placeholder='What do you want to do?'
    //         style={{
    //           borderRadius: 25,
    //           borderColor: '#cc7722',
    //           alignItems: 'flex-start',
    //           width: '95%',
    //           marginTop: 100,
    //           marginBottom: 55,
    //         }}
    //         textStyle={{ color: '#000' }}
    //         accessoryRight={SearchIcon}
    //       />
    //       <Text
    //         category='h4'
    //         style={{ color: 'white', alignSelf: 'flex-start', marginLeft: 20 }}
    //       >
    //         Categories
    //       </Text>
    //       <Layout
    //         style={{
    //           flex: 0.5,
    //           flexDirection: 'row',
    //           justifyContent: 'space-between',
    //           backgroundColor: '#cc7722',
    //         }}
    //       >
    //         <Categories pack={'ionicon'} icon={'beer-outline'} />
    //         <Categories pack={'ionicon'} icon={'book-outline'} />
    //         <Categories pack={'ionicon'} icon={'fast-food-outline'} />
    //         <Categories pack={'ionicon'} icon={'bicycle-outline'} />
    //       </Layout>
    //     </Layout>
    //     <Layout style={styles.container}>
    //       <Text category='h1'>Explore</Text>
    //     </Layout>
    //   </Layout>
    // </DismissKeyboard>
    <Layout style={styles.container}>
      <Text category='h1'>Explore</Text>
    </Layout>
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
