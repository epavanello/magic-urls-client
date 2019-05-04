import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from "../../containers/Login";
import Home from "../../containers/Home";

import './App.scss';

const mapStateToProps = state => {
  return { logged: state.get("auth").get("logged") };
}


class ConnectedApp extends Component {
  render() {

    return (
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/home" component={Home} />
      </Router>

    );
  }
}

const App = connect(mapStateToProps)(ConnectedApp);

export default App;