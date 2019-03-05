import React from "react";

import "./ToDoItem.css";

function ToDoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.task.completed}
        onChange={()=> props.handleChange(props.task.id)}
      />
      <p style={props.task.completed ? completedStyle : null}>{props.task.text}</p>
    </div>
  );
}

export default ToDoItem;
