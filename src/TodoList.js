import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddTodo = () => {
    const newTodo = { id: Date.now(), text: inputValue, completed: false };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };
  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>Todo List</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <input type='text' value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1em', alignItems: 'center' }}>
        {todos.map((todo) => (
          <div key={todo.id} style={{ border: '1px solid black', padding: '0.5em', margin: '0.5em' }}>
            <TodoItem
              todo={todo}
              onDelete={handleDeleteTodo}
              onToggle={handleToggleTodo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TodoList;