import React from "react";
import { Link } from "react-router-dom";

const Instructions = () => {
  return (
    <aside className="maxw-95 instructions" aria-label="Instructions">
      <h2 className="pv2 bb-3">Instructions</h2>
      <h3>The Basics</h3>
      <ul>
        <li>Press tiles as phrases come up or just turn on your microphone.</li>
        <li>
          <strong>5 in a row is bingo!</strong>
        </li>
      </ul>
      <h3>Got Bingo?</h3>
      <p> Congrats! Feel free to...</p>
      <ul>
        <li>Continue filling in your board</li>
        <li>Start a new board!</li>
      </ul>
      <p>
        Created by <Link to="https://www.eloutmani.com" target="_blank">El Outmani</Link>
      </p>
      <small>
        Design Credit by{" "}
        <Link to="https://www.24a11y.com/2019/building-an-accessible-bingo-web-app/" target="_blank">
          Cordelia
        </Link>
      </small>
    </aside>
  );
};

export default Instructions;
