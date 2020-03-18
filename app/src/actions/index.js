import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_ACTIVITY = "UPDATE_ACTIVITY";
export const SET_ERROR = "SET_ERROR";

// NOTE: function 'sleeper' adds an intentional delay to the fetch (so we can actually see the 'Loading...' status message and confirm that it's working)
function sleeper(ms) {
    return function(x) {
      return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
  }

export const getData = () => dispatch => {
    dispatch( { type: FETCH_DATA });
    axios.get("https://www.boredapi.com/api/activity/")
    .then(sleeper(1000))
    .then(response => {
        console.log(response.data);
        dispatch({ type: UPDATE_ACTIVITY, payload: response.data });
    })
    .catch(error => {
        console.log("Error", error);
        dispatch({ type: SET_ERROR, payload: "Error fetching data from API!"});
    });
};