import Table from "./table-component";
import { TableSection } from "./styles";
import EmployeeForm from "./employee-form-component";

const Employee = () => {
  return (
    <>
      <TableSection>
        <EmployeeForm />
        <Table />
      </TableSection>
    </>
  );
};

export default Employee;
