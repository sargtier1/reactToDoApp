import React, { Component } from "react";

import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";
import Footer from "./components/Footer/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ToDoList />
        <Footer />
      </div>
    );
  }
}

export default App;
