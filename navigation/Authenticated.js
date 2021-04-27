import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Dashboard from './../src/screens/Dashboard';

const Authenticated = createSwitchNavigator(
  {
    Dashboard: {
      screen: Dashboard,
    },
  },
  {
    initialRouteName: 'Dashboard',
  }
);

export default createAppContainer(Authenticated);
