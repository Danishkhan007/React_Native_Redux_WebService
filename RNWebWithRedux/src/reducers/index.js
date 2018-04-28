/*
 * @Author: Mohd Danish Khan 
 * @Date:2018-04-24
 *  
 */

import { combineReducers } from 'redux';
import WebServiceReducer from './WebServiceReducer';

export default combineReducers({
    web: WebServiceReducer,
});
