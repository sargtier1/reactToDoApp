import React, { Component } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import toDoData from "../../toDoList";

import "./ToDoList.css";

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      toDoData: toDoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState (prevState => {
      const updateToDos = prevState.toDoData.map(toDoData => {
        if(toDoData.id === id) {
          toDoData.completed = !toDoData.completed
        } 
          return toDoData
      })
        return {
          toDoData: updateToDos
        }
    })
  }

  render() {
    const ToDoListComponents = this.state.toDoData.map(task => (
      <ToDoItem key={task.id} task={task} handleChange={this.handleChange}/>
    ));

    return <div className="todo-list">{ToDoListComponents}</div>;
  }
}

export default ToDoList;
