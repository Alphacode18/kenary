import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding, SignUp, Login, Forgot } from '../src/screens/_Export';

const Stack = createStackNavigator();

function Authentication() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Onboarding'
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Forgot'
          component={Forgot}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Authentication;
