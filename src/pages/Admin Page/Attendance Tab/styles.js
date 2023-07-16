import styled from "styled-components";

export const TableSection = styled.section`
  margin-top: 50px;
  width: 100%;
  height: 100vh;
  padding: 10px 15px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (min-width: 600px) {
    padding: 10px 35px;
    @media screen and (min-width: 800px) {
      padding: 10px 40px;
    }
    @media screen and (min-width: 1250px) {
      margin-top: 80px;
      padding: 10px 40px;
    }
  }

  .attendance-table,
  .attendance-table th,
  .attendance-table td {
    padding: 10px;
    text-align: left;
  }

  .attendance-table thead th {
    top: 0;
    left: 0;
    font-size: 16px;
    font-weight: 700;
    background-color: var(--clr-primary-1);
    cursor: pointer;
    color: white;
    text-transform: capitalize;
    z-index: 2;
    padding: 15px;
  }

  .name-head {
    border-radius: 25px 0 0 0;
  }

  .action-head {
    border-radius: 0 25px 0 0;
  }

  .attendance-table td {
    top: 0;
    left: 0;
    color: var(--primary-100);
    font-size: 17px;
    padding: 15px;
  }

  .column-one {
    align-items: center;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    left: 0;
    text-transform: capitalize;
    z-index: 2;
    background: #fff;
  }

  .other-column {
    z-index: -1;
  }

  .attendance-table tbody tr {
    border: 0.5px solid;
    border-color: rgba(240, 240, 240, 0.467) transparent;
    transition: all 0.2s;
    cursor: pointer;
    background: #fff;
  }
`;
