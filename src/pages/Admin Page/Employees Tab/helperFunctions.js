import { toast } from "react-toastify";
import customAxios from "../../../utils/customAxios";

export const fetchEmployees = async (func) => {
  try {
    const {
      data: { data: employeeData },
    } = await customAxios.get("/employee");

    func(employeeData);
  } catch (error) {
    toast.error(error.response.data.msg);
  }
};
