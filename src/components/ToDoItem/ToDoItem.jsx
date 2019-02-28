import React from "react";

import "./ToDoItem.css";

function ToDoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.task.completed}/>
      <p>{props.task.text}</p>
    </div>
  );
}

export default ToDoItem;
