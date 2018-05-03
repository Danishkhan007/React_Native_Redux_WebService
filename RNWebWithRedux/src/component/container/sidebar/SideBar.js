/*
 * @Author: Mohd Danish Khan 
 * @Date:2018-04-26
 *  
 */

import React, { Component } from 'react';
import { Image, Alert, Platform } from 'react-native';
import { Container, Content, Text, List, ListItem, Button, Label } from 'native-base';
import DataManager from '../../../datamanager/DataManager';
import WebService from '../../../services/web_service_handler/WebService';

const routes = ['Home', 'News', 'Gallery', 'Setting'];
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
                uri: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Al_Jazeera_English_Doha_Newsroom_1.jpg'
                }}
                style={{
                height: 180,
                alignSelf: 'stretch',
                justifyContent: 'center',
                alignItems: 'center'
                }}
            />
          <List
            dataArray={routes}
            renderRow={(rowData, sectionID, rowID, higlightRow) => {
              debugger;
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
             <Button rounded danger style={styles.logoutButtonStyle}>
              <Text style={styles.logoutTextStyle}>LOG OUT</Text>
            </Button>
      </Container> 
    );
  }
}

      const styles = {
        logoutTextStyle: {
          ...Platform.select({
            ios: {
              flex:1
            }
          }),        
             textAlign: 'center'
        },
        logoutButtonStyle: {
          ...Platform.select({
            android: {
              flex:1,
            },
            height: 80,
          })
        }
    };

