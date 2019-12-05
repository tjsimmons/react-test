import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getSquares } from "../api/squareApi";

// maybe don't make this take onClick, player??
// populate from the api based on ID?
const Squares = function({ onClick, player }) {
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    getSquares().then(squares => setSquares(squares));
    //.finally(() => setIsLoading(false));
  }, []); // second argument is a array of dependencies - empty array means only run once, not every time this is re-rendered

  return (
    <button className="square" onClick={onClick}>
      {player}
    </button>
  );
};

Squares.propTypes = {
  onClick: PropTypes.func.isRequired
};

Squares.defaultProps = {
  player: ""
};

export default Squares;
