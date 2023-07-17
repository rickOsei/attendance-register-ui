import * as React from "react";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditUserForm from "./edituser-form";
import { fetchUsers } from "./helperFunctions";
import DeleteUser from "./deleteUser";

export default function BasicTable({ users, setUsers }) {
  const [modalOpen, setOpenModal] = useState(false);
  const [deleteModalOpen, setOpenDeleteModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    fetchUsers(setUsers);
  }, []);

  console.log(users);

  const handleOpen = (employee) => {
    setCurrentUser(employee);
    setOpenModal(true);
  };

  const handleDeleteOpen = (employee) => {
    setCurrentUser(employee);
    setOpenDeleteModal(true);
  };

  return (
    <>
      <TableContainer sx={{ bgcolor: "transparent" }}>
        <Table className="user-table" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="name-head column-one">Name</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right" className="action-head">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user, key) => {
              const { name, role, email } = user;
              return (
                <TableRow key={key}>
                  <TableCell align="right" className="column-one">
                    {name}
                  </TableCell>
                  <TableCell align="right" className=" other-column">
                    {role}
                  </TableCell>
                  <TableCell align="right" className=" other-column">
                    {email}
                  </TableCell>{" "}
                  <TableCell align="right" className=" other-column">
                    {/* <FaEdit onClick={() => handleOpen(user)} /> */}
                    <FaTrash onClick={() => handleDeleteOpen(user)} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <EditUserForm
        modalOpen={modalOpen}
        setOpenModal={setOpenModal}
        currentUser={currentUser}
        setUsers={setUsers}
      />
      <DeleteUser
        deleteModalOpen={deleteModalOpen}
        setOpenDeleteModal={setOpenDeleteModal}
        currentUser={currentUser}
        setUsers={setUsers}
      />
    </>
  );
}
