import React, {FC, useEffect, useRef, useState} from 'react';
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
  let seconds: number = 300;
  const [blackTime, setBlackTime] = useState(seconds)
  const [whiteTime, setWhiteTime] = useState(seconds);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null)
  

  useEffect(() => {
    startTimer()
  }, [currentPlayer])

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current)
    }
    
    const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer
    timer.current = setInterval(callback, 1000)
  }

  function decrementBlackTimer() {
    setBlackTime(blackTime => blackTime - 1)
    if(blackTime < 1) {restartAfterEndTime()}
    
  }
  function decrementWhiteTimer() {
    setWhiteTime(whiteTime => whiteTime - 1)
    if(whiteTime < 1) {restartAfterEndTime()}
  }

  const handleRestart = () => {
    setWhiteTime(seconds)
    setBlackTime(seconds)
    restart()
  }

  function restartAfterEndTime() {
    if(whiteTime < 0) {
      alert("Black Wins!")
      handleRestart()
    }
    if (blackTime < 0) {
      alert("White Wins!")
      handleRestart()
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleRestart}>
          Restart game
        </button>
      </div>
      <h2 onChange={restartAfterEndTime}>Черные - {blackTime}</h2>
      <h2 onChange={restartAfterEndTime}>Белые - {whiteTime}</h2>
    </div>
  );
};

export default Timer;
