import { Modal } from "@mui/material";
import { PageButton } from "../../../styles/Button";
import { NewUserDetails } from "./styles";

const EditUserForm = ({ modalOpen, setOpenModal }) => {
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
          <NewUserDetails>
            <h4 className="new-employee-title"> Edit User</h4>
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

export default EditUserForm;
