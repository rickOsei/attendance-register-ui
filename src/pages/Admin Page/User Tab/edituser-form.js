import { useEffect } from "react";
import { Modal } from "@mui/material";
import { PageButton } from "../../../styles/Button";
import { NewUserDetails } from "./styles";
import { useForm } from "react-hook-form";
import customAxios from "../../../utils/customAxios";
import { fetchUsers } from "./helperFunctions";

const EditUserForm = ({ modalOpen, setOpenModal, currentUser, setUsers }) => {
  const handleClose = () => setOpenModal(false);
  const { name, role, email, password, _id } = currentUser;

  // React hook form
  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      name,
      role,
      email,
      password,
    },
  });
  useEffect(() => {
    if (currentUser) {
      setValue("name", currentUser.name);
      setValue("role", currentUser.role);
      setValue("email", currentUser.email);
      setValue("password", currentUser.password);
    }
  }, [currentUser, setValue]);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    await customAxios.patch(`employee/${_id}`, data);
    fetchUsers(setUsers);
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
          <NewUserDetails onSubmit={handleSubmit(onSubmit)}>
            <h4 className="new-employee-title"> Edit User</h4>
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
            <PageButton>Submit</PageButton>
          </NewUserDetails>
        </Modal>
      </section>
    </>
  );
};

export default EditUserForm;
