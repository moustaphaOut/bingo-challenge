import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { genetareGrid } from "../actions/gridActions";

const Header = () => {
  const dispatch = useDispatch();
  const size = useSelector((state) => state.gridReducer.size);

  return (
    <header className="flex justify-between items-end bb-5 pv-1">
      <h1 className="ma2 f1-ns f2-m f3">Bingo Challenge</h1>
      <button
        onClick={() => dispatch(genetareGrid(size))}
        className="tc fw8 bg-white black pa3 ba bw1 b--black mb2"
      >
        New Board
      </button>
    </header>
  );
};

export default Header;
