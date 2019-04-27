import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


import './Home.scss';
import Login from "../Login";

const mapStateToProps = state => {
  return { logged: state.get("logged") };
}


class ConnectedHome extends Component {
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

const Home = connect(mapStateToProps)(ConnectedHome);

export default Home;