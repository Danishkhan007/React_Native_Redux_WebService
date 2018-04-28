/*
 * @Author: Mohd Danish Khan 
 * @Date:2018-04-25
 *  
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ConfigureStore from './store/ConfigureStore';
import {HomeScreenDrawerNav} from './config/Router'

class App extends Component {
render() {
    //applymidleware is store enhencer
    const store = ConfigureStore();
        /* connects different connect tags and insure the 
        get access to store grab all state and pass */
    return (
        <Provider store={store}>
            <HomeScreenDrawerNav />
         </Provider>
      );
    }
}

export default App;
