import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridTable from "../GridTable";
import Header from "../Header";
import Instructions from "../Instructions";
import Win from "../Win";
import { checkWin, genetareGrid, matchVoice } from "../../actions/gridActions";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Board = () => {
  const dispatch = useDispatch();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ continuous: true, language: "en-US" });

  const win = useSelector((state) => state.gridReducer.win);
  const grid = useSelector((state) => state.gridReducer.grid);
  const size = useSelector((state) => state.gridReducer.size);
  const updated = useSelector((state) => state.gridReducer.updated);
  const activeCell = useSelector((state) => state.gridReducer.activeCell);

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true, language: "en-US" });
    dispatch(genetareGrid(size));
  }, [dispatch]);

  useEffect(() => {
    resetTranscript();
    if (grid && grid[0]) dispatch(checkWin(grid, size, activeCell));
  }, [updated]);

  useEffect(() => {
    if (transcript.length > 12) {
      dispatch(
        matchVoice(
          grid,
          transcript.replace(/[^a-zA-Z ]/g, "").toLowerCase(),
          !updated
        )
      );
    }
  }, [transcript.length]);

  return (
    <div style={{ textAlign: "-webkit-center" }}>
      <Header />
      {browserSupportsSpeechRecognition ? (
        <div className="">
          <p>Microphone: {listening ? "on" : "off"}</p>
          <button onClick={SpeechRecognition.startListening}>Start</button>
          <button onClick={SpeechRecognition.stopListening}>Stop</button>
          <button onClick={resetTranscript}>Reset</button>
          <p>{transcript}</p>
        </div>
      ) : (
        <span>Browser doesn't support speech recognition.</span>
      )}

      <main>
        <GridTable />
        {win ? <Win /> : null}
      </main>
      <Instructions />
    </div>
  );
};

export default Board;
