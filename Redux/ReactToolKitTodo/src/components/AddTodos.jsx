import React, { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

function AddTodos() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo))
    setTodo('');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddTodos;
