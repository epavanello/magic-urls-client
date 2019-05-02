import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";

import List from "../../components/List";
import Form from "../../components/Form";

const mapStateToProps = state => {
  return { logged: state.get("logged") };
}


class ConnectedHome extends Component {
  render() {
    if (!this.props.logged) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="site-title">Magic Urls</h1>
        </div>
        <div className="row">
          <div className="col-md-6 p-5 my-card">
            <h3 className="title text-center">Urls</h3>
            <List />
          </div>
          <div className="col-md-6 p-5 my-card dark">
            <h3 className="title text-center">add Url</h3>
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

const Home = connect(mapStateToProps)(ConnectedHome);

export default Home;