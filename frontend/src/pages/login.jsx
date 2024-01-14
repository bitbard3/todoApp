import React from "react";
import loginImage from "../assets/images/login.png";
import { AuthForm } from "../components/AuthForm";
export const Login = () => {
  return (
    <AuthForm
      formType="login"
      buttonText="Login"
      apiUrl="http://localhost:3000/login"
      successMessage="Logged in successfully"
      image={loginImage}
      text={
        "Welcome Back, Achiever! Dive into todo and kickstart a day of productivity, Login to continue."
      }
      headingText={"Login to continue"}
    />
  );
};
