import React from "react";

import { BsMoonFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

const Header = ({ handleToggleDarkMode, currentMode }) => {
  return (
    <div className="header">
      <h1 className="title">Todo List</h1>
      {currentMode ? (
        <BsSunFill
          className="mode-toggle-light"
          onClick={() =>
            handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
          }
        />
      ) : (
        <BsMoonFill
          className="mode-toggle-dark"
          onClick={() =>
            handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
          }
        />
      )}
    </div>
  );
};

export default Header;
