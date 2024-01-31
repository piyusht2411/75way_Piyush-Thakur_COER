import React from 'react';
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
  return (
    <div className='homeContainer'>
    <h2>Welcome to Quiz</h2>
    <p>Please click below for starting your quiz</p>
    <Link to='/quiz'><button className='homeButton'>Start Quiz</button></Link>
    </div>

  
  )
}

export default Home