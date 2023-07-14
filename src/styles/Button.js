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
