 import WebService from '../services/web_service_handler/WebService';
import { DATA_MANAGER } from '../appConstant/Constant';
 
 class DataManager {

    static singletonInstance = null;
    static getInstance() {
        debugger;
        if (this.singletonInstance == null) {
            this.singletonInstance = new DataManager();
        }

        return this.singletonInstance;
    }

    constructor() {
        this.state = {
            isConnected: false
        };
    }

    //----------------- web service methods ---------------------//
    setWebServiceManager() {
        debugger;
        if (this.webServiceManager == null) 
            this.webServiceManager = new WebService();
    }

    deallocateWebServiceManager() {
        this.webServiceManager = null;
    }
    
    //INTERNET CONNECTIVITY CHECK
    addConnectivityListener(listener) {
        debugger;
        this.webServiceManager.addReachabilityListener(listener);
    }

    removeConnectivityListener(listener) {
        this.webServiceManager.removeReachabilityListener(listener);
    }

    //GET REQUEST DATAMANAGER WRAPPER FOR FURTHER BUSINESS LOGIC
    getRequestService(url: String ){
        debugger;
        return new Promise(
            function(success, fail) {
            DATA_MANAGER.webServiceManager.getRequest(url)
            .then(function(response) {
                debugger;
                console.log('******************DATA MANAGER SERVICE*************');
                return response;
            })
            .then(function(serviceResponse) {
                /* if we use datamanager wrapper then... data recived here
                will be sent for further business logic process before sending back 
                to action like:
                filter(serviceResponse) or parse(ServiceResponse)
                result of which will be sent back.*/
                const {articles} = serviceResponse;
                success(articles);
            })
            .catch(function(error){
                debugger;
                console.log('************Error in DATA MANAGER***********');
                fail(error)
            });
         });
    }

    //POST REQUEST DATAMANAGER WRAPPER FOR FURTHER BUSINESS LOGIC
    postRequestService(url){
        debugger;
        return new Promise(
            function(success, fail) {
            DATA_MANAGER.webServiceManager.getRequest(url)
            .then(function(response) {
                debugger;
                console.log('******************DATA MANAGER SERVICE*************');
                return response;
            })
            .then(function(serviceResponse) {
                 /* if we use datamanager wrapper then... data recived here
                will be sent for further business logic process before sending back 
                to action like:
                filter(serviceResponse) or parse(ServiceResponse)
                result of which will be sent back.*/
                success(serviceResponse);
            })
            .catch(function(error){
                debugger;
                console.log('************Error in DATA MANAGER***********');
                fail(error)
            });
         });
    }
}

export default DataManager;
