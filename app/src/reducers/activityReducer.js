const initialState = {
    activity: {
        "activity": "Listen to music you haven't heard in a while",
        "accessibility": 0.9,
        "type": "music",
        "participants": 1,
        "price": 0.05,
        "link": "",
        "key": "4296813"
      },
    isFetchingData: false,
    error: ""
};

export const activityReducer = (state = initialState, action) => {
    return state;
}