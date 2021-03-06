import React, { useState } from "react";

function Buttons({ start, stop, reset, status, wait }) {
  return (
    <div className="buttons_container">
      {status === 0 ? (
        <button onClick={start} className="button_start">
          Go
        </button>
      ) : (
        ""
      )}
      {status === 1 ? (
        <div>
          <button onClick={stop} className="button_stop">
            Pause
          </button>
          <button onClick={reset} className="button_reset">
            Reset
          </button>
          <button onClick={wait} className="button_wait">
            Wait
          </button>
        </div>
      ) : (
        ""
      )}
      {status === 2 ? (
        <div>
          <button onClick={start} className="button_start">
            Go
          </button>
          <button onClick={reset} className="button_reset">
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Buttons;
