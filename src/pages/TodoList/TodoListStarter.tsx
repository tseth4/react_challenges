import React from 'react';

const TodoListStarter: React.FC = () => {
  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      
      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter a new task..."
        />
        <button>Submit</button>
      </div>
      
      <ul className="todo-items">
        <li className="todo-item">
          <span>Example task</span>
          <button>Delete</button>
        </li>
        <li className="todo-item">
          <span>Another example task</span>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default TodoListStarter; 