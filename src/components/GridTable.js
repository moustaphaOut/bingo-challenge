import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleGrid from "./SingleGrid";
import { changeValue } from "../actions/gridActions";
import { uuid } from "uuidv4";

const GridTable = () => {
  const dispatch = useDispatch();

  const grid = useSelector((state) => state.gridReducer.grid);
  const updated = useSelector((state) => state.gridReducer.updated);
  const win = useSelector((state) => state.gridReducer.win);

  useEffect(() => {}, [updated]);

  return (
    <table role="grid" className="maxw-95">
      <tbody>
        {grid &&
          grid.map((row) => {
            let size = row.length;
            let totalSize = size % 2 === 0 ? size * size : size * size + 1;
            return (
              <tr role="row" key={uuid()}>
                {row &&
                  row.map((phrase) => {
                    if (phrase.id + 1 === totalSize / 2)
                      //commonPhrases.length / 2
                      return (
                        <SingleGrid
                          value={win ? "BINGO 🎉" : "Listening..."}
                          index={phrase.id}
                          key={phrase.id}
                          pressed={true}
                        />
                      );
                    return (
                      <SingleGrid
                        value={phrase.value}
                        index={phrase.id}
                        key={phrase.id}
                        pressed={phrase.pressed}
                        switchValue={() => {
                          dispatch(
                            changeValue(grid, !updated, phrase.row, phrase.col)
                          );
                        }}
                      />
                    );
                  })}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default GridTable;
