/*
 * @Author: Mohd Danish Khan 
 * @Date:2018-04-26
 *  
 */

import React, { Component } from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import { connect } from 'react-redux';
import { reachability, getRequestAction } from '../../../actions/WebServiceActions';
import { DUMMY_TEST_URL, DATA_MANAGER } from '../../../appConstant/Constant';
import 
{ Container,
    Header, 
    Title, 
    Left, 
    Icon, 
    Right, 
    Button, 
    Body, 
    Content, 
    Text, 
    Card,
    CardItem, 
    Label} from 'native-base';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isConnected: false
    };
    debugger;

    DATA_MANAGER.setWebServiceManager();
    this._connectivityListener = this._connectivityListener.bind(this);
  }

  componentWillMount() {
    debugger;
    DATA_MANAGER.addConnectivityListener(this._connectivityListener);
  }

  componentWillUnmount() {
    debugger;
    DATA_MANAGER.removeConnectivityListener(this._connectivityListener);
  }

  onGetRequestPressed() {
    debugger;
  
    if (this.props.isConnected) {
      //this.dataManager.getRequestService(DUMMY_TEST_URL);
      debugger;
      this.props.getRequestAction(DUMMY_TEST_URL);
    } else {
      Alert.alert('Check you internet connectivity..Its disconnected');
    }
  }

  renderGetRequestButton() {
    if (this.props.loading) {
        return <Spinner size="large" />;
    }

    return (
      <Button 
            full rounded dark
            style={{ marginTop: 10 }}
            // onPress={() => this.props.navigation.navigate('Chat')}
            onPress={this.onGetRequestPressed.bind(this)}
      >
      <Text>GET API</Text>
      </Button>
    );
  }

  renderGetResult() {
    debugger;
    if (this.props.data != null) {
      this.props.navigation.navigate('ResponseList')
    } 
  }



  //Connectivity listener
  _connectivityListener(isConnected) {
    debugger;
    this.props.reachability(isConnected);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')} 
            >
              <Icon name="menu" />
            </Button>
          </Left>

          {/* <Body>
            <Title>HomeScreen</Title>
          </Body> */}
          <Right>
            <Label
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')} 
            >
              Language
            </Label>
          </Right>
        </Header>
        
        <Content padder>
        {/* <Text style={styles.welcome}>
            {this.props.value}
          </Text>
          <Button onPress={this.onButtonPress.bind(this)} title='Click'>
           Click It
          </Button> */}
          <Card>
            <CardItem>
              <Body>
                <Text>WELCOME TO SPOTT!</Text>
                <Text> Network is connected: {this.props.value} </Text>
              </Body>
            </CardItem>
          </Card>
          <Button 
            full rounded dark
              style={{ marginTop: 10 }}
              onPress={() => this.props.navigation.navigate('Chat')}
          >
            <Text>Chat With People</Text>
          </Button>
          <Button 
            full rounded primary
              style={{ marginTop: 10 }}
              onPress={() => this.props.navigation.navigate('Profile')}
          >
            <Text>Goto Profiles</Text>
          </Button>

          {/* <Text style={styles.welcome}>
          {this.props.isConnected}
          </Text>
          <Button onPress={this.onButtonPress.bind(this)} title='Click'>
           Click It
          </Button> */}

          <View>
            {this.renderGetRequestButton()}
          </View>

           <Button 
            full rounded dark
              style={{ marginTop: 10 }}
              onPress={() => this.props.navigation.navigate('Chat')}
          >
            <Text>POST API</Text>
          </Button>

          <View>
            {this.renderGetResult()}
          </View>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const mapStateToProps = state => {
  debugger;
   const { isConnected, value, data } = state.web;
  return{ isConnected, value, data}
};

export default connect(mapStateToProps, { reachability, getRequestAction })(HomeScreen);

