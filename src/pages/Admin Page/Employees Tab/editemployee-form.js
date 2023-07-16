import { Modal } from "@mui/material";
import { PageButton } from "../../../styles/Button";
import { NewEmployeeDetails } from "./styles";

const EditEmployeeForm = ({ modalOpen, setOpenModal }) => {
  const handleClose = () => setOpenModal(false);
  const handleClick = () => console.log("success");

  return (
    <>
      <section className="modal">
        <Modal
          open={modalOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <NewEmployeeDetails>
            <h4 className="new-employee-title"> Edit Employee</h4>
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

export default EditEmployeeForm;
