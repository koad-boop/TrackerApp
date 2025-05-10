import React, { useState, useEffect } from "react";
import "../App.css";
import "../css/toggleSwitch.css";

export const Darklightmode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="toggleouter-body" onClick={toggleTheme} title="Toggle Dark/Light Mode">
      <div className="toggleinner-body">
        <span className="toggleText">{isDarkMode ? "🌙" : "☀️"}</span>
      </div>
    </div>
  );
};
