import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditEmployeeForm from "./editemployee-form";

export default function BasicTable() {
  const [modalOpen, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);

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
            <TableRow>
              <TableCell align="right" className=" column-one">
                Hello
              </TableCell>
              <TableCell align="right" className=" other-column">
                Hello
              </TableCell>
              <TableCell align="right" className=" other-column">
                Hello
              </TableCell>
              <TableCell align="right" className=" other-column">
                Hello
              </TableCell>
              <TableCell align="right" className=" other-column">
                Hello
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right" className=" column-one">
                Hello
              </TableCell>
              <TableCell align="right" className=" other-column">
                Hello
              </TableCell>
              <TableCell align="right" className=" other-column">
                Hello
              </TableCell>
              <TableCell align="right" className=" other-column">
                Hello
              </TableCell>
              <TableCell align="right" className=" other-column">
                <button onClick={handleOpen}>Edit</button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <EditEmployeeForm modalOpen={modalOpen} setOpenModal={setOpenModal} />
    </>
  );
}
