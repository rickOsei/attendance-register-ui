import Table from "./table-component";
import { TableSection } from "./styles";
import EmployeeForm from "./employee-form-component";
import { useState } from "react";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  return (
    <>
      <TableSection>
        <EmployeeForm setEmployees={setEmployees} />
        <Table employees={employees} setEmployees={setEmployees} />
      </TableSection>
    </>
  );
};

export default Employee;
