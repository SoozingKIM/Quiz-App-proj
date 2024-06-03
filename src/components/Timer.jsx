import React, { useEffect, useState } from "react";

function Timer({ onTimeout, timeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        return prev - 100;
      });

      return () => {
        clearInterval(interval);
      };
    }, 100);
  }, []);

  console.log(remainingTime);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}

export default Timer;
