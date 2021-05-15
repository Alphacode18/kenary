import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { Layout, Text, List } from '@ui-kitten/components';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import ListEntries from './components/ListEntries';

export default SeeAll = ({ route, navigation }) => {
  const { data } = route.params;

  const headerComponent = () => {
    return (
      <Layout style={styles.header}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <FontAwesome5Icon name='arrow-left' size='25' />
        </TouchableWithoutFeedback>
      </Layout>
    );
  };

  return (
    <Layout style={styles.container}>
      <SafeAreaView>
        <List
          style={{
            maxLength: 180,
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingLeft: 5,
          }}
          data={data}
          renderItem={({ item }) => (
            <ListEntries item={item} navigation={navigation} />
          )}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-around' }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={headerComponent}
        />
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
});
