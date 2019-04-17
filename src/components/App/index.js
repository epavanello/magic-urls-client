import React, { Component } from 'react';
import './App.css';
import List from "../List";
import Form from "../Form";
import Post from "../Posts";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 offset-md-1">
            <div className="card">
              <div className="card-body">
                <h2>Todos</h2>
                <List />
              </div>
            </div>
          </div>
          <div className="col-md-4 offset-md-1">

            <div className="card">
              <div className="card-body">
                <h2>Add a new todo</h2>
                <Form />
                <Post />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
