// AuthForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { userSchema } from "../validators/formValidate";
import { AuthText } from "../components/AuthText";
const signupApiUrl = "https://todo-app-brown-ten.vercel.app/signup";
const loginApiUrl = "https://todo-app-brown-ten.vercel.app/login";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
export const AuthForm = ({
  formType,
  buttonText,
  successMessage,
  image,
  text,
  headingText,
}) => {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setUsernameError("");
    setPasswordError("");
  }, [username, password]);

  const formHandler = async (e) => {
    e.preventDefault();
    const validInput = userSchema.safeParse({ username, password });
    if (validInput.error) {
      for (let i = 0; i < validInput.error.errors.length; i++) {
        if (validInput.error.errors[i].path == "username") {
          setUsernameError(validInput.error.errors[i].message);
        }
        if (validInput.error.errors[i].path == "password") {
          setPasswordError(validInput.error.errors[i].message);
        }
      }
    }
    if (!validInput.error) {
      const userInfo = { username, password };

      if (formType == "login") {
        try {
          setSpinner(true);
          const response = await axios.post(loginApiUrl, userInfo);
          if (response.status == 200) {
            var jwt = response.data.token;
            localStorage.setItem("jwtToken", jwt);
            navigate("/todo");
            setSpinner(false);
          }
        } catch (error) {
          setSpinner(false);
          if (error.response.status == 404) {
            setUsernameError("User not found / Incorrect password");
          } else {
            setFormError("Failed to login, retry");
          }
        }
      }
      if (formType == "signup") {
        try {
          setSpinner(true);
          const response = await axios.post(signupApiUrl, userInfo);
          if (response.status == 200) {
            try {
              const login = await axios.post(loginApiUrl, userInfo);
              if (login.status == 200) {
                var jwt = login.data.token;
                localStorage.setItem("jwtToken", jwt);
                navigate("/todo");
                setSpinner(false);
              }
            } catch (error) {
              setFormError("Error occured try again");
            }
          }
        } catch (error) {
          setSpinner(false);
          if (error.response.status === 409) {
            setUsernameError("User already exists");
          } else {
            setFormError("Failed creating an account, retry");
          }
        }
      }
    }
  };

  return (
    <div>
      {spinner ? (
        <div className="vh-100 w-100 d-flex justify-content-center align-items-center loader-bg">
          <SyncLoader color="#69665c" margin={4} speedMultiplier={0.5} />
        </div>
      ) : (
        <div className="row overflow-hidden">
          <AuthText text={text} img={image}></AuthText>
          <div className="col-md-6 vh-100 hero">
            <div className="container">
              <div className="d-flex align-items-center align-items-md-start flex-column flex-md-row justify-content-center justify-content-md-end pt-7 p-md-4">
                <Link style={{ textDecoration: "none" }} to={"/"}>
                  <h1 className="fs-3 fw-bold text-primary brand-text">todo</h1>
                </Link>
                <div className="image-container pt-5 d-md-none">
                  <img
                    style={{ height: "10rem", width: "7.5rem" }}
                    src={image}
                    alt=""
                  />
                </div>
              </div>
              <p className="fs-1 text-center  mb-5 mb-md-6 mt-md-7 mt-0 account-custom">
                {headingText}
              </p>
              <div className="container d-flex flex-column align-items-center">
                <form className="w-75" onSubmit={formHandler}>
                  <div className="input-group w-100">
                    <input
                      type="text"
                      placeholder="Username"
                      className="form-control rounded-2 info"
                      onChange={(e) => setUser(e.target.value)}
                      required
                    />
                    <div className="d-flex justify-content-end w-100">
                      {usernameError && (
                        <p className="text-danger error mt-2 mb-n1">
                          {usernameError}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="pt-4 input-group w-100">
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control rounded-2 info"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-end w-100">
                    {passwordError && (
                      <p className="text-danger error mt-2 mb-n3">
                        {passwordError}
                      </p>
                    )}
                    {formError && (
                      <p className="text-danger error mt-2 mb-n1">
                        {formError}
                      </p>
                    )}
                  </div>
                  <div className="d-grid w-100 mt-4 mt-md-5">
                    <button className="btn btn-primary rounded-3">
                      {buttonText}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
