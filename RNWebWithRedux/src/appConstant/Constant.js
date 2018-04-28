import DataManager from "../datamanager/DataManager";

export const DATA_MANAGER = DataManager.getInstance();

//---------------- ACTIONS ----------------------//
export const INCREMENT_ACTION = 'increment_action';
export const REACHABILTY_ACTION = 'reachabilty_action';
export const SPINNER_LOADING_ACTION = 'spinner_loading_action';
export const REQUEST_SUCCESS_ACTION = 'request_success_action';
export const REQUEST_FAIL_ACTION = 'request_fail_action';


//---------------- URL ------------------//
export const DUMMY_GET_URL = 'https://rallycoding.herokuapp.com/api/music_albums';
