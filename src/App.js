import React from 'react';
import './App.css';
import './App.scss'
import Header from './components/Header'
import Home from './pages/Home'
import History from './pages/History'
import About from './pages/About'

function App() {
  return (
    <div className="App">

        <Header />
        <Home />
        <History />
        <About />
        
    </div>
  );
}

export default App;
