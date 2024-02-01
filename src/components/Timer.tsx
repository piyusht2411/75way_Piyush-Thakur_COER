import React, { useRef, useState, useEffect } from 'react';
import './Quiz.css'
type Props = {
    duration: number;
}
const Timer = ({ duration }: Props) => {

    const [time, setTime] = useState<number>(duration);
    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000);
        }, 1000)
    }, [time])
// function for getting formatted time
    const getFormattedTime = (miliseconds: number) => {
        console.log(miliseconds);
        if (miliseconds <= 0) {
            let seconds = 0;
            let minutes = 0;
            return `${minutes}: ${seconds}`;
        }
            let total_seconds = (Math.floor(miliseconds / 1000));
            let total_minutes = Math.floor(total_seconds / 60);

            let seconds = total_seconds % 60;
            let minutes = total_minutes % 60;
        

        return `${minutes}: ${seconds}`;

    }

    return (

        <>
            <div>
               <p className='timerText'>You have 20 seconds to complete the quiz.</p>
               <p className='mytimer'>{getFormattedTime(time)}</p>
            </div>
        </>
    )
}

export default Timer