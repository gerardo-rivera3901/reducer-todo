import React from "react";

function Todo(props) {
  return (
    <div>
      <h2
        style={props.item.completed ? {textDecoration: 'line-through'} : {} }
        onClick={(e) => {
          e.preventDefault();
          props.handleComplete(props.item.id);
        }}
      >
        {props.item.todo}
      </h2>
    </div>
  );
}

export default Todo