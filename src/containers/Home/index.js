import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";

import UrlListContainer from "../../components/UrlListContainer";
import Form from "../../components/Form";
import { loadUrls } from '../../actions/urlsActions';

const mapStateToProps = state => {
  return { logged: state.get("auth").get("logged") };
}

function mapDispatchToProps(dispatch) {
  return {
    loadUrls: todo => dispatch(loadUrls())
  };
}

class ConnectedHome extends Component {
  componentDidMount() {
    console.log("Mount");
    this.props.loadUrls();
  }
  render() {
    if (!this.props.logged) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="site-title">Magic Urls</h1>
        </div>
        <div className="row align-items-start">
          <div className="col-md-6 p-5 my-card order-2 order-md-1">
            <h3 className="title text-center">Urls</h3>
            <UrlListContainer />
          </div>
          <div className="col-md-6 p-5 my-card dark order-1 order-md-2">
            <h3 className="title text-center">add Url</h3>
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(ConnectedHome);

export default Home;