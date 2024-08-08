import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import './Timer.css';

function Timer() {

const [ count,setCount ] = useState(0);
const [state,setState] = useState(true);
const status = useRef(null);

useEffect(() => {
    if(state){
        status.current = setInterval(() => {
            setCount((last) => last + 1);
        }, 1000);
    }else{
        clearInterval(status.current);
    }
    return () => clearInterval(status.current);
}, [state]);


const stopCountdown = () => {
    setState(false);
}

const startCountdown = () => {
    setState(true);
}

const resetCount = () => {
    window.location.reload();
}

  return (
    <>
      <div className="timer">
        <div className="container">
            <div className="box">
                <h1>{count}</h1>

            </div>
        </div>
        <div className="buttons">
                    <Button onClick={ startCountdown } variant="success">START</Button>
                    <Button onClick={ stopCountdown } variant="danger">STOP</Button>
                    <Button onClick={ resetCount } variant="warning">RESET</Button>
                </div>
      </div>
    </>
  )
}

export default Timer
