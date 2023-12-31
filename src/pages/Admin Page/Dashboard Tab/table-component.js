import * as React from "react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import useFetchHook from "./useFetchHook";
import DeleteLog from "./deleteLog";
import SearchComponent from "./search-component";
import { EmptyMessage, SearchRow } from "./styles";
import { Spinner } from "../../../styles/GlobalStyles";

export default function BasicTable() {
  const { logs } = useFetchHook();
  const [deleteModalOpen, setOpenDeleteModal] = useState(false);
  const [currentLog, setCurrentLog] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const handleDeleteOpen = (log) => {
    setCurrentLog(log);
    setOpenDeleteModal(true);
  };

  const filteredList = logs?.filter((log) => {
    if (searchTerm) {
      return (
        log.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        log.logType.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
    }
    return log;
  });

  if (logs.length === 0) {
    return (
      <EmptyMessage>
        Sorry,there are no attendance record for today.
      </EmptyMessage>
    );
  }

  return (
    <>
      <SearchRow>
        <SearchComponent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </SearchRow>
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
            {filteredList?.map((log, key) => {
              const { name, employeeNumber, date, time, logType } = log;
              return (
                <TableRow key={key}>
                  <TableCell align="right" className=" column-one">
                    {employeeNumber}
                  </TableCell>
                  <TableCell align="right" className=" other-column">
                    {name}
                  </TableCell>{" "}
                  <TableCell align="right" className=" other-column">
                    {logType}
                  </TableCell>
                  <TableCell align="right" className=" other-column">
                    {date}
                  </TableCell>
                  <TableCell align="right" className=" other-column">
                    {time}
                  </TableCell>
                  <TableCell align="right" className=" other-column">
                    <FaTrash onClick={() => handleDeleteOpen(log)} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <DeleteLog
        deleteModalOpen={deleteModalOpen}
        setOpenDeleteModal={setOpenDeleteModal}
        currentLog={currentLog}
      />
    </>
  );
}
