import { useNavigate } from "react-router-dom";
import {
  Figure,
  HeadingSection,
  Heading,
  HomeContainer,
  Image,
  LoginSection,
  MainDetails,
  SubHeading,
  ButtonRow,
} from "./styles";
import { LoginButton, PageButton } from "../../styles/Button";
import FrontImage from "../../assets/landingpage.png";

const LandingPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  return (
    <HomeContainer>
      <LoginSection>
        {!token ? (
          <LoginButton onClick={() => navigate("/login")}>
            Admin Login
          </LoginButton>
        ) : (
          <LoginButton onClick={() => navigate("/admin/dashboard")}>
            Admin Page
          </LoginButton>
        )}
      </LoginSection>
      <MainDetails>
        <HeadingSection>
          <Heading>Welcome To The Attendance Register App</Heading>
          <SubHeading>Please Proceed To Log in Your Attendance</SubHeading>
          <ButtonRow>
            <PageButton onClick={() => navigate("/attendance")}>
              Proceed
            </PageButton>
          </ButtonRow>
        </HeadingSection>
        <Figure>
          <Image src={FrontImage} />
        </Figure>
      </MainDetails>
    </HomeContainer>
  );
};

export default LandingPage;
