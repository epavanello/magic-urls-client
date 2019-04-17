import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { error: state.error };
}

const ConnectedLineError = ({ error }) => (
    <p>{error}</p>
);

const LineError = connect(mapStateToProps) (ConnectedLineError);

export default LineError;