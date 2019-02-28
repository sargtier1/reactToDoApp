import React, { Component } from "react";

import "./ToDoItem.css"

class ToDoItem extends Component {
  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" />
        <p> Placeholder Text</p>
      </div>
    );
  }
}

export default ToDoItem;
