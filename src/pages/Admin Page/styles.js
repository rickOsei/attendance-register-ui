import { styled } from "styled-components";

export const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--primary-1100);
  overflow: hidden;

  @media screen and (min-width: 1250px) {
    flex-direction: row;
  }
`;

export const DummySpace = styled.div`
  width: 100vw;
  height: 70px;

  @media screen and (min-width: 1250px) {
    width: 25%;
    height: 100vh;
  }
`;

export const BackNavigation = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 25px;

  @media screen and (min-width: 1250px) {
    width: 300px;
    /* height: 70px; */
    position: absolute;
    right: 0;
    top: 0;
  }
`;
