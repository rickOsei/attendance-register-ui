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
    white-space: nowrap;
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

  .other-column svg {
    margin-right: 10px;
    color: var(--clr-primary-1);
  }

  .attendance-table tbody tr {
    border: 0.5px solid;
    border-color: rgba(240, 240, 240, 0.467) transparent;
    transition: all 0.2s;
    cursor: pointer;
    background: #fff;
  }
`;

export const DeleteLogForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 95%;
  height: 220px;
  padding: 25px 5px 40px 5px;
  background-color: var(--clr-primary-2);
  border: none;
  border-radius: 15px;
  outline: none;
  box-shadow: 0px 0px 2px 2px #727272;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 600px) {
    width: 50%;
    @media screen and (min-width: 1250px) {
      width: 450px;
    }
    @media screen and (min-width: 1800px) {
      width: 750px;
      height: auto;
    }
  }
`;

export const DeleteWarning = styled.h4`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-align: center;
  color: var(--clr-grey-8);
  margin: 10px auto;
  @media screen and (min-width: 600px) {
    font-size: 15px;
    @media screen and (min-width: 800px) {
      font-size: 16px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 15px;
      @media screen and (min-width: 1440px) {
        font-size: 16px;
      }
    }
  }
`;

export const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0 10px 0;
`;

export const SearchInput = styled.input`
  width: 30%;
  height: 35px;
  border-radius: var(--border-radius);
  padding: 5px 15px;
`;

export const SearchRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
`;
