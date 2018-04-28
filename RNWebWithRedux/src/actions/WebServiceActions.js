import { 
        REACHABILTY_ACTION, 
        SPINNER_LOADING_ACTION,
        REQUEST_SUCCESS_ACTION,
        REQUEST_FAIL_ACTION, 
        DATA_MANAGER,
    } from '../appConstant/Constant';


//-----------Action to check connectivity-------------------//
export const reachability = (isConnected) => {
        debugger;
        return {
            type: REACHABILTY_ACTION,
            payload: isConnected
    };
};

//-------------------------Get Request Action-------------------------------------------------//

export const getRequestAction = (url: String, header: Object = '', parameter: Object = '') => {
    debugger;
    //dispatch a action to show loading spinner while data is being fetched.
    return (dispatch) => {
        dispatch({ type: SPINNER_LOADING_ACTION });
        debugger;
        /*Datamanager wrapper can be replaced with webservice wrapper
        directly or redux-logic library
        */
        DATA_MANAGER.getRequestService(url, header, parameter)
        .then(jsonResponse => requestSuccess(dispatch, jsonResponse))
        .catch(error => requestFail(dispatch, error));
    }
};

//----------------------- Post Request action -------------------------------------------------//
export const postRequestAction = (url: String, header: Object = '', parameter: Object = '') => {
    debugger;
    return (dispatch) => {
        dispatch({ type: SPINNER_LOADING_ACTION });
        debugger;
        /*Datamanager wrapper can be replaced with webservice wrapper
        directly or redux-logic library
        */
        DATA_MANAGER.postRequestService(url, header, parameter)
        .then(jsonResponse => resquestSuccess(dispatch, jsonResponse))
        .catch(error => requestFail(dispatch, error));
    }
};

//---------------- Action handling async response --------------------// 
const requestSuccess = ( dispatch, data ) => {
    dispatch({
        type: REQUEST_SUCCESS_ACTION,
        payload: data
    });
};

const requestFail = ( dispatch, error ) => {
    dispatch({
        type: REQUEST_FAIL_ACTION,
        payload: error
    });
};
