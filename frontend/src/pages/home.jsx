import React from "react";
import girl from "../assets/images/girl2.png";
import hometodo from "../assets/images/hometodo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const jwt = localStorage.getItem("jwtToken");
  const todoUrl = "http://localhost:3000/mytodos";
  const navigate = useNavigate();
  const verifyJwt = async () => {
    if (jwt) {
      try {
        const response = await axios.get(todoUrl, {
          headers: {
            Authorization: jwt,
          },
        });
        navigate("/todo");
        console.log(response.status);
      } catch (error) {
        console.log(error);
        navigate("signup");
      }
    } else {
      navigate("signup");
    }
  };
  return (
    <div>
      <div className="bg-secondary vh-100 scrolldown">
        <div className="d-flex justify-content-center align-items-center h-100">
          <p className="strike display-2 fw-bold text-primary">todo</p>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 scrollup">
        <div className="">
          <span className="fw-bold display-2">
            <span className="purple">t</span>
            <span className="red">o</span>
            <span className="green">d</span>
            <span className="blue">o</span>
          </span>
        </div>
        <div className="hero-text-container">
          <p className="fs-5 text-center pt-5 hero-text">
            Get stuff done with our minimal pastel aesthetic todo app. <br />
            Simplify your day, one task at a time!
          </p>
        </div>
        <div className="pt-5">
          <button onClick={verifyJwt} className="btn btn-primary px-5 fw-bold">
            Get Started
          </button>
        </div>
        <div className="png-img-container mt-6 mt-md-5">
          <img src={girl} alt="" className="avatar mb-n2 mb-md-n4" />
        </div>
        <div className="todo-img-container">
          <img
            style={{ height: "11rem", width: "30rem" }}
            src={hometodo}
            alt=""
            className="todo-img"
          />
        </div>
      </div>
      <div className="d-none d-md-flex mt-n4 justify-content-center w-100">
        <span className="text-muted opacity-75">
          Made with ❤️ by{" "}
          <a target="_blank" href="https://linktr.ee/ansh3839">
            ansh
          </a>
        </span>
      </div>
    </div>
  );
};
