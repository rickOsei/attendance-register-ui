import { Modal } from "@mui/material";
import { useState } from "react";
import { NewEmployeeButton, PageButton } from "../../../styles/Button";
import { NewEmployeeDetails } from "./styles";

const EmployeeForm = () => {
  const [modalOpen, setOpenModal] = useState(false);

  const handleClose = () => setOpenModal(false);
  const handleOpen = () => setOpenModal(true);
  const handleClick = () => console.log("success");

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
          <NewEmployeeDetails>
            <h4 className="new-employee-title">Add New Employee</h4>
            <input type="text" placeholder="Enter full name" />
            <input type="text" placeholder="Enter employee's department" />
            <input type="text" placeholder="Enter employee's position" />
            <PageButton onClick={handleClick}>Submit</PageButton>
          </NewEmployeeDetails>
        </Modal>
      </section>
    </>
  );
};

export default EmployeeForm;
