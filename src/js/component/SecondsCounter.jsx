import React, { useState, useEffect } from 'react';
import '../../styles/index.css';

const SecondsCounter = ({ seconds }) => {
  const [counter, setCounter] = useState(seconds);
  const [digits, setDigits] = useState(["0", "0", "0", "0", "0", "0"]);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setCounter((prevSecond) => (prevSecond === 999999 ? 0 : prevSecond + 1));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    let newDigit = counter.toString().padStart(6, "0").split("");
    setDigits(newDigit);
  }, [counter]);

  const handleReset = () => {
    setCounter(seconds);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleStart = () => {
    setRunning(true);
  };

  return (
    <div className="counter-container">
      <div className="counter">
        <div className="digit">{digits[0]}</div>
        <div className="digit">{digits[1]}</div>
        <div className="digit">{digits[2]}</div>
        <div className="digit">{digits[3]}</div>
        <div className="digit">{digits[4]}</div>
        <div className="digit">{digits[5]}</div>
      </div>
      <div className="buttons">
        <button onClick={handleReset} className="button-reset">Reset</button>
        <button onClick={handleStop} className="button-stop">Stop</button>
        <button onClick={handleStart} className="button-start">Start</button>
      </div>
    </div>

  );
};

export default SecondsCounter;