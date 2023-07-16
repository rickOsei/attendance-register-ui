import { styled } from "styled-components";

export const HomeContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    120deg,
    var(--clr-primary-1) 20%,
    var(--clr-secondary-1)
  );
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const LoginSection = styled.div`
  flex: 10%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px;
  background: var(--clr-primary-1);
`;

export const MainDetails = styled.div`
  flex: 90%;
  margin: 0 auto;
  padding: 10px;

  @media screen and (min-width: 1024px) {
    display: flex;
    width: 100%;
    @media screen and (min-width: 1440px) {
      justify-content: center;
      padding: 10px 0 0 150px;
    }
  }
`;

export const HeadingSection = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    align-items: flex-end;
    position: relative;
    left: 120px;
  }
`;

export const Heading = styled.h1`
  font-size: 20px;
  font-weight: 700;
  /* letter-spacing: 2px; */
  line-height: 35px;
  text-align: center;
  color: #fff;
  @media screen and (min-width: 600px) {
    font-size: 25px;
    @media screen and (min-width: 800px) {
      font-size: 30px;
      line-height: 45px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 25px;
      @media screen and (min-width: 1440px) {
        font-size: 40px;
        line-height: 55px;
      }
    }
  }
`;

export const SubHeading = styled.h4`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-align: center;
  color: var(--clr-grey-8);
  margin: 10px auto;
  @media screen and (min-width: 600px) {
    font-size: 15px;
    @media screen and (min-width: 800px) {
      font-size: 16px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 15px;
      @media screen and (min-width: 1440px) {
        font-size: 16px;
      }
    }
  }
`;

export const ButtonRow = styled.div`
  width: 100%;
  margin-top: 35px;
  display: flex;
  justify-content: center;
`;

export const Figure = styled.figure`
  flex: 3;
  height: 100%;
  display: none;
  z-index: 1;
  @media screen and (min-width: 1024px) {
    flex: 2;
    display: flex;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;
