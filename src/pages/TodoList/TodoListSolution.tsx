import React, { useState } from 'react';

const TodoListSolution: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleDelete = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="todo-list">
      <h2>Todo List (Solution)</h2>
      
      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      
      <ul className="todo-items">
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            <span>{task}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      
      {tasks.length === 0 && (
        <p className="empty-state">No tasks yet. Add one above!</p>
      )}
    </div>
  );
};

export default TodoListSolution; 