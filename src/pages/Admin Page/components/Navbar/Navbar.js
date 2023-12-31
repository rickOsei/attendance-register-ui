import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  VscAccount,
  VscHome,
  VscOutput,
  VscPackage,
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

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [showNavToggle, setShowNavToggle] = useState(true);
  const navigate = useNavigate();

  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  const Logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Wrapper className="navbar">
      <User
        className="user"
        onClick={() => setShowLogout(showLogout === true ? false : true)}
      >
        <NameEmail>
          <UserName className="user-name">{name || "Administrator"}</UserName>
          <UserEmail className="user-email">
            {email || "stranger@gmail.com"}
          </UserEmail>
        </NameEmail>
        <LogoutMini
          className="logout-smaller-screen"
          style={{
            display: showLogout && window.innerWidth < 1000 ? "flex" : "none",
          }}
        >
          <VscSignOut className="icon" />
          <LogoutMiniText onClick={Logout}>Logout</LogoutMiniText>
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
      <NavbarLogout onClick={Logout}>
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
        </NavItems>
      </NavInfoMini>
    </Wrapper>
  );
};

export default Navbar;
