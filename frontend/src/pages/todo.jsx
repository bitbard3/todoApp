import "../../node_modules/font-awesome/css/font-awesome.min.css";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Card } from "../components/Card";
// import image from "../assets/images/login.png";
export const Todo = () => {
  const todoUrl = "http://localhost:3000/mytodos";
  const todosInPage = 4;
  // const maxCharLaptop = 128;
  // const maxCharMobile = 104;
  const [verified, setVerified] = useState(false);
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const [selectedTag, setSelectedTag] = useState("work");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
  const lastTodoIndex = currentPage * todosInPage;
  const firstTodoIndex = lastTodoIndex - todosInPage;
  const currentTodos = todos.slice(firstTodoIndex, lastTodoIndex);
  const isLastPage = lastTodoIndex >= todos.length || todos.length <= 4;
  const paginateForward = () => {
    setCurrentPage(currentPage + 1);
  };
  const paginateBack = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <div>
      <div className="container">
        <div className="nav-container mt-3 d-flex align-items-center">
          <p className="fs-2 fw-bold text-primary">todo</p>
          <i
            onClick={handleShow}
            className="fa fa-plus text-primary icon ms-auto pt-2"
          ></i>
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
          <div className="col-md-9 pt-md-5">
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Add todo item</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" autoFocus />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Tag</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={(e) => setSelectedTag(e.target.value)}
                      className="me-2"
                    >
                      <option value="work">Work</option>
                      <option value="study">Study</option>
                      <option value="self">Self</option>
                      <option value="other">Other</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-dark" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="success" onClick={handleClose}>
                  Add todo
                </Button>
              </Modal.Footer>
            </Modal>
            <div className="row pt-3 pt-md-5">
              <div className="col-md-6 mb-md-0 mb-3">
                {currentTodos[0] ? (
                  <Card
                    title={currentTodos[0].title}
                    desc={currentTodos[0].description}
                    tag={currentTodos[0].tag}
                  ></Card>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-6 mb-md-0 mb-3">
                {currentTodos[1] ? (
                  <Card
                    title={currentTodos[1].title}
                    desc={currentTodos[1].description}
                    tag={currentTodos[1].tag}
                  ></Card>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="row pt-md-5">
              <div className="col-md-6 mb-md-0 mb-3">
                {currentTodos[2] ? (
                  <Card
                    title={currentTodos[2].title}
                    desc={currentTodos[2].description}
                    tag={currentTodos[2].tag}
                  ></Card>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-6 mb-md-0 mb-3">
                {currentTodos[3] ? (
                  <Card
                    title={currentTodos[3].title}
                    desc={currentTodos[3].description}
                    tag={currentTodos[3].tag}
                  ></Card>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="col-md-1 d-none d-md-block pt-6">
            <div className="row h-100 w-100">
              <div className="col-12">
                <div className="d-flex flex-column justify-content-around h-100 align-items-end">
                  <i
                    onClick={paginateForward}
                    className={`fa fa-arrow-right icon text-primary me-n4 ${
                      isLastPage ? `d-none` : ``
                    }`}
                  ></i>
                  <i
                    onClick={paginateBack}
                    className={`fa fa-arrow-left icon text-primary me-n4 ${
                      currentPage == 1 ? `d-none` : ``
                    }`}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
