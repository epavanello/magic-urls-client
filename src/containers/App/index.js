import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


import './App.scss';
import Login from "../../containers/Login";

const mapStateToProps = state => {
  return { logged: state.get("logged") };
}


class ConnectedHome extends Component {
  render() {
    if (!this.props.logged) {
      return <Redirect to="/login" />;
    }
    return (
      <p>Ciao</p>

    );
  }
}
const Home = connect(mapStateToProps)(ConnectedHome);


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