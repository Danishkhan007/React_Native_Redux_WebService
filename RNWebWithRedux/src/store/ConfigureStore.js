/*
 * @Author: Mohd Danish Khan 
 * @Date:2018-04-24
 *  
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

export default function ConfigureStore() {
    const store = createStore(reducers, applyMiddleware(thunk));
    return store;
}
