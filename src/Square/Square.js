import React from "react";
import PropTypes from "prop-types";

const Square = function({ onClick, player }) {
  return (
    <button className="square" onClick={onClick}>
      {player}
    </button>
  );
};

Square.propTypes = {
  onClick: PropTypes.func.isRequired
};

Square.defaultProps = {
  player: ""
};

export default Square;
