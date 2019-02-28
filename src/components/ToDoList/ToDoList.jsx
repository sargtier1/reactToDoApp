import React, { Component } from "react";

import ToDoItem from "../ToDoItem/ToDoItem"

import "./ToDoList.css";

class ToDoList extends Component {
  render() {
    return (
      <div className="todo-list">
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </div>
    );
  }
}

export default ToDoList;
