// import * as React from "react";
// import { useState } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import useFetchHook from "./useFetchHook";
// import { FaTrash } from "react-icons/fa";
// import DeleteLog from "./deleteLog";
// import SearchComponent from "./search-component";
// import { SearchRow } from "./styles";
// import { Spinner } from "../../../styles/GlobalStyles";

// export default function BasicTable() {
//   const { logs } = useFetchHook();
//   const [deleteModalOpen, setOpenDeleteModal] = useState(false);
//   const [currentLog, setCurrentLog] = useState({});
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleDeleteOpen = (log) => {
//     setCurrentLog(log);
//     setOpenDeleteModal(true);
//   };

//   const filteredList = logs?.filter((log) => {
//     if (searchTerm) {
//       return (
//         log.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
//         log.logType.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
//       );
//     }
//     return log;
//   });

//   const sortedDate = filteredList
//     ? [...filteredList].sort((a, b) => new Date(b.date) - new Date(a.date))
//     : [];

//   if (logs.length === 0) {
//     return (
//       <Spinner>
//         <div class="lds-roller">
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//       </Spinner>
//     );
//   }

//   return (
//     <>
//       <SearchRow>
//         <SearchComponent
//           searchTerm={searchTerm}
//           setSearchTerm={setSearchTerm}
//         />
//       </SearchRow>

//       <TableContainer sx={{ bgcolor: "transparent" }}>
//         <Table className="attendance-table" aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell className="name-head column-one">
//                 Employee ID
//               </TableCell>
//               <TableCell align="right">Name</TableCell>
//               <TableCell align="right">Log-Type</TableCell>
//               <TableCell align="right">Date</TableCell>
//               <TableCell align="right">Time</TableCell>
//               <TableCell align="right" className="action-head">
//                 Action
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {sortedDate?.map((log, key) => {
//               const { name, employeeNumber, date, time, logType } = log;

//               return (
//                 <TableRow key={key}>
//                   <TableCell align="right" className=" column-one">
//                     {employeeNumber}
//                   </TableCell>
//                   <TableCell align="right" className=" other-column">
//                     {name}
//                   </TableCell>{" "}
//                   <TableCell align="right" className=" other-column">
//                     {logType}
//                   </TableCell>
//                   <TableCell align="right" className=" other-column">
//                     {date}
//                   </TableCell>
//                   <TableCell align="right" className=" other-column">
//                     {time}
//                   </TableCell>
//                   <TableCell align="right" className=" other-column">
//                     <FaTrash onClick={() => handleDeleteOpen(log)} />
//                   </TableCell>
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <DeleteLog
//         deleteModalOpen={deleteModalOpen}
//         setOpenDeleteModal={setOpenDeleteModal}
//         currentLog={currentLog}
//       />
//     </>
//   );
// }

import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import useFetchHook from "./useFetchHook";
import { FaTrash } from "react-icons/fa";
import DeleteLog from "./deleteLog";
import SearchComponent from "./search-component";
import { DateRow, SearchRow } from "./styles";
import { Spinner } from "../../../styles/GlobalStyles";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
// import DatePicker from "@mui/lab/DatePicker";
import { DatePicker } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";

export default function BasicTable() {
  const { logs } = useFetchHook();
  const [deleteModalOpen, setOpenDeleteModal] = useState(false);
  const [currentLog, setCurrentLog] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDeleteOpen = (log) => {
    setCurrentLog(log);
    setOpenDeleteModal(true);
  };

  const filteredList = logs?.filter((log) => {
    if (searchTerm) {
      return (
        log.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.logType.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return log;
  });

  const filteredByDate = selectedDate
    ? filteredList?.filter(
        (log) =>
          new Date(log.date).toDateString() === selectedDate.toDateString()
      )
    : filteredList;

  const sortedDate = filteredByDate
    ? [...filteredByDate].sort((a, b) => new Date(b.date) - new Date(a.date))
    : [];

  if (logs.length === 0) {
    return (
      <Spinner>
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Spinner>
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
      <DateRow>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Select a Date"
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </DateRow>

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
            {sortedDate?.map((log, key) => {
              const { name, employeeNumber, date, time, logType } = log;

              return (
                <TableRow key={key}>
                  <TableCell align="right" className="column-one">
                    {employeeNumber}
                  </TableCell>
                  <TableCell align="right" className="other-column">
                    {name}
                  </TableCell>{" "}
                  <TableCell align="right" className="other-column">
                    {logType}
                  </TableCell>
                  <TableCell align="right" className="other-column">
                    {date}
                  </TableCell>
                  <TableCell align="right" className="other-column">
                    {time}
                  </TableCell>
                  <TableCell align="right" className="other-column">
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
