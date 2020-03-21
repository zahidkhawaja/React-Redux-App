import React from "react";
// Without using hooks
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions/index";

const Activity = () => {
    const state = useSelector(state => state);
    const activity = useSelector(state => state.activity[0]);
    console.log(state);
    const dispatch = useDispatch();

    const handleGetData = e => {
        e.preventDefault();
        dispatch(getData());
    };

    return (
        <>
        {state.isFetchingData ? (
            <div className = "activity">
            <button onClick = {handleGetData} className = "randombutton">Generate</button>
            <div className = "loading">
            <h1>Loading...</h1>
            </div>
            </div>
        ) : (
        <div className = "activity">
            <button onClick = {handleGetData} className = "randombutton">Generate</button>
            <div className = "randomactivity">
            <h2>{activity.activity}</h2>
            <h2>{state.error}</h2>
            </div>
        </div>
        )}
        </>

    );
};

// Without using hooks
// const mapStateToProps = state => {
//     return {
//         ...state,
//         activity: state.activity[0],
//         error: state.error,
//         isFetchingData: state.isFetchingData
//     };
// };
// export default connect(mapStateToProps, { getData: getData })(Activity);

export default Activity;



