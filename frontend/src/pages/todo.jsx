import "../../node_modules/font-awesome/css/font-awesome.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
// import image from "../assets/images/login.png";
export const Todo = () => {
  const todoUrl = "http://localhost:3000/mytodos";
  const [verified, setVerified] = useState(false);
  const [todos, setTodos] = useState([]);
  // const maxCharLaptop = 128;
  // const maxCharMobile = 104;
  const todosInPage = 4;
  const [dividedTodo, setDividedTodo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const jwt = localStorage.getItem("jwtToken");
      try {
        const response = await axios.get(todoUrl, {
          headers: {
            Authorization: jwt,
          },
        });
        setVerified(true);
        setTodos(response.data.todos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    try {
      const tempArray = [];
      for (let i = 0; i < todos.length; i += todosInPage) {
        tempArray.push(todos.slice(i, i + todosInPage));
      }
      setDividedTodo(tempArray);
    } catch (error) {
      console.log(error);
    }
  }, [todos]);
  return (
    <div>
      <div className="container">
        <div className="nav-container mt-3 d-flex align-items-center">
          <p className="fs-2 fw-bold text-primary">todo</p>
          <i className="fa fa-plus text-primary icon ms-auto pt-2"></i>
        </div>
        <div className="row pt-5 pt-md-0">
          <div className="col-md-2 pt-md-7">
            <div className="d-flex flex-md-column gap-md-4 gap-3 justify-content-center">
              <div className="d-flex gap-md-3 gap-2 mb-2">
                <div className="tag tag-purple rounded-circle"></div>
                <p className="fs-5 tagname">work</p>
              </div>
              <div className="d-flex gap-md-3 gap-2 mb-2">
                <div className="tag tag-red rounded-circle"></div>
                <p className="fs-5 tagname">study</p>
              </div>
              <div className="d-flex gap-md-3 gap-2 mb-2">
                <div className="tag tag-green rounded-circle"></div>
                <p className="fs-5 tagname">self</p>
              </div>
              <div className="d-flex gap-md-3 gap-2 mb-2">
                <div className="tag tag-blue rounded-circle"></div>
                <p className="fs-5 tagname">other</p>
              </div>
            </div>
          </div>
          {verified ? (
            <div className="col-md-9 pt-md-5">
              <div className="row pt-3 pt-md-5">
                <div className="col-md-6 mb-md-0 mb-3"></div>
                <div className="col-md-6 mb-md-0 mb-3"></div>
              </div>
              <div className="row pt-md-5">
                <div className="col-md-6 mb-md-0 mb-3"></div>
                <div className="col-md-6 mb-md-0 mb-3"></div>
              </div>
            </div>
          ) : (
            <div className="">{/* <img src={image} alt="" /> */}</div>
          )}
        </div>
      </div>
    </div>
  );
};
