import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="page">
      <h1>Welcome to React Challenges</h1>
      <p>This is the home page of your application.</p>
      <div className="features">
        <h2>Features:</h2>
        <ul>
          <li>React Router configured</li>
          <li>TypeScript support</li>
          <li>Vite for fast development</li>
        </ul>
      </div>
    </div>
  );
};

export default Home; 