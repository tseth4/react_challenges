// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navigation from './components/Navigation';
import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
import Accordion  from './pages/accordion/Index';
import Tabs  from './pages/Tabs/Index';
import './App.css';
import UseMemoDemo from './pages/MemoDemo/UseMemoDemo';
import UseCallBackDemo from './pages/CallbackDemo/UseCallBackDemo';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navigation /> */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/memo" element={<UseMemoDemo />} />
            <Route path="/callback" element={<UseCallBackDemo />} />
            <Route path="/tabs" element={<Tabs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
