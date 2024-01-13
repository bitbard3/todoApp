import React from "react";
import signupImage from "../assets/images/signup.png";

export const Signup = () => {
  return (
    <div>
      <div className="row overflow-hidden">
        <div className="col-md-6 bg-secondary vh-100 d-none d-md-block">
          <div className="d-flex align-items-center justify-content-evenly h-100 flex-column pt-7">
            <h2 className="px-5 fs-1 fw-bold text-primary">
              Supercharge Your Day with todo! Your tasks, your way – Effortless,
              Efficient, Exceptional. Let's Get Things Done!
            </h2>
            <div className="img-container">
              <img
                style={{ height: "15rem", width: "15rem" }}
                src={signupImage}
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
              Create an account to continue
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
                <button className="btn btn-primary rounded-3">Sign Up</button>
              </div>
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
