import React from "react";
import Board from "./Board";
import { useState } from "react";
import { calculateWinner } from "../../helper";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = { ...board };
    if (winner || boardCopy[index]) {
      return;
    }
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
    </div>
  );
};

export default Game;
