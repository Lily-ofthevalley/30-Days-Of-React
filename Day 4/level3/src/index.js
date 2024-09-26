import React from "react";
import ReactDOM from "react-dom";

// Hexadecimal color generator
const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const HexaColor = () => {
  const color = hexaColor();
  const hexaColorStyle = {
    backgroundColor: color,
    padding: "20px",
    margin: "5px",
    borderRadius: "15px",
    color: "#fff",
    textAlign: "center",
  };

  return <div style={hexaColorStyle}>{color}</div>;
};

const RandomColors = () => (
  <div className="RandomColors">
    <HexaColor />
    <HexaColor />
    <HexaColor />
    <HexaColor />
    <HexaColor />
  </div>
);

// The App, or the parent or the container component
const App = () => (
  <div className="app">
    {/* Task 1 */}
    <RandomColors />
    {/* Task 2 */}
  </div>
);

const rootElement = document.getElementById("root");
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement);
