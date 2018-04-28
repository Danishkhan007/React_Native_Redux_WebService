/*
 * @Author: Mohd Danish Khan 
 * @Date:2018-04-24
 *  
 */

import {
  NetInfo
} from 'react-native';

import WebServiceHandler from 'react-native-web-service-handler'; 

class WebService{

  //------------------------- GET REQUEST WRAPPER ------------------------------------------//
  getRequest(url: String, headerParam: Object = '', parameter: Object = '') {
    debugger;
    return new Promise (
      function (success, fail) {
        WebServiceHandler.get(url, headerParam, parameter)
        .then(function(jsonResponse) {
          console.log('************************ WEBSERVICE RECIVED GET JSON RESPONSE ************************ ');
          return jsonResponse;
        })
        .then(function(response) {
          console.log('************************ SENDING GET PROMISE TO ACTION ************************ ');
          return success(response);
        })
       .catch(function(error) {
          return fail(error);
       });
      });
  }

  //---------------------------- Post Request WRAPPER--------------------------//

  postRequest(url: String, headerParam: Object = '', parameter: Object = '') {
    debugger;
    return new Promise (
      function (success, fail) {
        WebServiceHandler.post(url, headerParam, parameter)
        .then(function(jsonResponse) {
          console.log('************************ WEBSERIVE RECIVED POST RESPONSE ************************ ');
          return jsonResponse;
        })
        .then(function(response) {
          console.log('************************ SENDING POST PROMISE TO ACTION ************************ ');
          return success(response);
        })
       .catch(function(error) {
          return fail(error);
       });
      });
  }

  //----------------------- Reachability -----------------------------------//

  addReachabilityListener(listener) {
        NetInfo.isConnected.addEventListener('connectionChange', listener);
  }  

  removeReachabilityListener(listener) {
        NetInfo.isConnected.removeEventListener('connectionChange', listener);
    }
  }

  export default WebService;
    