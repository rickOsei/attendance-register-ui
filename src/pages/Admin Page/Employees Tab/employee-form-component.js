import { Modal } from "@mui/material";
import { useState } from "react";
import { NewEmployeeButton, PageButton } from "../../../styles/Button";
import { NewEmployeeDetails } from "./styles";
import { useForm } from "react-hook-form";
import customAxios from "../../../utils/customAxios";
import { fetchEmployees } from "./helperFunctions";

const EmployeeForm = ({ setEmployees }) => {
  const [modalOpen, setOpenModal] = useState(false);

  const handleClose = () => setOpenModal(false);
  const handleOpen = () => setOpenModal(true);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data, e) => {
    e.preventDefault();
    await customAxios.post(`employee/`, data);
    fetchEmployees(setEmployees);
    handleClose();
    reset();
  };

  return (
    <>
      <NewEmployeeButton onClick={handleOpen}>Add Employee</NewEmployeeButton>
      <section className="modal">
        <Modal
          open={modalOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <NewEmployeeDetails onSubmit={handleSubmit(onSubmit)}>
            <h4 className="new-employee-title">Add New Employee</h4>
            <input
              type="text"
              placeholder="Enter full name"
              {...register("name")}
            />
            <input
              type="text"
              placeholder="Enter employee's department"
              {...register("department")}
            />
            <input
              type="text"
              placeholder="Enter employee's position"
              {...register("position")}
            />
            <PageButton>Submit</PageButton>
          </NewEmployeeDetails>
        </Modal>
      </section>
    </>
  );
};

export default EmployeeForm;
