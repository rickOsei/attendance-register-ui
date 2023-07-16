import React, { useState } from "react";
import {
  MainContainer,
  ButtonRow,
  Form,
  InputSection,
  Input,
  FormMessage,
  FormTitle,
  TopButtonRow,
} from "./styles";
import { BackButton, FormButton } from "../../styles/Button";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const AttendanceForm = () => {
  const [employeeID, setEmployeeID] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <TopButtonRow>
        <BackButton onClick={() => navigate("/")}>
          <BsArrowLeftCircle />
          Back
        </BackButton>
      </TopButtonRow>
      <MainContainer>
        <Form>
          <FormTitle>Employee Attendance Form</FormTitle>
          <FormMessage>
            Hello, you have succesfully logged your attendance
          </FormMessage>
          <InputSection>
            <Input
              type="text"
              value={employeeID}
              onChange={(e) => setEmployeeID(e.target.value)}
              placeholder="Enter employee ID"
            />
          </InputSection>
          <ButtonRow>
            <FormButton>Log in</FormButton>
            <FormButton>Log out</FormButton>
          </ButtonRow>
        </Form>
      </MainContainer>
    </>
  );
};

export default AttendanceForm;
