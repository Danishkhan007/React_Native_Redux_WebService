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

class Sports extends Component {
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
                    <Title>SPORTS</Title>
                </Body>
                <Right />
                </Header>
                <View style={styles.gallery}>
                    <Text style= {styles.text}>
                        'SPORTS GALLERY'
                    </Text>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    gallery: {
        flex: 1,
        backgroundColor: '#EBAA'
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

  export {Sports};