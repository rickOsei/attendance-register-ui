import Table from "./table-component";
import { TableSection } from "./styles";
import UserForm from "./user-form-component";
import { useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);

  return (
    <>
      <TableSection>
        <UserForm setUsers={setUsers} />
        <Table users={users} setUsers={setUsers} />
      </TableSection>
    </>
  );
};

export default User;
