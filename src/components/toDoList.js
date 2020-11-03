import React from 'react'

const ToDoList = ({state}) => {
  return state.toDoItems.map((item) => {
    const newItem = Object.values(item);
    return (
      <div onClick={e => console.log(!newItem[1])} key={new Date()}>
        <h3>{newItem[0]}</h3>
      </div>
    );
  });
}

export default ToDoList;