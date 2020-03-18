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
        <div className = "activity">
            <button onClick = {handleGetData} className = "randombutton">Generate</button>
            <div className = "randomactivity">
            <h2>{props.activity.activity}</h2>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ...state,
        activity: state.activity[0]
    };
};

export default connect(mapStateToProps, { getData: getData })(Activity);

