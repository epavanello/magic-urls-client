import { Component } from "react";
import { connect } from "react-redux";

import { getData } from "../actions";

export class Post extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getData();
    }

    render() {
        return null;
      }
}

export default connect(
    null,
    { getData }
  )(Post);