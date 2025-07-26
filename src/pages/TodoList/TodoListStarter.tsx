import React from 'react';

const TodoListStarter: React.FC = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="Add your task" />
        <div>
          <button>Submit</button>
        </div>
      </div>
      <ul>
      </ul>
    </div>
  );
};

export default TodoListStarter; 