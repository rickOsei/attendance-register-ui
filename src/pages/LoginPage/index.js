import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { BsEyeSlash, BsEye, BsArrowLeftCircle } from "react-icons/bs";
import {
  LoginContainer,
  MainLogin,
  Form,
  Heading,
  SubHeading,
  FormInput,
  Label,
  Input,
  Error,
  Icons,
  ButtonRow,
  TopButtonRow,
} from "./styles";
import { BackButton, FormButton } from "../../styles/Button";
import customAxios from "../../utils/customAxios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [visible, setVisibility] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleShow = () => {
    setVisibility(!visible);
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();

    try {
      const {
        data: { user, token },
      } = await customAxios.post("/login", data);
      localStorage.setItem("token", token);
      localStorage.setItem("name", user.name);
      localStorage.setItem("email", user.email);

      if (token) {
        navigate("/");
        toast.success("Login Successful", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      reset();
    } catch (err) {
      toast.error(err.response?.data.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      <LoginContainer>
        <TopButtonRow>
          <BackButton onClick={() => navigate("/")}>
            <BsArrowLeftCircle />
            Back
          </BackButton>
        </TopButtonRow>
        <MainLogin>
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Heading>Log in to your Admin Account</Heading>
            <SubHeading>N.B. Login Page is for Administrators only</SubHeading>
            <Error className="error">{errors.email?.message}</Error>
            <FormInput>
              <Label htmlFor="">Email</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required*",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email pattern",
                  },
                })}
              />
            </FormInput>
            <Error className="error">{errors.password?.message}</Error>
            <FormInput className="Form-input password">
              <Label htmlFor="">Password</Label>
              <Input
                type={visible ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required*",
                  minLength: {
                    value: 6,
                    message: "Must be at least 6 characters long*",
                  },
                })}
              />
              <Icons onClick={handleShow}>
                {visible ? (
                  <BsEyeSlash className="icon" />
                ) : (
                  <BsEye className="icon" />
                )}
              </Icons>
            </FormInput>
            <ButtonRow>
              <FormButton>Login</FormButton>
            </ButtonRow>
          </Form>
        </MainLogin>
      </LoginContainer>
    </>
  );
}

export default Login;
