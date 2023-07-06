import React from 'react';

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div>
      <label>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      </label>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};
export default TodoItem;