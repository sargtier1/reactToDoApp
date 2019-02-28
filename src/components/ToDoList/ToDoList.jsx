import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import toDoData from "../../toDoList";

import "./ToDoList.css";

function ToDoList() {
  const ToDoListComponents = toDoData.map(task => (
    <ToDoItem key={task.id} task={task} />
  ));

  return <div className="todo-list">{ToDoListComponents}</div>;
}

export default ToDoList;
