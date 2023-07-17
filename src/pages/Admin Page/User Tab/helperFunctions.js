import customAxios from "../../../utils/customAxios";

export const fetchUsers = async (func) => {
  try {
    const {
      data: { data: userData },
    } = await customAxios.get("/user");

    func(userData);
  } catch (error) {
    console.log(error);
  }
};
