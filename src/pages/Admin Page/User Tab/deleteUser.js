import { Modal } from "@mui/material";
import { DeleteUserForm, DeleteWarning, ButtonRow } from "./styles";
import { DeleteEmployeeButton } from "../../../styles/Button";
import customAxios from "../../../utils/customAxios";
import { fetchUsers } from "./helperFunctions";

const DeleteUser = ({
  setOpenDeleteModal,
  deleteModalOpen,
  setUsers,
  currentUser,
}) => {
  const { _id } = currentUser;
  const handleClose = () => setOpenDeleteModal(false);
  const handleDelete = async () => {
    await customAxios.delete(`/user/${_id}`);
    handleClose();
    fetchUsers(setUsers);
  };

  return (
    <section className="modal">
      <Modal
        open={deleteModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DeleteUserForm>
          <DeleteWarning>Are You Sure You Want To Delete?</DeleteWarning>
          <ButtonRow>
            <DeleteEmployeeButton onClick={handleDelete}>
              Yes
            </DeleteEmployeeButton>
            <DeleteEmployeeButton onClick={handleClose}>
              No
            </DeleteEmployeeButton>
          </ButtonRow>
        </DeleteUserForm>
      </Modal>
    </section>
  );
};

export default DeleteUser;
