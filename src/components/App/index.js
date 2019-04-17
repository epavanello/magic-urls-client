import React, { Component } from 'react';
import './App.css';
import List from "../List";
import Form from "../Form";

class App extends Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>Todos</h2>
          <List />
        </div>
        <div className="col-md-4 offset-md-1">
          <h2>Add a new todo</h2>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
