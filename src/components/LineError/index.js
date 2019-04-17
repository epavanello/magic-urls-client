import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    // Move to selectors.js and use rselect for performance (cache)
    return { error: state.get("error") };
}

const ConnectedLineError = ({ error }) => (
    <p>{error}</p>
);

const LineError = connect(mapStateToProps) (ConnectedLineError);

export default LineError;