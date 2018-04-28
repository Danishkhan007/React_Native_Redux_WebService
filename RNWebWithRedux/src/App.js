import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ConfigureStore from './store/ConfigureStore';
import HomeScreen from './component/native_navigation/homescreen/index';

class App extends Component {
render() {
    //applymidleware is store enhencer
    const store = ConfigureStore();
        /* connects different connect tags and insure the 
        get access to store grab all state and pass */
    return (
        <Provider store={store}>
            <HomeScreen />
         </Provider>
      );
    }
}

export default App;
