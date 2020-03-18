import { FETCH_DATA, UPDATE_ACTIVITY, SET_ERROR } from "../actions/index";

const initialState = {
    activity: [{
        "activity": "",
        "accessibility": 0.9,
        "type": "",
        "participants": 1,
        "price": 0.05,
        "link": "",
        "key": "4296813"
      }],
    isFetchingData: false,
    error: ""
};

export const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                activity: [...state.activity]
            };
        case UPDATE_ACTIVITY: 
            return {
                ...state,
                activity: [action.payload],
                isFetchingData: false
            };
        case SET_ERROR: 
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        default:
            return state;
    }
};