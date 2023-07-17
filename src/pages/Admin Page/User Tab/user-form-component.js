import { useState } from "react";
import { Modal } from "@mui/material";
import { NewEmployeeButton, PageButton } from "../../../styles/Button";
import { NewUserDetails } from "./styles";
import { useForm } from "react-hook-form";
import customAxios from "../../../utils/customAxios";
import { fetchUsers } from "./helperFunctions";

const UserForm = ({ setUsers }) => {
  const [modalOpen, setOpenModal] = useState(false);

  const handleClose = () => setOpenModal(false);
  const handleOpen = () => setOpenModal(true);
  const handleClick = () => console.log("success");

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    await customAxios.post(`user/`, data);
    fetchUsers(setUsers);
    handleClose();
    reset();
  };

  return (
    <>
      <NewEmployeeButton onClick={handleOpen}>Add User</NewEmployeeButton>
      <section className="modal">
        <Modal
          open={modalOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <NewUserDetails onSubmit={handleSubmit(onSubmit)}>
            <h4 className="new-employee-title">Add New User</h4>
            <input
              type="text"
              placeholder="Enter full name"
              {...register("name")}
            />
            <input type="text" placeholder="Enter role" {...register("role")} />
            <input
              type="text"
              placeholder="Enter email"
              {...register("email")}
            />
            <input
              type="text"
              placeholder="Enter password"
              {...register("password")}
            />
            <PageButton onClick={handleClick}>Submit</PageButton>
          </NewUserDetails>
        </Modal>
      </section>
    </>
  );
};

export default UserForm;
