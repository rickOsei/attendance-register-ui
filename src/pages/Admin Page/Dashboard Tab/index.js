import Table from "./table-component";
import { TableSection, Heading, Greeting } from "./styles";

const Dashboard = () => {
  const name = localStorage.getItem("name");
  return (
    <>
      <TableSection>
        <Greeting>Welcome, {name || "Administrator"}</Greeting>
        <Heading>Here are the employee logs for today</Heading>
        <Table />
      </TableSection>
    </>
  );
};

export default Dashboard;
