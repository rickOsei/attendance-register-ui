import { styled } from "styled-components";

export const Wrapper = styled.nav`
  height: 70px;
  width: 100%;
  background: var(--clr-primary-1);
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  padding: 0;
  color: #fff;
  z-index: 100;
  border: none;
  display: flex;
  flex-direction: row-reverse;
  padding-left: 10px;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1250px) {
    width: 20%;
    min-height: 100vh;
    flex-direction: column;
    border-radius: 0 35px 35px 0;
    padding: 0;
  }
`;

export const User = styled.div`
  margin-bottom: 0;
  flex: 1;
  padding: 15px 5px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border: none;
  position: relative;

  @media screen and (min-width: 1000px) {
    flex: 2;
    justify-content: flex-start;
    padding: 15px 5px;
    @media screen and (min-width: 1250px) {
      flex-direction: column;
      justify-content: center;
      padding: 25px;
      flex: 2;

      border: 1px solid;
      border-radius: 0;
      border-color: var(--primary-0);
      border-left-color: transparent;
      border-top-color: transparent;
      border-right-color: transparent;
    }
  }
`;

export const NameEmail = styled.div`
  /* display: none; */

  @media screen and (min-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

export const UserName = styled.h5`
  margin-bottom: 5px;
  text-transform: uppercase;
  font-size: 12.5px;

  @media screen and (min-width: 1250px) {
    font-size: 14.5px;

    @media screen and (min-width: 1800px) {
      font-size: 25px;
    }
  }
`;
export const UserEmail = styled.h5`
  font-size: 10px;
  font-weight: 200;

  @media screen and (min-width: 1250px) {
    font-size: 12px;

    @media screen and (min-width: 1800px) {
      font-size: 20px;
    }
  }
`;

export const LogoutMini = styled.div`
  position: absolute;
  right: 0;
  bottom: -52px;

  width: 80%;
  height: 50px;
  background-color: var(--clr-primary-1);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 25px;
    margin-right: 10px;
    position: relative;
    bottom: 5px;
  }

  h3 {
    font-weight: 100;
    font-size: 12px;
  }

  @media screen and (min-width: 600px) {
    width: 80%;
    @media screen and (min-width: 1000px) {
      visibility: hidden;
    }
  }
`;

export const LogoutMiniText = styled.h3``;

export const Navs = styled.div`
  display: none;
  @media screen and (min-width: 600px) {
    flex: 4;
    display: flex;
    flex-direction: row;

    @media screen and (min-width: 1250px) {
      flex-direction: column;
      background: var(--primary-200);
      padding: 25px 0 25px 25px;
    }
  }

  .nav {
    display: flex;
    justify-content: left;
    align-items: center;
    text-decoration: none;
    color: #ffffff;
    padding: 15px 2px;
  }

  .active {
    color: #ffad14 !important;
  }

  h3 {
    margin-left: 20px;
    font-size: 12px;
  }

  .icon {
    display: none;
  }

  @media screen and (min-width: 600px) {
    .nav {
      padding: 15px 10px;
    }

    @media screen and (min-width: 1250px) {
      .nav {
        padding: 15px 10px;
        margin-top: 15px;
        border: none !important;
      }
      h3 {
        margin-left: 20px;
        font-size: 13px;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1.5px;
      }
      .icon {
        display: block;
        font-size: 30px;
        position: relative;
        bottom: 5px;
      }

      .active {
        color: var(--clr-primary-1) !important;
        background-color: var(--clr-white);
        position: relative;
      }

      .active::after {
        content: " ";
        width: 50px;
        height: 25px;
        background: var(--clr-primary-1);
        position: absolute;
        right: 0px;
        bottom: -25px;
        border-radius: 0 25px 0 0;
        box-shadow: 10px -4px 0px 2px var(--clr-white);
      }

      .active::before {
        content: " ";
        width: 50px;
        height: 25px;
        background: var(--clr-primary-1);
        position: absolute;
        right: 0;
        top: -25px;
        border-radius: 0 0 25px 0;
        box-shadow: 10px 4px 0px 2px var(--clr-white);
      }
    }
    @media screen and (min-width: 1750px) {
      .nav h3 {
        font-size: 20px;
      }
    }
  }
`;

export const NavbarLogout = styled.div`
  display: none;

  .icon {
    font-size: 25px;
    margin-right: 10px;
  }

  h3 {
    font-weight: 100;
    font-size: 12px;
  }

  @media screen and (min-width: 1000px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 25px;
    cursor: pointer;
    flex: 2;
    border: none;

    .icon {
      position: relative;
      bottom: 5px;
    }
  }

  @media screen and (min-width: 1250px) {
    justify-content: flex-start;

    border: 1px solid;
    border-radius: 0 0 35px 0;
    border-color: var(--primary-0);
    border-left-color: transparent;
    border-bottom-color: transparent;

    h3 {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 1750px) {
    h3,
    .icon {
      font-size: 28px;
    }
  }
`;

export const NavToggle = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background: transparent;
  border: 0;
  cursor: pointer;
  outline: none;
  z-index: 10;
  height: 100%;
  width: 100%;
  flex: 1;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const ToggleSpan = styled.span`
  background: var(--clr-white);
`;

export const ToggleCross = styled.div`
  position: relative;
  right: 0px;
  bottom: 12px;
  width: 25px;
  height: 25px;
  transform: rotate(45deg);

  span:first-of-type {
    position: absolute;
    left: 23px;
    top: 11px;
    height: 0;
    transition: height 0.25s ease-out 0.4s;

    width: 5px;
  }

  span:nth-of-type(2) {
    position: absolute;
    left: 14px;
    top: 20px;
    height: 5px;
    transition: width 0.25s ease-out 0.45s;
    width: 0;
  }

  .open-nav span:first-of-type {
    height: 110%;
  }

  .open-nav span:nth-of-type(2) {
    width: 27px;
  }
`;
export const ToggleBuger = styled.div`
  position: relative;
  height: 25px;
  right: 0px;

  span {
    height: 5px;
    width: 30px;
    position: absolute;
  }

  span:first-of-type {
    top: calc(50% - 8px);
    transition: width 0.25s ease-out 0.3s;
  }

  span:nth-of-type(2) {
    top: 50%;
    transition: width 0.25s ease-out 0.5s;
  }

  span:nth-of-type(3) {
    top: calc(50% + 8px);
    transition: width 0.25s ease-out 0.65s;
  }

  .open-nav span {
    width: 0;
  }
`;

export const NavInfoMini = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  width: 100%;
  padding: 10px;
  background: linear-gradient(
    120deg,
    var(--clr-primary-1) 20%,
    var(--clr-secondary-1)
  );
  box-shadow: 2px 8px 10px 2px rgba(148, 147, 147, 0.317);

  display: flex;
  flex-direction: column;
  transition: all 1.5s;
  z-index: 0;

  &.open-nav {
    top: -900%;
  }
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const NavItems = styled.div`
  width: 60%;
  margin: 0 auto;

  .nav {
    width: 100%;
    color: #fff;
    display: flex;
    width: 100%;
    margin: 25px;
    font-weight: 600;
  }

  .active {
    color: #ffad14 !important;
  }

  .icon {
    display: block;
    position: relative;
    top: 5px;
    right: 15px;
    font-size: 18px;
  }

  @media screen and (min-width: 360px) {
    width: 40%;
  }
`;
