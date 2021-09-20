import React from "react";

const SingleGrid = (props) => {
  return (
    <td role="gridcell">
      <div className="cell-contents">
        <button
          aria-pressed={props.pressed}
          className="cell-toggle"
          id={`abc-cell-${props.index}`}
          tabIndex={-1}
          onClick={props.switchValue}
        >
          {props.value}
        </button>
      </div>
    </td>
  );
};

export default SingleGrid;
