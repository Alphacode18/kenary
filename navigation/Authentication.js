import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Authentication;
