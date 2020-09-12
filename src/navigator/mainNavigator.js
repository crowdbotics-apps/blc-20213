import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn42100675Navigator from '../features/SignIn42100675/navigator';
import SignUp23100674Navigator from '../features/SignUp23100674/navigator';
import UserProfile4100673Navigator from '../features/UserProfile4100673/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn42100675: { screen: SignIn42100675Navigator },
SignUp23100674: { screen: SignUp23100674Navigator },
UserProfile4100673: { screen: UserProfile4100673Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
