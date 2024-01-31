import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import './App.css';
import Quiz from './components/Quiz';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/quiz' element={<Quiz />} />
    </Routes>
    </BrowserRouter>
    
    </>

  
  );
}

export default App;
