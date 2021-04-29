import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Layout,
} from '@ui-kitten/components';
import { Home, Profile, Circles, Recommendations } from './_Export';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = (props) => <Icon {...props} name='compass-outline' />;
const CircleIcon = (props) => (
  <Icon {...props} name='radio-button-off-outline' />
);
const PersonIcon = (props) => <Icon {...props} name='person-outline' />;
const RecommendationIcon = (props) => <Icon {...props} name='flash-outline' />;

const BottomTabBar = ({ navigation, state }) => (
  <Layout>
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
      style={{ marginBottom: 20 }}
    >
      <BottomNavigationTab title='Explore' icon={HomeIcon} />
      <BottomNavigationTab title='Deals' icon={RecommendationIcon} />
      <BottomNavigationTab title='Circles' icon={CircleIcon} />
      <BottomNavigationTab title='Me' icon={PersonIcon} />
    </BottomNavigation>
  </Layout>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name='Home' component={Home} />
    <Screen name='Recommendations' component={Recommendations} />
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
