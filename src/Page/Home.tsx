import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <h2>Welcome to Quiz</h2>
    <p>Please click below for starting your quiz</p>
    <Link to='/quiz'><button>Start Quiz</button></Link>

    </>
  )
}

export default Home