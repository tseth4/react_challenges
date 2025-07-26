import React, { useState } from 'react';
import TodoListStarter from './TodoListStarter';
import TodoListSolution from './TodoListSolution';
import './TodoList.module.scss';

const TodoListIndex: React.FC = () => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="todo-list-challenge">
      <h1>Todo List Challenge</h1>
      
      <div className="challenge-description">
        <h2>Challenge Description</h2>
        <p>
          You're given some existing HTML for a Todo List app. Add the following functionality to the app:
        </p>
        
        <h3>Requirements:</h3>
        <ul>
          <li>Add new tasks on clicking the "Submit" button.</li>
          <li>The &lt;input&gt; field should be cleared upon successful addition.</li>
          <li>Remove tasks from the Todo List upon clicking the "Delete" button.</li>
        </ul>
        
        <h3>Notes:</h3>
        <ul>
          <li>The focus of this question is on functionality, not the styling. There's no need to write any custom CSS.</li>
          <li>You may modify the markup (e.g. adding ids, data attributes, replacing some tags, etc), but the result should remain the same visually.</li>
          <li>You may want to think about ways to improve the user experience of the application and implement them (you get bonus credit for doing that during interviews).</li>
        </ul>
      </div>
      
      <div className="challenge-controls">
        <button 
          onClick={() => setShowSolution(!showSolution)}
          className="toggle-solution"
        >
          {showSolution ? 'Hide Solution' : 'Show Solution'}
        </button>
      </div>
      
      <div className="challenge-demo">
        <h2>Your Implementation</h2>
        <p className="starter-note">
          Start with this HTML structure and add the required functionality:
        </p>
        <TodoListStarter />
      </div>
      
      {showSolution && (
        <div className="solution-demo">
          <h2>Solution</h2>
          <TodoListSolution />
        </div>
      )}
    </div>
  );
};

export default TodoListIndex; 