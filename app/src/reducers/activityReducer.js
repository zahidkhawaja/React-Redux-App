import { FETCH_DATA, UPDATE_ACTIVITY, SET_ERROR } from "../actions/index";

const initialState = {
    activity: [{
        "activity": "",
        "accessibility": 0,
        "type": "",
        "participants": 0,
        "price": 0,
        "link": "",
        "key": ""
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