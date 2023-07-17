import { useEffect, useState } from "react";
import customAxios from "../../../utils/customAxios";
import useDate from "./useDate";

const useFetchHook = () => {
  const [logs, setLogs] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { currentDate } = useDate();

  const fetchLogs = async () => {
    try {
      const {
        data: { data: logData },
      } = await customAxios.get(`/attendance/${currentDate}`);
      setLogs(logData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, [refresh]);
  return { logs, setRefresh };
};

export default useFetchHook;
