import Table from "./table-component";
import { TableSection } from "./styles";
import UserForm from "./user-form-component";

const User = () => {
  return (
    <>
      <TableSection>
        <UserForm />
        <Table />
      </TableSection>
    </>
  );
};

export default User;
