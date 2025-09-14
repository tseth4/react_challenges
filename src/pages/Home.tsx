import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="page">
      <h1>Welcome to React Challenges</h1>
      <p>This is the home page of your application.</p>

      <div className="challenges">
        <h2>Available Challenges:</h2>
        <div className="challenge-links">
          <Link to="/accordion" className="challenge-link">Accordion Component</Link>
          <Link to="/memo" className="challenge-link">UseMemo Demo</Link>
          <Link to="/callback" className="challenge-link">UseCallback Demo</Link>
          <Link to="/tabs" className="challenge-link">Tabs Component</Link>
          <Link to="/flight-booking" className="challenge-link">Flight Booking</Link>
          <Link to="/table-generator" className="challenge-link">Table Generator</Link>
          <Link to="/event-bubbling" className="challenge-link">Event Bubbling Demo</Link>
          <Link to="/todo-list" className="challenge-link">Todo List Challenge</Link>
          <Link to="/custom" className="challenge-link">Cusotmization</Link>
          <Link to="/debounce" className="challenge-link">Debounce</Link>
          <Link to="/star-rating" className="challenge-link">Star Rating</Link>
          <Link to="/responsive-images" className="challenge-link">Responsive Images</Link>
          <Link to="/flex-demo" className="challenge-link">Flex Demo</Link>
          <Link to="/flex-practice" className="challenge-link">Flex Demo</Link>
          <Link to="/overflow-demo" className="challenge-link">Overflow Demo</Link>
        </div>
      </div>

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