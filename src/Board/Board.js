import React from "react";
import Square from "../Square";
import { useState } from "react";

// TODO: json-server to house an API to store square IDs and the player who clicked it??
const Board = function() {
  const [players, setPlayers] = useState({
    currentPlayer: "X",
    nextPlayer: "O"
  });

  const status = `Next player: ${players.nextPlayer}`;

  const squareClick = function() {
    console.log(players.currentPlayer);

    const { currentPlayer, nextPlayer } = { ...players };

    setPlayers({ currentPlayer: nextPlayer, nextPlayer: currentPlayer });
  };

  return (
    <>
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square onClick={squareClick} player={players.currentPlayer} />
          <Square onClick={squareClick} />
          <Square onClick={squareClick} />
        </div>
        <div className="board-row">
          <Square onClick={squareClick} />
          <Square onClick={squareClick} />
          <Square onClick={squareClick} />
        </div>
        <div className="board-row">
          <Square onClick={squareClick} />
          <Square onClick={squareClick} />
          <Square onClick={squareClick} />
        </div>
      </div>
    </>
  );
};

export default Board;
