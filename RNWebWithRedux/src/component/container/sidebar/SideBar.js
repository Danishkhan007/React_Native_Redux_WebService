/*
 * @Author: Mohd Danish Khan 
 * @Date:2018-04-26
 *  
 */

import React, { Component } from 'react';
import { Image, Alert } from 'react-native';
import { Container, Content, Text, List, ListItem, Button, Label } from 'native-base';
import DataManager from '../../../datamanager/DataManager';
import WebService from '../../../services/web_service_handler/WebService';

const routes = ['Home', 'Profile', 'Chat', 'News', 'Contact Us', 'About Us'];
export default class SideBar extends Component {

  constructor() {
    super();
  }

  componentWillMount() {

  }

  componentDidMount() {
  }

  render() {
    return (
      <Container>
            <Image
                source={{
                uri: 'https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png'
                }}
                style={{
                height: 120,
                alignSelf: 'stretch',
                justifyContent: 'center',
                alignItems: 'center'
                }}
            />
            <Image
              square
              style={{ height: 80, width: 70 }}
              source={{
                uri: 'https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png'
              }}
            />
          <List
            dataArray={routes}
            renderRow={(rowData, sectionID, rowID, higlightRow) => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(rowData)}
                >
                  <Text>{rowData} </Text>
                </ListItem>

              );
            }}
          />
              debugger;
             <Button rounded warning >
               <Label style={styles.logoutButtonSytyle}> 
                Logout
               </Label>
            </Button>
      </Container> 
    );
  }
}

      const styles = {
        logoutButtonSytyle: {
            flex: 1
        }
    };

