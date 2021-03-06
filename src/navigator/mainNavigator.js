import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile63610Navigator from '../features/UserProfile63610/navigator';
import Maps63591Navigator from '../features/Maps63591/navigator';
import Settings63569Navigator from '../features/Settings63569/navigator';
import Settings63554Navigator from '../features/Settings63554/navigator';
import NotificationList63553Navigator from '../features/NotificationList63553/navigator';
import Maps63552Navigator from '../features/Maps63552/navigator';
import UserProfile63551Navigator from '../features/UserProfile63551/navigator';
import Maps63532Navigator from '../features/Maps63532/navigator';
import Settings63510Navigator from '../features/Settings63510/navigator';
import Settings63495Navigator from '../features/Settings63495/navigator';
import NotificationList63494Navigator from '../features/NotificationList63494/navigator';
import Maps63493Navigator from '../features/Maps63493/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile63610: { screen: UserProfile63610Navigator },
Maps63591: { screen: Maps63591Navigator },
Settings63569: { screen: Settings63569Navigator },
Settings63554: { screen: Settings63554Navigator },
NotificationList63553: { screen: NotificationList63553Navigator },
Maps63552: { screen: Maps63552Navigator },
UserProfile63551: { screen: UserProfile63551Navigator },
Maps63532: { screen: Maps63532Navigator },
Settings63510: { screen: Settings63510Navigator },
Settings63495: { screen: Settings63495Navigator },
NotificationList63494: { screen: NotificationList63494Navigator },
Maps63493: { screen: Maps63493Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
