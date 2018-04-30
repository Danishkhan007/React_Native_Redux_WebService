import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    Header,
    Button,
    Icon,
    Left, 
    Title,
    Right,
    Body,
    Container
} from 'native-base';

class Business extends Component {
    render() {
        return (
          <Container>
            <Header>
              <Left>
                <Button
                  transparent
                  onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                  <Icon name="menu" />
                </Button>
              </Left>
              <Body>
                <Title>BUSINESS</Title>
              </Body>
              <Right />
            </Header>
            <View style={styles.gallery}>

                <Text style= {styles.text}>
                    'BUSINESS GALLERY'
                </Text>
            </View>
          </Container>
        );
    }
};

Business.navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>BUSINESS</Title>
        </Body>
        <Right />
      </Header>
    )
  });

const styles = StyleSheet.create({
    gallery: {
        flex: 1,
         backgroundColor: '#ADDFAA'
    },
    text: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });

  export {Business};