import { StackNavigator } from 'react-navigation';
import Profile from './Profile.js';
import EditScreenOne from './EditScreenOne.js';
import EditScreenTwo from './EditScreenTwo.js';

export default (DrawNav = StackNavigator({
  Profile: { screen: Profile },
  EditScreenOne: { screen: EditScreenOne },
  EditScreenTwo: { screen: EditScreenTwo }
}));
