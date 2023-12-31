import { Modal } from "@mui/material";
import { PageButton } from "../../../styles/Button";
import { NewEmployeeDetails } from "./styles";
import { useForm } from "react-hook-form";
import customAxios from "../../../utils/customAxios";
import { fetchEmployees } from "./helperFunctions";
import { useEffect } from "react";

const EditEmployeeForm = ({
  modalOpen,
  setOpenModal,
  currentEmployee,
  setEmployees,
}) => {
  const handleClose = () => setOpenModal(false);
  const { name, department, position, _id } = currentEmployee;

  // React hook form
  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      name,
      department,
      position,
    },
  });

  useEffect(() => {
    if (currentEmployee) {
      setValue("name", currentEmployee.name);
      setValue("department", currentEmployee.department);
      setValue("position", currentEmployee.position);
    }
  }, [currentEmployee, setValue]);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    await customAxios.patch(`employee/${_id}`, data);
    fetchEmployees(setEmployees);
    handleClose();
    reset();
  };

  return (
    <>
      <section className="modal">
        <Modal
          open={modalOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <NewEmployeeDetails onSubmit={handleSubmit(onSubmit)}>
            <h4 className="new-employee-title"> Edit Employee</h4>
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

export default EditEmployeeForm;
