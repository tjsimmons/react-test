import React from "react";
import Square from "../Square";
import { useState, useEffect } from "react";
import { getSquares, updateSquare } from "../api/squareApi";

// TODO: json-server to house an API to store square IDs and the player who clicked it??
const Board = function() {
  const [players, setPlayers] = useState({
    currentPlayer: "X",
    nextPlayer: "O"
  });
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    getSquares().then(squares => setSquares(squares));
    //.finally(() => setIsLoading(false));
  }, []); // second argument is a array of dependencies - empty array means only run once, not every time this is re-rendered

  const status = `Next player: ${players.nextPlayer}`;

  const squareClick = function({ target }) {
    const { currentPlayer, nextPlayer } = { ...players };

    updateSquare({ id: target.id, player: currentPlayer }).then(square => {
      setSquares([...squares, square]);
    });

    setPlayers({ currentPlayer: nextPlayer, nextPlayer: currentPlayer });
  };

  let currentIndex = 1;

  return (
    <>
      <div>
        <div className="status">{status}</div>
        {squares.map(square => (
          <Square onClick={squareClick} id={square.id} player={square.player} />
        ))}
      </div>
    </>
  );
};

/*
<div className="board-row">
          <Square onClick={squareClick} id={1} />
          <Square onClick={squareClick} id={2} />
          <Square onClick={squareClick} id={3} />
        </div>
        <div className="board-row">
          <Square onClick={squareClick} id={4} />
          <Square onClick={squareClick} id={5} />
          <Square onClick={squareClick} id={6} />
        </div>
        <div className="board-row">
          <Square onClick={squareClick} id={7} />
          <Square onClick={squareClick} id={8} />
          <Square onClick={squareClick} id={9} />
        </div>
        */

export default Board;
