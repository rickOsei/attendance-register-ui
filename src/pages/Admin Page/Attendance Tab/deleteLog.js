import { Modal } from "@mui/material";
import { DeleteLogForm, DeleteWarning, ButtonRow } from "./styles";
import { DeleteEmployeeButton } from "../../../styles/Button";
import customAxios from "../../../utils/customAxios";
import useFetchHook from "./useFetchHook";

const DeleteLog = ({ setOpenDeleteModal, deleteModalOpen, currentLog }) => {
  const { _id } = currentLog;
  const { setRefresh } = useFetchHook();
  const handleClose = () => setOpenDeleteModal(false);
  const handleDelete = async () => {
    await customAxios.delete(`/attendance/${_id}`);
    handleClose();
    setRefresh(true);
  };

  return (
    <section className="modal">
      <Modal
        open={deleteModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DeleteLogForm>
          <DeleteWarning>Are You Sure You Want To Delete?</DeleteWarning>
          <ButtonRow>
            <DeleteEmployeeButton onClick={handleDelete}>
              Yes
            </DeleteEmployeeButton>
            <DeleteEmployeeButton onClick={handleClose}>
              No
            </DeleteEmployeeButton>
          </ButtonRow>
        </DeleteLogForm>
      </Modal>
    </section>
  );
};

export default DeleteLog;
