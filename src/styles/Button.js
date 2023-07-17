import { styled } from "styled-components";

export const LoginButton = styled.button`
  padding: 5px;
  height: 20px;
  background: transparent;
  font-weight: 600;
  letter-spacing: 1.25px;
  color: white;
  border: none;
  cursor: pointer;
  @media screen and (min-width: 600px) {
    font-size: 16px;

    @media screen and (min-width: 1440px) {
      font-size: 18px;
    }
  }
`;

export const PageButton = styled.button`
  padding: 5px 10px;
  height: 40px;
  width: 50%;
  background: var(--clr-button);
  font-weight: 600;
  letter-spacing: 1.25px;
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  &:hover {
    background: var(--clr-button-hover);
  }
`;

export const FormButton = styled.button`
  padding: 5px 10px;
  height: 40px;
  width: 40%;
  background: var(--clr-primary-1);
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 1px;
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  &:hover {
    background: var(--clr-primary-0);
  }

  @media screen and (max-width: 300px) {
    padding: 5px;
    font-weight: 12px;
    width: 40%;
    height: 35px;
  }

  @media screen and (min-width: 600px) {
    font-size: 14px;
    @media screen and (min-width: 800px) {
      font-size: 15px;
    }
    @media screen and (min-width: 1700px) {
      font-size: 16px;
    }
  }
`;

export const BackButton = styled.button`
  padding: 5px 10px;
  height: 40px;
  width: 40%;
  background: transparent;
  font-weight: 600;
  letter-spacing: 1.25px;
  color: var(--clr-primary-1);
  border: 2px solid var(--clr-primary-1);
  border-radius: var(--border-radius);
  cursor: pointer;
  font-size: 12px;

  @media screen and (min-width: 600px) {
    width: 20%;
    font-size: 14px;
    @media screen and (min-width: 1440px) {
      width: 10%;
      font-size: 16px;
    }
  }
`;

export const NewEmployeeButton = styled.button`
  padding: 5px 10px;
  margin-bottom: 50px;
  height: 40px;
  width: 150px;
  background: var(--clr-button);
  font-weight: 600;
  letter-spacing: 1.25px;
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  &:hover {
    background: var(--clr-button-hover);
  }
`;

export const DeleteEmployeeButton = styled.button`
  padding: 5px 10px;
  height: 40px;
  width: 100px;
  margin: 10px;
  background: var(--clr-button);
  font-weight: 600;
  letter-spacing: 1.25px;
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  &:hover {
    background: var(--clr-button-hover);
  }
`;
