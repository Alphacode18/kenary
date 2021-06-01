import React, { useEffect, useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Authentication, Authenticated } from './navigation/_Export';
import { initialize, events, track } from './Analytics';
import Firebase from './config/Firebase';
import * as SplashScreen from 'expo-splash-screen';
import * as Location from 'expo-location';

initialize();

SplashScreen.preventAutoHideAsync()
  .then()
  .catch((error) => console.log(error));

export default () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    //track(events.APP_OPEN);
    Firebase.auth().onAuthStateChanged((user) => {
      user ? setIsAuthenticated(true) : setIsAuthenticated(false);
    });
    (async () => {
      await Location.requestForegroundPermissionsAsync();
    })();
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 1000);
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
