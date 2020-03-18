import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_ACTIVITY = "UPDATE_ACTIVITY";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    dispatch( { type: FETCH_DATA });
    axios.get("https://www.boredapi.com/api/activity/")
    .then(response => {
        console.log(response.data);
        dispatch({ type: UPDATE_ACTIVITY, payload: response.data });
    })
    .catch(error => {
        console.log("Error", error);
        dispatch({ type: SET_ERROR, payload: "Error fetching from API"});
    });
};