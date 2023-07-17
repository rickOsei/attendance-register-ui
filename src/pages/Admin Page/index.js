import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { BackNavigation, DummySpace, Main } from "./styles";
import { BackHomeButton } from "../../styles/Button";

const RootLayout = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <Navbar />
      <DummySpace />
      <BackNavigation onClick={() => navigate("/")}>
        <BackHomeButton>Back Home</BackHomeButton>
      </BackNavigation>
      <Outlet />
    </Main>
  );
};

export default RootLayout;
