import { styled } from "styled-components";

export const LoginContainer = styled.main`
  width: 100%;
  height: 70vh;
  display: grid;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 700px) {
    height: 60vh;
  }
`;

export const MainLogin = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 630px) {
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const TopButtonRow = styled.div`
  width: 100%;
  height: 100%;
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  padding: 40px 10px;

  svg {
    font-weight: 800;
    margin-right: 10px;
    position: relative;
    top: 2px;
  }
`;

export const Form = styled.form`
  width: 90%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: none;
  padding: 30px 20px;
  box-shadow: 2px 2px 2px 2px var(--clr-grey-8);

  @media screen and (min-width: 600px) {
    width: 570px;
    margin: 100px auto;
    @media screen and (min-width: 800px) {
      margin: 50px auto;
    }
  }
`;

export const Heading = styled.h4`
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 600;
  color: #4f4f4f;
  text-align: center;
  margin-bottom: 10px;
`;

export const SubHeading = styled.h5`
  margin-bottom: 20px;
  font-size: 13px;
  font-weight: 400;
  color: #727272;
  line-height: 19px;
  text-align: center;
  @media screen and (min-width: 800px) {
    font-size: 14px;
    @media screen and (min-width: 1700px) {
      font-size: 15px;
    }
    @media screen and (min-width: 1800px) {
      font-size: 16px;
    }
  }
`;

export const FormInput = styled.div`
  position: relative;
`;

export const Label = styled.label`
  font-family: "Gellix-Medium", sans-serif;
  font-size: 13px;
  color: #727272;
  font-weight: 500;
`;

export const Input = styled.input`
  height: 50px;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
  border: 1px solid #676767d4;
  border-radius: 3px;
  padding-left: 10px;
  outline: none;
  font-size: 14px;

  @media screen and (min-width: 600px) {
    font-size: 14px;
    @media screen and (min-width: 1700px) {
      font-size: 15px;
    }
    @media screen and (min-width: 1800px) {
      font-size: 16px;
    }
  }
`;

export const Error = styled.p`
  font-size: 12px;
  text-align: right;
  color: red;
  position: relative;
  top: 16px;

  @media screen and (min-width: 830px) {
    font-size: 13px;
  }
`;

export const Icons = styled.div`
  .icon {
    position: absolute;
    top: 45px;
    right: 10px;
    cursor: pointer;
    font-size: 22px;
    font-weight: 900;
    color: #919191;
  }
`;

export const ButtonRow = styled.div`
  width: 100%;
  margin-top: 25px;
  display: flex;
  justify-content: center;
`;
