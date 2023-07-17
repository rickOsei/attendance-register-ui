import { toast } from "react-toastify";
import customAxios from "../../../utils/customAxios";

export const fetchUsers = async (func) => {
  try {
    const {
      data: { data: userData },
    } = await customAxios.get("/user");

    func(userData);
  } catch (error) {
    toast.error(error.response.data.msg);
  }
};
