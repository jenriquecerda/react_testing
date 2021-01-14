import React from "react";
import ReactDOM from "react-dom";
import SlideViewer from "./SlideViewer";

const slides = [
  { name: "cow", filename: "cow.jpg" },
  { name: "elephant", filename: "elephant.jpg" },
  { name: "lion", filename: "lion.jpg" },
  { name: "table", filename: "table.jpg" },
];

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<SlideViewer slides={slides} />, container);
