import React, { Component } from 'react';
import {WebView} from 'react-native';
import { 
    Header, 
    Left, 
    Button, 
    Right, 
    Body,
    Title,
    Icon,
    Titile } from 'native-base';

class NewsDetails extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: (
          <Header>
            <Left>
              <Button transparent onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Story</Title>
            </Body>
            <Right />
          </Header>
        )
      });

    render() {
        const {params} = this.props.navigation.state;
        const url = params? params.url: '';
        return (
            <WebView  
                source={{uri:url}}
                style={{marginTop: 20}}
            />
        );
    }
}

export default NewsDetails;