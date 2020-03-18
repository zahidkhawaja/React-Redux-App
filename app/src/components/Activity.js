import React from "react";
import { connect } from "react-redux";

const Activity = props => {
    return (
        <div className = "activity">
            <h3>Activity:</h3>
            <p>{props.activity.activity}</p>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        activity: state.activity
    };
};

export default connect(mapStateToProps, {})(Activity);

