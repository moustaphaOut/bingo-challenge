import React from "react";

const Win = () => {
  return (
    <div className="items-center justify-between">
      <div className="w-50-l w-100 tc tl-l" role="alert" aria-live="assertive">
        <span className="f2 fw8">
          You got bingo!
          <span role="img" aria-label="Hurray!">
            🎉
          </span>
        </span>
      </div>
    </div>
  );
};

export default Win;
