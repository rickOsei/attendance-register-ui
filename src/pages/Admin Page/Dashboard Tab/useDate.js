import { useEffect, useState } from "react";

const useDate = () => {
  const [time, setTime] = useState(new Date());

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

  return { currentDate, currentTime };
};

export default useDate;
