import { useEffect, useState } from "react";

const useDate = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  var year = time.toLocaleString("default", { year: "numeric" });
  var month = time.toLocaleString("default", { month: "2-digit" });
  var day = time.toLocaleString("default", { day: "2-digit" });

  const displayDate = year + "-" + month + "-" + day;

  const displayTime = time.toLocaleString([], {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  const currentDate = year + "-" + month + "-" + day;

  const currentTime = new Date().toLocaleString([], {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return { displayDate, displayTime, currentDate, currentTime };
};

export default useDate;
