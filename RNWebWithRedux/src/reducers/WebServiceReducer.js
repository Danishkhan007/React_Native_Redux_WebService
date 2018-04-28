import { 
    INCREMENT_ACTION, 
    REACHABILTY_ACTION,
    SPINNER_LOADING_ACTION,
    REQUEST_SUCCESS_ACTION,
    REQUEST_FAIL_ACTION
     } from '../appConstant/Constant';

const INITIAL_STATE = {
    data: null,
    isConnected: true,
    loading: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REACHABILTY_ACTION:
        debugger;
            return {
                ...state,
                isConnected: action.payload
            };
        case REQUEST_SUCCESS_ACTION:
        debugger;
            return {
                ...state,
                ...INITIAL_STATE,
                data:action.payload
            };
        case REQUEST_FAIL_ACTION:
        debugger;
            return {
                ...state,
                loading: false,
                error: 'GET REQUEST FAILED'
            };
        case SPINNER_LOADING_ACTION:
            return {
                 ...state, 
                 loading: true, 
                 error: ''
            };
        default:
            return state;
    }
};
