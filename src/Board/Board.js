import React from "react";
import Square from "../Square";
import { useState } from "react";

const Board = function() {
  const [nextPlayer, setNextPlayer] = useState("X");

  const status = `Next player: ${nextPlayer}`;

  return (
    <>
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  );
};

export default Board;
