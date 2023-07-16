import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  VscAccount,
  VscHome,
  VscOutput,
  VscPackage,
  VscReport,
  VscSignOut,
} from "react-icons/vsc";
import {
  LogoutMini,
  LogoutMiniText,
  NameEmail,
  Navs,
  User,
  UserEmail,
  UserName,
  Wrapper,
  NavbarLogout,
  NavToggle,
  ToggleSpan,
  ToggleCross,
  ToggleBuger,
  NavInfoMini,
  NavItems,
} from "./styles";
// import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [showNavToggle, setShowNavToggle] = useState(true);

  return (
    <Wrapper className="navbar">
      <User
        className="user"
        onClick={() => setShowLogout(showLogout === true ? false : true)}
      >
        <NameEmail>
          <UserName className="user-name">Stranger Lee</UserName>
          <UserEmail className="user-email">strangerlee@gmail.com</UserEmail>
        </NameEmail>
        <LogoutMini
          className="logout-smaller-screen"
          style={{
            display: showLogout && window.innerWidth < 1000 ? "flex" : "none",
          }}
        >
          <VscSignOut className="icon" />
          <LogoutMiniText>Logout</LogoutMiniText>
        </LogoutMini>
      </User>
      <Navs className="navs">
        <NavLink to="dashboard" className="nav">
          <VscHome className="icon" />
          <h3>Overview</h3>
        </NavLink>
        <NavLink to="employee" className="nav">
          <VscPackage className="icon" />
          <h3>Employee</h3>
        </NavLink>
        <NavLink to="attendance" className="nav">
          <VscOutput className="icon" />
          <h3>Attendance</h3>
        </NavLink>
        <NavLink to="user" className="nav">
          <VscAccount className="icon" />
          <h3>User</h3>
        </NavLink>
      </Navs>
      <NavbarLogout>
        <VscSignOut className="icon" />
        <h3>Logout</h3>
      </NavbarLogout>

      {/* Sreen and max-width:600px */}

      <NavToggle
        // className="nav-toggle"
        onClick={() => setShowNavToggle(!showNavToggle)}
      >
        <ToggleBuger className={showNavToggle ? "burger" : "burger open-nav"}>
          <ToggleSpan></ToggleSpan>
          <ToggleSpan></ToggleSpan>
          <ToggleSpan></ToggleSpan>
        </ToggleBuger>
        <ToggleCross className={showNavToggle ? "cross " : "cross open-nav"}>
          <ToggleSpan></ToggleSpan>
          <ToggleSpan></ToggleSpan>
        </ToggleCross>
      </NavToggle>

      <NavInfoMini
        className={showNavToggle ? "nav-info-mini open-nav" : "nav-info-mini"}
      >
        <NavItems className="nav-items">
          <NavLink to="/" className="nav">
            <VscHome className="icon" />
            <h3>Overview</h3>
          </NavLink>
          <NavLink to="/product" className="nav">
            <VscPackage className="icon" />
            <h3>Product</h3>
          </NavLink>
          <NavLink to="/customer" className="nav">
            <VscAccount className="icon" />
            <h3>Customer</h3>
          </NavLink>
          <NavLink to="/order" className="nav">
            <VscOutput className="icon" />
            <h3>Place Order</h3>
          </NavLink>
          <NavLink to="/report" className="nav">
            <VscReport className="icon" />
            <h3>Report</h3>
          </NavLink>
        </NavItems>
      </NavInfoMini>
    </Wrapper>
  );
};

export default Navbar;
