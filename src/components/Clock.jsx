import { useEffect, useState } from "react";

const INTERVAL_MS = 1000;

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, []);

  return <div>{time.toLocaleTimeString()}</div>;
};
