import React from "react";
import "./GameStyles.css";

const Cell = ({ value, onClick }) => {
  return (
    <div className="game-cell" onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
