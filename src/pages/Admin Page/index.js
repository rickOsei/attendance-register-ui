import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { DummySpace, Main } from "./styles";

const RootLayout = () => {
  return (
    <Main>
      <Navbar />
      <DummySpace />
      <Outlet />
    </Main>
  );
};

export default RootLayout;
