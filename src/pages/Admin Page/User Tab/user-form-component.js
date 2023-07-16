import { Modal } from "@mui/material";
import { useState } from "react";
import { NewEmployeeButton, PageButton } from "../../../styles/Button";
import { NewUserDetails } from "./styles";

const UserForm = () => {
  const [modalOpen, setOpenModal] = useState(false);

  const handleClose = () => setOpenModal(false);
  const handleOpen = () => setOpenModal(true);
  const handleClick = () => console.log("success");

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
          <NewUserDetails>
            <h4 className="new-employee-title">Add New User</h4>
            <input type="text" placeholder="Enter full name" />
            <input type="text" placeholder="Enter role" />
            <input type="text" placeholder="Enter email" />
            <input type="text" placeholder="Enter password" />
            <PageButton onClick={handleClick}>Submit</PageButton>
          </NewUserDetails>
        </Modal>
      </section>
    </>
  );
};

export default UserForm;
