import { Modal } from "@mui/material";
import { DeleteEmployeeForm, DeleteWarning, ButtonRow } from "./styles";
import { DeleteEmployeeButton } from "../../../styles/Button";
import customAxios from "../../../utils/customAxios";
import { fetchEmployees } from "./helperFunctions";

const DeleteEmployee = ({
  setOpenDeleteModal,
  deleteModalOpen,
  setEmployees,
  currentEmployee,
}) => {
  const { _id } = currentEmployee;
  const handleClose = () => setOpenDeleteModal(false);
  const handleDelete = async () => {
    await customAxios.delete(`/employee/${_id}`);
    handleClose();
    fetchEmployees(setEmployees);
  };

  return (
    <section className="modal">
      <Modal
        open={deleteModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DeleteEmployeeForm>
          <DeleteWarning>Are You Sure You Want To Delete?</DeleteWarning>
          <ButtonRow>
            <DeleteEmployeeButton onClick={handleDelete}>
              Yes
            </DeleteEmployeeButton>
            <DeleteEmployeeButton onClick={handleClose}>
              No
            </DeleteEmployeeButton>
          </ButtonRow>
        </DeleteEmployeeForm>
      </Modal>
    </section>
  );
};

export default DeleteEmployee;
