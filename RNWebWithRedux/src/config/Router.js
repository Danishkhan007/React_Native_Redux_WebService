/*
 * @Author: Mohd Danish Khan 
 * @Date:2018-04-28
 *  
 */

import React from 'react';
import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from '../component/container/homescreen/HomeScreen';
import SideBar from '../component/container/sidebar/SideBar';
import NewsList from '../component/container/newsscreen/NewsList';
import NewsDetail from '../component/container/newsscreen/NewsDetail';
import { Button, Text, Icon, Footer, FooterTab } from 'native-base';

//-------------------Example of StackNavigator -------------------------//

  export const NewsScreenStackNav = StackNavigator (
    {
        NewsList: {
            screen: NewsList,
            navigationOptions: {
              title: 'Top Headlines'
            }
        },
       NewsDetail: {
         screen: NewsDetail,
         navigationOptions:{
            title: 'News Details'
         }
       }
    });

  //-------------------Example of DrawerNavigation -------------------------//

export const HomeScreenDrawerNav = DrawerNavigator(
    {
        Home: { 
            screen: HomeScreen
            },
        News: {
            screen: NewsScreenStackNav
        }
    },
    {
      contentComponent: props => <SideBar {...props} />
    }
  );

  