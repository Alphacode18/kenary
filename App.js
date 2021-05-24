import React, { useEffect, useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Authentication, Authenticated } from './navigation/_Export';
import Firebase from './config/Firebase';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync()
  .then()
  .catch((error) => console.log(error));

export default () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 1000);
    Firebase.auth().onAuthStateChanged((user) => {
      user ? setIsAuthenticated(true) : setIsAuthenticated(false);
    });
  }, []);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        {isAuthenticated ? <Authenticated /> : <Authentication />}
      </ApplicationProvider>
    </>
  );
};
