import { useEffect, useRef, useState } from "react";
import { formattedTime } from "../utils/formatTime";

const INTERVAL_MS = 1000;
const MAX_TIMER_SECONDS = 3600;
const MIN_TIMER_SECONDS = 0;
const TIMER_STEP_SECONDS = 30;

export const Timer = () => {
  const [startTime, setStartTime] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isOn && time > 0) {
      const timerId = setInterval(() => {
        setTime((prev) => prev - 1);
      }, INTERVAL_MS);

      timerRef.current = timerId;
    } else {
      // else if 대신 else문만 사용하고 로직을 안에서 처리하는 코드로 개선했어요.
      // shouldStopTimer라는 변수를 사용해서 어떤 조건인지 직관적으로 알 수 있어요.
      const shouldStopTimer = !isOn || time === 0;
      if (shouldStopTimer) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [isOn, time]);

  const handleStart = () => {
    setIsOn(true);
    setTime(time ? time : startTime);
    setStartTime(0);
  };

  const handleStop = () => {
    setIsOn(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsOn(false);
  };

  return (
    <div>
      <div>
        {time ? formattedTime(time) : formattedTime(startTime)}
        <button onClick={handleStart}>시작</button>
        <button onClick={handleStop}>멈춤</button>
        <button onClick={handleReset}>리셋</button>
      </div>

      <input
        type="range"
        value={startTime}
        min={MIN_TIMER_SECONDS}
        max={MAX_TIMER_SECONDS}
        step={TIMER_STEP_SECONDS}
        onChange={(event) => setStartTime(event.target.value)}
      />
    </div>
  );
};
