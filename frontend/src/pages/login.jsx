import React from "react";
import loginImage from "../assets/images/login.png";

export const Login = () => {
  return (
    <div>
      <div className="row overflow-hidden">
        <div className="col-md-6 bg-secondary vh-100 d-none d-md-block">
          <div className="d-flex align-items-center justify-content-evenly h-100 flex-column pt-7">
            <h2 className="px-5 fs-1 fw-bold text-primary">
              Welcome Back, Achiever! Dive into todo and kickstart a day of
              productivity, Login to continue.
            </h2>
            <div className="img-container">
              <img
                style={{ height: "15rem", width: "15rem" }}
                src={loginImage}
                alt="Signup"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 vh-100 hero">
          <div className="container">
            <div className="d-flex justify-content-center justify-content-md-end pt-7 p-md-4">
              <h1 className="fs-3 fw-bold text-primary brand-text">todo</h1>
            </div>
            <p className="fs-1 text-center  mb-5 mb-md-6 mt-7 account-custom">
              Login to your account
            </p>
            <div className="container d-flex flex-column align-items-center">
              <div className="input-group w-75">
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control rounded-2 info"
                />
              </div>
              <div className="pt-4 input-group w-75">
                <input
                  type="password"
                  placeholder="password"
                  className="form-control rounded-2 info"
                />
              </div>
              <div className="d-grid w-75 mt-5">
                <button className="btn btn-primary rounded-3">Login</button>
              </div>
              <div className="image-container pt-5 d-md-none">
                <img
                  style={{ height: "10rem", width: "10rem" }}
                  src={loginImage}
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
