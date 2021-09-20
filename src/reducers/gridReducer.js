import { CHECK_WIN, GENERATE_GRID, UPDATE_GRID } from "../actions/type";

const initalState = {
  size: 5,
  grid: [],
  updated: false,
  win: false,
  activeCell:null, //row, col
};

export let gridReducer = (state = initalState, action) => {
  switch (action.type) {
    case GENERATE_GRID:
      return {
        ...state,
        grid: action.payload[0],
        size: action.payload[1],
        activeCell: action.payload[2],
        win: false,
      };
    case UPDATE_GRID:
      return {
        ...state,
        grid: action.payload[0],
        updated: action.payload[1],
        activeCell: action.payload[2],
      };
    case CHECK_WIN:
      return {
        ...state,
        win: action.payload,
      };
    default: {
      return state;
    }
  }
};
