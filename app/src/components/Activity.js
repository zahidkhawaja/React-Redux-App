import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

const Activity = props => {
    console.log(props);

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };

    return (
        <>
        {props.isFetchingData ? (
            <div className = "activity">
            <button onClick = {handleGetData} className = "randombutton">Generate</button>
            <h1>Loading...</h1>
            </div>
        ) : (
        <div className = "activity">
            <button onClick = {handleGetData} className = "randombutton">Generate</button>
            <div className = "randomactivity">
            <h2>{props.activity.activity}</h2>
            <h2>{props.error}</h2>
            </div>
        </div>
        )}
        </>

    );
};

const mapStateToProps = state => {
    return {
        ...state,
        activity: state.activity[0],
        error: state.error,
        isFetchingData: state.isFetchingData
    };
};

export default connect(mapStateToProps, { getData: getData })(Activity);

