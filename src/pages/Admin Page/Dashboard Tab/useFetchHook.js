import { useEffect, useState } from "react";
import customAxios from "../../../utils/customAxios";
import useDate from "./useDate";
import { toast } from "react-toastify";

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
      toast.error(error.response.data.msg);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, [refresh]);
  return { logs, setRefresh };
};

export default useFetchHook;
