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
import { Business, Sports, Film} from '../component/container/gallery';
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

    //-------------------Example of TabNavigagion -------------------------//

    export const GalleryScreenTabNav = TabNavigator (
      {
          Business: {
            screen: Business,
            navigationOptions: {
              title: 'Business Gallery'
            }
          },
          Sp: {
              screen: Sports,
              navigationOptions: {
                title: 'Sports Gallery'
              }
          },
         Film: {
           screen: Film,
           navigationOptions:{
              title: 'Film Gallery'
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
        },
        Gallery: {
          screen: GalleryScreenTabNav
        },

        Setting: {
          screen: HomeScreen
        }

    },
    {
      contentComponent: props => <SideBar {...props} />
    }
  );

  