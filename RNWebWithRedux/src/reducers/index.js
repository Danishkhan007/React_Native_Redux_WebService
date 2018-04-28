import { combineReducers } from 'redux';
import WebServiceReducer from './WebServiceReducer';

export default combineReducers({
    web: WebServiceReducer,
});
