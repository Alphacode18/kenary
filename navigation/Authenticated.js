import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Home } from '../src/screens/_Export';

const Authenticated = createSwitchNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(Authenticated);
