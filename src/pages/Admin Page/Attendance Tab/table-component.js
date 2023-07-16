import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function BasicTable() {
  return (
    <>
      <TableContainer sx={{ bgcolor: "transparent" }}>
        <Table className="attendance-table" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="name-head column-one">
                Employee ID
              </TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Log-Type</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Time</TableCell>
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
              </TableCell>{" "}
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
              </TableCell>{" "}
              <TableCell align="right" className=" other-column">
                Hello
              </TableCell>
              <TableCell align="right" className=" other-column">
                <button>Delete</button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
