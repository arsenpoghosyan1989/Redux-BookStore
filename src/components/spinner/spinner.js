import React from "react";
import spinnerGif from "./spinner.gif";
import "./spinner.css";

const Spinner = () => {
  return <img src={spinnerGif} className="spinner" />;
};

export default Spinner;
