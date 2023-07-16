import { styled } from "styled-components";

export const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

export const TopButtonRow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 50px 35px;

  svg {
    font-weight: 800;
    margin-right: 10px;
    position: relative;
    top: 2px;
  }
`;

export const Form = styled.form`
  width: 90%;
  height: auto;
  min-height: 100px;
  max-height: 300px;
  border: none;
  border-radius: var(--border-radius);
  padding: 30px 10px;
  box-shadow: 2px 2px 2px 2px var(--clr-grey-8);
  margin-top: 150px;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    width: 70%;
    @media screen and (min-width: 800px) {
      width: 50%;
    }
    @media screen and (min-width: 1700px) {
      width: 30%;
    }
  }
`;

export const FormTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: #4f4f4f;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 600px) {
    font-size: 17px;
    margin-bottom: 30px;
    @media screen and (min-width: 800px) {
      font-size: 18px;
    }
    @media screen and (font-size: 1700px) {
      font-size: 20px;
    }
  }
`;

export const FormMessage = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #727272;
  text-align: center;

  @media screen and (min-width: 600px) {
    font-size: 14px;
    @media screen and (min-width: 1700px) {
      font-size: 15px;
    }
  }
`;

export const InputSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  outline: none;
  width: 100%;
  height: 30px;
  font-size: 14px;
  padding: 10px;
  @media screen and (min-width: 600px) {
    height: 35px;
    font-size: 14px;
    @media screen and (min-width: 1700px) {
      height: 40px;
      font-size: 15px;
    }
    @media screen and (min-width: 1800px) {
      height: 40px;
      font-size: 16px;
    }
  }
`;

export const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 30px;

  @media screen and (min-width: 600px) {
    margin-top: 25px;
    @media screen and (min-width: 800px) {
      margin-top: 30px;
    }
    @media screen and (min-width: 1700px) {
      margin-top: 35px;
    }
  }
`;
