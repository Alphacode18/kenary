import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../src/screens/containers/Home';
import SeeAll from '../src/screens/SeeAll';
import Listing from '../src/screens/Listing';
import Settings from '../src/screens/Settings';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='See All'
        component={SeeAll}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Listing'
        component={Listing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Settings'
        component={Settings}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
