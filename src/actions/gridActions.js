import { CHECK_WIN, GENERATE_GRID, UPDATE_GRID } from "./type";

export const checkWin = (grid, size, activeCell) => (dispatch) => {
  const [activeRow, activeCol] = activeCell;
  let win = false;
  if (
    checkRow(grid[activeRow]) ||
    checkCol(grid, activeCol, size) ||
    checkDiagonaLeft(grid, size, activeRow, activeCol) ||
    checkDiagonaRight(grid, size, activeRow, activeCol)
  )
    win = true;

  dispatch({
    type: CHECK_WIN,
    payload: win,
  });
};

function checkRow(row) {
  if (!row) return false;

  for (let i = 0; i < row.length; i++) if (!row[i].pressed) return false;

  return true;
}

function checkCol(grid, activeCol, size) {
  if (!grid[activeCol]) return false;

  for (let i = 0; i < size; i++) if (!grid[i][activeCol].pressed) return false;

  return true;
}

function checkDiagonaLeft(grid, size, activeRow, activeCol) {
  if (activeRow !== activeCol) return false;
  else for (let i = 0; i < size; i++) if (!grid[i][i].pressed) return false;

  return true;
}
function checkDiagonaRight(grid, size) {
  for (let i = 0; i < size; i++)
    if (!grid[i][size - 1 - i].pressed) return false;

  return true;
}

export const matchVoice = (grid, voicePhrase, updated) => (dispatch) => {
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (
        cell.value
          .replace(/[^a-zA-Z ]/g, "")
          .toLowerCase()
          .match(voicePhrase) ||
        voicePhrase.match(cell.value.replace(/[^a-zA-Z ]/g, "").toLowerCase())
      )
        return dispatch(changeValue(grid, updated, cell.row, cell.col));
    }
  }
};

export const genetareGrid = (size) => (dispatch) => {
  let grid = generateRandomGrid(commonPhrases, size);
  const center = (size % 2 ? (size + 1) / 2 : size / 2) - 1;
  grid[center][center].pressed = true;
  dispatch({
    type: GENERATE_GRID,
    payload: [grid, size, [center, center]],
  });
};

export const changeValue = (grid, updated, row, col) => (dispatch) => {
  grid[row][col].pressed = !grid[row][col].pressed;

  dispatch({
    type: UPDATE_GRID,
    payload: [grid, updated, [row, col]],
  });
};

/* https://stackoverflow.com/a/12646864 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

const generateRandomGrid = (values, size) => {
  const randomizedValues = shuffleArray(values);

  let grid = [];
  for (let row = 0; row < size; row++) {
    grid[row] = [];
    for (let col = 0; col < size; col++) {
      let id = col + row * size;
      grid[row][col] = {
        value: randomizedValues[id],
        id: id,
        pressed: false,
        col: col,
        row: row,
      };
    }
  }

  return grid;
};

let commonPhrases = [
  "Sorry, I couldn't log in",
  "I had connection issues",
  " Hello, are you there?",
  "We can see you, but we can't hear you.",
  "You're on mute!",
  "Can you unmute your microphone?",
  "Could you turn your video on?",
  " Can you hear me now?",
  "Can you see me now?",
  "Sorry, I didn't catch that, the connection is bad.",
  "Could you repeat that, you're breaking up a bit.",
  "You've frozen.",
  "Oh dear, we've lost you!",
  "Could you write that in the chat box please?",
  "Well, I think – sorry, go ahead…",
  "Welcome to the conference call…",
  "Is everyone ready to start?",
  "Shall we start?",
  "As you know, today we are discussing X…",
  "Did everyone receive the agenda? / Has everyone received the agenda?",
  "I’m sharing my screen, can everyone see it?",
  "I’m uploading the document now, can you see it?",
  "So the agreed action points are X, Y, Z.",
  "Is there anything else to discuss?",
  "I’ll confirm our discussion by email.",
  "Let’s finish / close the call, thank you everyone.",
];
