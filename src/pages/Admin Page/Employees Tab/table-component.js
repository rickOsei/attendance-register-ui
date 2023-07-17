import * as React from "react";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditEmployeeForm from "./editemployee-form";
import { fetchEmployees } from "./helperFunctions";
import DeleteEmployee from "./deleteEmployee";
import SearchComponent from "./search-component";
import { SearchRow } from "./styles";

export default function BasicTable({ employees, setEmployees }) {
  const [modalOpen, setOpenModal] = useState(false);
  const [deleteModalOpen, setOpenDeleteModal] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchEmployees(setEmployees);
  }, []);

  const filteredList = employees?.filter((employee) => {
    if (searchTerm) {
      return (
        employee.department
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase()) ||
        employee.position
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase()) ||
        employee.name
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      );
    }
    return employee;
  });

  const handleOpen = (employee) => {
    setCurrentEmployee(employee);
    setOpenModal(true);
  };

  const handleDeleteOpen = (employee) => {
    setCurrentEmployee(employee);
    setOpenDeleteModal(true);
  };

  return (
    <>
      <SearchRow>
        <SearchComponent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </SearchRow>

      <TableContainer sx={{ bgcolor: "transparent" }}>
        <Table className="employee-table" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="employee-id-head column-one">
                Employee ID
              </TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Department</TableCell>
              <TableCell align="right">Position</TableCell>
              <TableCell align="right" className="action-head">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredList?.map((employee, key) => {
              const { department, employeeNumber, name, position } = employee;
              return (
                <TableRow key={key}>
                  <TableCell align="right" className="column-one">
                    {employeeNumber}
                  </TableCell>
                  <TableCell align="right" className=" other-column">
                    {name}
                  </TableCell>
                  <TableCell align="right" className=" other-column">
                    {department}
                  </TableCell>{" "}
                  <TableCell align="right" className=" other-column">
                    {position}
                  </TableCell>
                  <TableCell align="right" className=" other-column">
                    <FaEdit onClick={() => handleOpen(employee)} />
                    <FaTrash onClick={() => handleDeleteOpen(employee)} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <EditEmployeeForm
        modalOpen={modalOpen}
        setOpenModal={setOpenModal}
        currentEmployee={currentEmployee}
        setEmployees={setEmployees}
      />
      <DeleteEmployee
        deleteModalOpen={deleteModalOpen}
        setOpenDeleteModal={setOpenDeleteModal}
        currentEmployee={currentEmployee}
        setEmployees={setEmployees}
      />
    </>
  );
}
