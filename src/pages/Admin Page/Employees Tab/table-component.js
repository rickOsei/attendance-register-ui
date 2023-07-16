import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditEmployeeForm from "./editemployee-form";
import { fetchEmployees } from "./helperFunctions";

export default function BasicTable({ employees, setEmployees }) {
  const [modalOpen, setOpenModal] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState({});

  useEffect(() => {
    fetchEmployees(setEmployees);
  }, []);

  const handleOpen = (employee) => {
    setCurrentEmployee(employee);
    setOpenModal(true);
  };

  return (
    <>
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
            {employees.map((employee, key) => {
              const { department, employeeNumber, name, position } = employee;
              return (
                <TableRow key={key}>
                  <TableCell align="right" className=" other-column">
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
                    <FaTrash />
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
    </>
  );
}
