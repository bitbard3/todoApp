import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { userSchema } from "../validators/formValidate";
import signupImage from "../assets/images/signup.png";
import { AuthText } from "../components/AuthText";
export const Signup = () => {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

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

      try {
        const response = await axios.post(
          "http://localhost:3000/signup",
          userInfo
        );
      } catch (error) {
        if (error.response.status == 409) {
          setUsernameError("User already exist");
        } else {
          setFormError("Failed creating the user, retry");
        }
      }
    }
  };

  return (
    <div>
      <div className="row overflow-hidden">
        <AuthText
          text={
            "Supercharge Your Day with todo! Your tasks, your way – Effortless,Efficient, Exceptional. Let's Get Things Done!"
          }
          img={signupImage}
        ></AuthText>
        <div className="col-md-6 vh-100 hero">
          <div className="container">
            <div className="d-flex justify-content-center justify-content-md-end pt-7 p-md-4">
              <h1 className="fs-3 fw-bold text-primary brand-text">todo</h1>
            </div>
            <p className="fs-1 text-center  mb-5 mb-md-6 mt-7 account-custom">
              Create an account to continue
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
                      <p className="text-danger error  mt-2 mb-n1">
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
                    <p className="text-danger error  mt-2 mb-n1">{formError}</p>
                  )}
                </div>
                <div className="d-grid w-100 mt-5">
                  <button className="btn btn-primary rounded-3">Sign Up</button>
                </div>
              </form>
              <div className="image-container pt-5 d-md-none">
                <img
                  style={{ height: "10rem", width: "10rem" }}
                  src={signupImage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
