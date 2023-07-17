import React, { useState } from "react";
import {
  MainContainer,
  ButtonRow,
  Form,
  InputSection,
  Input,
  FormTitle,
  TopButtonRow,
} from "./styles";
import { toast } from "react-toastify";
import { BackButton, FormButton } from "../../styles/Button";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useDate from "./useDate";
import customAxios from "../../utils/customAxios";

const AttendanceForm = () => {
  const navigate = useNavigate();
  const [employeeID, setEmployeeID] = useState("");
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
      data &&
        toast.success(
          "Thank you, Your Attendance has been succefully recorded"
        );
    } catch (error) {
      toast.error(error.response.data.msg);
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
      data &&
        toast.success(
          "Thank you, Your Attendance has been succefully recorded"
        );
    } catch (error) {
      toast.error(error.response.data.msg);
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
