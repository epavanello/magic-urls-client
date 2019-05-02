import React, { Component } from 'react';
import { connect } from "react-redux";

import List from "../../components/List";
import Form from "../../components/Form";


import './Home.scss';

const mapStateToProps = state => {
  return { logged: state.get("logged") };
}


class ConnectedHome extends Component {
  render() {

    return (
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="title">Magic Urls</h1>
        </div>
        <div className="row">
          <div className="col-md-6 p-5 my-card">
            <h2>Todos</h2>
            <List />
          </div>
          <div className="col-md-6 p-5 my-card">
            <h2>Add new Url</h2>
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

const Home = connect(mapStateToProps)(ConnectedHome);

export default Home;