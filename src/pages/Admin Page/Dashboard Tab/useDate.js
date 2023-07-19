import { useEffect, useState } from "react";

const useDate = () => {
  const [time, setTime] = useState(new Date());

  var year = time.toLocaleString("default", { year: "numeric" });
  var month = time.toLocaleString("default", { month: "2-digit" });
  var day = time.toLocaleString("default", { day: "2-digit" });

  const currentDate = year + "-" + month + "-" + day;

  const currentTime = new Date().toLocaleString([], {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return { currentDate, currentTime };
};

export default useDate;
