import { useEffect, useRef, useState } from "react";
import { formattedTime } from "../utils/formatTime";

const INTERVAL_MS = 1000;

export const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isOn === true) {
      const timerId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, INTERVAL_MS);

      timerRef.current = timerId;
    } else {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    return () => clearInterval(timerRef.current);
  }, [isOn]);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  const handleReset = () => {
    setTime(0);
    setIsOn(false);
  };

  return (
    <div>
      {formattedTime(time)}
      <button onClick={handleToggle}>{isOn ? "끄기" : "켜기"}</button>
      <button onClick={handleReset}>리셋</button>
    </div>
  );
};
