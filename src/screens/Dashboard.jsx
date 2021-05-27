import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Layout,
} from '@ui-kitten/components';
import { Platform } from 'react-native';
import { Profile, Circles, Explore } from './_Export';
import HomeStack from '../../navigation/HomeStack';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = (props) => <Icon {...props} name='home-outline' />;
const ExploreIcon = (props) => <Icon {...props} name='compass-outline' />;
const CircleIcon = (props) => (
  <Icon {...props} name='radio-button-off-outline' />
);

const BottomTabBar = ({ navigation, state }) => (
  <Layout>
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
      style={{ marginBottom: Platform.OS === 'ios' ? 20 : 0 }}
    >
      <BottomNavigationTab title='Home' icon={HomeIcon} />
      <BottomNavigationTab title='Explore' icon={ExploreIcon} />
      <BottomNavigationTab title='Circles' icon={CircleIcon} />
      {/* <BottomNavigationTab title='Me' icon={PersonIcon} /> */}
    </BottomNavigation>
  </Layout>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name='Home' component={HomeStack} />
    <Screen name='Explore' component={Explore} />
    <Screen name='Circle' component={Circles} />
    <Screen name='Profile' component={Profile} />
  </Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

export default AppNavigator;
