import { useEffect, useState } from "react";

const useDate = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const displayDate =
    time.getDate() + "-" + (time.getMonth() + 1) + "-" + time.getFullYear();

  const displayTime = time.toLocaleString([], {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  const currentDate =
    new Date().getDate() +
    "-" +
    (time.getMonth() + 1) +
    "-" +
    time.getFullYear();

  const currentTime = new Date().toLocaleString([], {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return { displayDate, displayTime, currentDate, currentTime };
};

export default useDate;
