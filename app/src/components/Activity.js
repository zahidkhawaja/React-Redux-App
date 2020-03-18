import React from "react";
import { connect } from "react-redux";

const Activity = props => {
    return (
        <div className = "activity">
            <h3>Random Activity:</h3>
            <p>{props.activity.activity}</p>
            <p>Type: {props.activity.type}</p>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        activity: state.activity
    };
};

export default connect(mapStateToProps, {})(Activity);

