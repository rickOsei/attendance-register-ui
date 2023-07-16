import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--primary-1100);

  @media screen and (min-width: 1250px) {
    flex-direction: row;
  }
`;

const RootLayout = () => {
  return (
    <Main>
      <Navbar />
      <Outlet />
    </Main>
  );
};

export default RootLayout;
