import axios from 'axios';

export const API_URL = "https://5a83402398bd81001246c901.mockapi.io/";
export const DATA_STATUS_HANDLER = 'DATA_STATUS_HANDLER';



export const dataResultHandler = (actionType, stateObjectType, stateObjectResult) => {
  return {
    type: actionType,
    payload: {
      type: stateObjectType,
      result: stateObjectResult
    }
  }
}

export const add = (obj) => {
    return (dispatch, getState, url) => {
      console.log('Adding Data...');
      console.log(obj);
      axios.post(url, obj)
        .then( response => {
          console.log(response);
          dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'addSuccess', result: true}} );
        })
        .catch( error => {
          if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              //  console.log(error.response.data.message);
              //  console.log(error.response.status);
              //  console.log(error.response.headers);
              console.log(`Error Response: ${error.response}`);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(`Error Request: ${error.request}`);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log(`General Error: ${error.message}`);
          }
          console.log("Error has occurred in adding data...");
          console.log(error);
          dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'addError', result: true}} );
      })
    }
  }