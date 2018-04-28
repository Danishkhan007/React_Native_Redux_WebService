/*
 * @Author: Mohd Danish Khan 
 * @Date:2018-04-26
 *  
 */

import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import MainScreenNavigator from '../chatscreen/index.js';
import Profile from '../profilescreen/index';
import SideBar from '../sidebar/SideBar';

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Chat: { screen: MainScreenNavigator },
    Profile: { screen: Profile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
