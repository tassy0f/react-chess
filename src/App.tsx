import React, { useEffect, useState } from 'react';
import BoardComponent  from "./components/BoardComponent";
import './App.css';
import { Board } from './models/Board';

function App() {
  const [board, setBoard] = useState(new Board())

  useEffect(() => {
    restartGame()
  }, [])

  function restartGame() {
    const newBoard = new Board();
    newBoard.initCeils()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  return (
    <div className="App">
      <BoardComponent board={board} setBoard={setBoard}/>
    </div>
  );
}

export default App;
