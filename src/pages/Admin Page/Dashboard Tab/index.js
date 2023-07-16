import Table from "./table-component";
import { TableSection, Heading, Greeting } from "./styles";

const Dashboard = () => {
  return (
    <>
      <TableSection>
        <Greeting>Welcome, Administrator 1</Greeting>
        <Heading>Here are the employee logs for today</Heading>
        <Table />
      </TableSection>
    </>
  );
};

export default Dashboard;
