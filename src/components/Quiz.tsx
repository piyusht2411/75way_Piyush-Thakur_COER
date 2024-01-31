import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import './Quiz.css'
import { data } from '../assets/data';
import Webcam from "react-webcam";
import { parse } from 'date-fns';
import Timer from './Timer';
const Quiz = () => {
    let [index, setIndex] = useState<number>(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState<boolean>(false);
    let[result, setResult] = useState<boolean>(false);
    const [submitAnswer, setSubmitAnswer] = useState<boolean>(false);
    const navigate = useNavigate();
    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let button1 = useRef<HTMLButtonElement>(null);
    let button2 = useRef<HTMLButtonElement>(null);
    let button3 = useRef<HTMLButtonElement>(null);
    let button4 = useRef<HTMLButtonElement>(null);
    let button5 = useRef<HTMLButtonElement>(null);
    let option_array:React.MutableRefObject<HTMLLIElement | null>[]= [Option1 ,Option2,
      Option3,
      Option4];
    let [score, setScore] = useState<number>(0);
// for checking answer
    const checkAns = (e:any,ans:any)=>{
        if(lock==false){
            if(question.ans===ans){
                e.target.classList.add('correct');
                setLock(true);
                setScore(prev=>prev+1);
    
            }
            else{
                e.target.classList.add('wrong');
                setLock(true);
                // if(question.ans>1){
                //   option_array[question.ans-1].current.classList.add('correct');
                // }

               
            }
        }

    }
    // for going to the next question after choosing an option
    const next= ()=>{
        if(lock==true){
            if(index===data.length-1){
                setResult(true);
                return 0;
            }
            if(index==0){
              button1.current?.classList.remove('reviewed');
              button1.current?.classList.add('answered')
            }
            if(index==1){
              button2.current?.classList.remove('reviewed');
              button2.current?.classList.add('answered')
            }
            if(index==2){
              button3.current?.classList.remove('reviewed');
              button3.current?.classList.add('answered')
            }
            if(index==3){
              button4.current?.classList.remove('reviewed');
              button4.current?.classList.add('answered')
            }
            if(index==4){
              button5.current?.classList.remove('reviewed');
              button5.current?.classList.add('answered')
            }
            
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            option_array.map((option)=>{
              if(option.current!==null){
                option.current.classList.remove('correct');
                option.current.classList.remove('wrong');

              }

            })
        }
    }
    // for going to the next question without giving an answer
    const skip = ()=>{
      if(index===data.length-1){
        setResult(true);
        return 0;

    }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map((option)=>{
        if(option.current!==null){
          option.current.classList.remove('correct');
          option.current.classList.remove('wrong');

        }

      })

    }
    // for answering again in any queshion (if user's doesn't came back to give the answer the review answer will be counted as given answer)
    const review = ()=>{
      if(index==0){
        button1.current?.classList.remove('answered');
        button1.current?.classList.add('reviewed');  
      }
      if(index==1){
        button2.current?.classList.remove('answered');
        button2.current?.classList.add('reviewed');  
      }
      if(index==2){
        button3.current?.classList.remove('answered');
        button3.current?.classList.add('reviewed');  
      }
      if(index==3){
        button4.current?.classList.remove('answered');
        button4.current?.classList.add('reviewed');  
      }
      if(index==4){
        button5.current?.classList.remove('answered');
        button5.current?.classList.add('reviewed');  
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map((option)=>{
        if(option.current!==null){
          option.current.classList.remove('correct');
          option.current.classList.remove('wrong');

        }

      })

    }
// for retrying the quiz
    const reset = ()=>{
        setIndex(0);
        setQuestion(data[0]);
        setLock(false);
        setResult(false);
        setScore(0);
        navigate('/')

    }

    // functions for buttons to the right to see a particular queshion
    const toOne = ()=>{
      setIndex(0);
      setQuestion(data[0]);
      setLock(false);
    }
    const toTwo = ()=>{
      setIndex(1);
      setQuestion(data[1]);
      setLock(false);
    }
    const toThree = ()=>{
      setIndex(2);
      setQuestion(data[2]);
      setLock(false);
    }
    const toFour = ()=>{
      setIndex(3);
      setQuestion(data[3]);
      setLock(false);
    }
    const toFive = ()=>{
      setIndex(4);
      setQuestion(data[4]);
      setLock(false);
    }
    // for submiting the answer
    const finish = ()=>{
      setResult(true);
    }

    // timeout function for finish test after 20 seconds
    setTimeout(()=>{
      finish();

    },20000)

    
  return (
   <div className='main'>
    <div className='container'>
     {!result? <><h1>Quiz App</h1> <hr/></>: <></>}
     
      {result?<div className='resultContainer'><h2>You scored {score} out of {data.length}</h2>
      <p>You may retry to score better</p>
      <button className='submitButton' onClick={reset}>Retry</button></div>:<>
      <h2>{index+1}. {question.question}</h2>
      <ul>
        <li ref={Option1} onClick = {(e)=>{checkAns(e,1)}}>{question.option1}</li>
        <li ref={Option2} onClick = {(e)=>{checkAns(e,2)}}>{question.option2}</li>
        <li ref={Option3} onClick = {(e)=>{checkAns(e,3)}}>{question.option3}</li>
        <li ref={Option4} onClick = {(e)=>{checkAns(e,4)}}>{question.option4}</li>
      </ul>

      <div className='mybuttons'>
      <button onClick = {next}>Next</button>
      <button onClick = {skip}>Skip</button>
      <button onClick = {review}>Review</button>
      <button onClick = {()=>{if(window.confirm('You really want to submit')){finish()}}}>Submit</button>
      </div>
      <div className='myText'>{index+1} out of {data.length} queshions</div>
      <Webcam style={{
           border:"2px solid black",
             width: "25%",
             marginLeft:"47px"
          }}/>
     
      </>}
    

    </div>
    {!result?<>
      <div className='allQueshions'>
      <button ref={button1} onClick={toOne}>1</button>
      <button ref={button2} onClick={toTwo}>2</button>
      <button ref={button3} onClick={toThree}>3</button>
      <button ref={button4} onClick={toFour}>4</button>
      <button ref={button5} onClick={toFive}>5</button>
      <br/>
      <Timer duration={1*20*1000}/>
    </div>
   
    </>:<></>}

   </div>

  )
}

export default Quiz;