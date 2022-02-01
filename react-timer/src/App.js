import Timer from "./components/Timer";
import Buttons from "./components/Buttons";
import { useEffect, useState } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

function App() {
  const [timer, setTimer] = useState(0);
  const [isOn, setOn] = useState(false);
  const [status, setStatus] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const unsubscribe$ = new Subject();
    interval(1)
      .pipe(takeUntil(unsubscribe$))
      .subscribe(() => {
        if (isOn) {
          setTimer((val) => val + 1);
        }
      });
    return () => {
      unsubscribe$.next();
      unsubscribe$.complete();
    };
  }, [isOn]);

  const handleStart = () => {
    setOn((prevState) => !prevState);
    setStatus(1);
  };
  const handleWait = () => {
    setCount(1);
    setTimeout(() => {
      setCount(count + 1);
      if (count == 2) {
        setOn((prevState) => !prevState);
      }
    }, 300);
  };
  const handleStop = () => {
    if (timer !== 0) {
      setOn(false);
    }
    setStatus(2);
  };

  const handleReset = () => {
    setTimer(0);
  };
  return (
    <div className="App">
      <Timer time={timer} />
      <Buttons
        status={status}
        start={handleStart}
        stop={handleStop}
        reset={handleReset}
        wait={handleWait}
      />
    </div>
  );
}

export default App;
