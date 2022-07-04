import React, { useState } from "react";
import PropTypes from "prop-types";
import MyContext from "../index";

export default function LoginProvider({ children }) {
  const [players, setPlayers] = useState([]);

  const contextValue = {
    players,
    setPlayers,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
