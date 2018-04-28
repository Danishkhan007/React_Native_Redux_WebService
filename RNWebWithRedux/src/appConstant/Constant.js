import DataManager from "../datamanager/DataManager";

export const DATA_MANAGER = DataManager.getInstance();

//---------------- ACTIONS ----------------------//
export const INCREMENT_ACTION = 'increment_action';
export const REACHABILTY_ACTION = 'reachabilty_action';
export const SPINNER_LOADING_ACTION = 'spinner_loading_action';
export const REQUEST_SUCCESS_ACTION = 'request_success_action';
export const REQUEST_FAIL_ACTION = 'request_fail_action';


//----------------TEST URL ------------------//
//export const DUMMY_TEST_URL = 'https://rallycoding.herokuapp.com/api/music_albums';
export const DUMMY_TEST_URL = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1532bb55584b4c46b4a242f7a6427fc0';
/* These are the test url, in proper way, the url, key and category should be 
kept modular and reuseable*/