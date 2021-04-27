import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Authentication, Authenticated } from './navigation/_Export';
import Firebase from './config/Firebase';
import { initialize } from './Amplitude';

initialize();

export default () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  Firebase.auth().onAuthStateChanged((user) => {
    user ? setIsAuthenticated(true) : setIsAuthenticated(false);
  });
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        {isAuthenticated ? <Authenticated /> : <Authentication />}
      </ApplicationProvider>
    </>
  );
};
