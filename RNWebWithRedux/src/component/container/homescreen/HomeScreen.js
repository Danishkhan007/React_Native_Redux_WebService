/*
 * @Author: Mohd Danish Khan 
 * @Date:2018-04-26
 *  
 */

import React, { Component } from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import { connect } from 'react-redux';
import { reachability, getRequestThunk } from '../../../actions/WebServiceActions';
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
      isConnected: false,
      value: 'False'
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
      if (this.props.data == null)
            this.props.getRequestThunk(DUMMY_TEST_URL);

        this.props.navigation.navigate('News');
    } else {
      Alert.alert('Check you internet connectivity..Its disconnected');
    }
  }

  renderGetRequestButton() {
    return (
      <Button 
            full rounded primary
            style={{ marginTop: 10 }}
            // onPress={() => this.props.navigation.navigate('Chat')}
            onPress={this.onGetRequestPressed.bind(this)}
      >
      <Text>BUSINESS HEADLINES</Text>
      </Button>

    );
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
          <Body>
            <Text> News World </Text>
          </Body>
          <Right/>
        </Header>
        
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Welcome to NewsWorld!</Text>
                <Text note>This app make use of newsapi.org for news updates.</Text>
                <Text> Network is connected: {this.props.value} </Text>
              </Body>
            </CardItem>
          </Card>
  
          <View>
            {this.renderGetRequestButton()}
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
    const { isConnected, loading, data } = state.web;
    value = isConnected? 'True': 'False';
    return{ isConnected, value, data }
  };

export default connect(mapStateToProps, { reachability, getRequestThunk })(HomeScreen);
