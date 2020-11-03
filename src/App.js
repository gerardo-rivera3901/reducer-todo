import React, { useReducer, useState } from 'react';
import ToDoList from './components/toDoList'
import reducer, {initialState} from './reducers/reducer'
import actions from './actions/actions'
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [toDoItem, setToDoItem] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(actions.newItem(toDoItem))
  }

  const handleChanges = e => {
    setToDoItem(e.target.value)
    console.log(toDoItem);
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ToDoList state={state}/>
      <form onSubmit={onSubmit}>
        <input 
          type='text' 
          value={toDoItem}
          onChange={handleChanges}
        />
        <button>Add New Task</button>
      </form>
      <button>Clear Completed</button>
    </div>
  );
}

export default App;
