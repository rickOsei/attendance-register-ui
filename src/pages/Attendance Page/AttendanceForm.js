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
import useDate from "./useDate";
import customAxios from "../../utils/customAxios";

const AttendanceForm = () => {
  const navigate = useNavigate();
  const [employeeID, setEmployeeID] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const { currentDate, currentTime } = useDate();

  const handleLoggedIn = async (e) => {
    e.preventDefault();
    const logDetails = {
      date: currentDate,
      time: currentTime,
      employeeNumber: employeeID,
    };
    try {
      const { data } = await customAxios.post(
        "/attendance/logged-in",
        logDetails
      );
      data && setShowMessage(true);
      setEmployeeID("");
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  const handleLoggedOut = async (e) => {
    e.preventDefault();
    const logDetails = {
      date: currentDate,
      time: currentTime,
      employeeNumber: employeeID,
    };
    try {
      const { data } = await customAxios.post(
        "/attendance/logged-out",
        logDetails
      );
      data && setShowMessage(true);
      setEmployeeID("");
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

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
          <FormMessage style={{ display: showMessage ? "block" : "none" }}>
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
            <FormButton onClick={handleLoggedIn}>Log in</FormButton>
            <FormButton onClick={handleLoggedOut}>Log out</FormButton>
          </ButtonRow>
        </Form>
      </MainContainer>
    </>
  );
};

export default AttendanceForm;
