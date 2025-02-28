// ThemeToggle.js
import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext.js"; // Import useTheme

const Button = styled.button`
  padding: 10px 20px;
  background: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
  color: ${(props) => (props.theme === "light" ? "#fff" : "#000")};
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: ${(props) => (props.theme === "light" ? "#444" : "#ccc")};
  }
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme(); // Access theme and toggleTheme from context

  return (
    <Button theme={theme} onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
};

export default ThemeToggle;
