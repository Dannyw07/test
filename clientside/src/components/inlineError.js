import React from "react";
import "./inlineError.css";

function inlineError({ error }) {
  return <p className="inlineErr">{error}</p>;
}

export default inlineError;
