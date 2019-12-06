import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getSquares } from "../api/squareApi";

// maybe don't make this take onClick, player??
// populate from the api based on ID?
const Square = function({ id, player, onClick }) {
  return (
    <button className="square" onClick={onClick} id={id}>
      {player}
    </button>
  );
};

Square.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

Square.defaultProps = {
  player: ""
};

export default Square;
