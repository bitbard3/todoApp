import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import React from "react";
import { useState } from "react";
export const Card = ({ title, desc, tag }) => {
  const [tododone, setTodoDone] = useState(false);
  const todocheck = () => {
    setTodoDone(!tododone);
  };
  const tagObject = {
    work: "purple",
    study: "red",
    self: "green",
    other: "blue",
  };
  return (
    <div className="todocard bg-secondary px-4 py-3">
      <div className="vstack">
        <div className="todo-nav d-flex align-items-center">
          <p
            className={`fs-4 fw-bold text-primary overflow-hidden ${
              tododone ? `checkedtodo` : ``
            }`}
          >
            {title}
          </p>
          <Dropdown className="ms-auto" drop="start">
            <Dropdown.Toggle id="dropdown-basic" variant="secondary">
              <i className="fa fa-ellipsis-h icon light me-n2"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="light" href="#/action-1">
                Edit...
                <Dropdown.Divider />
              </Dropdown.Item>
              <Dropdown.Item className="light" href="#/action-2">
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="todo-desc pt-3">
          <p
            className={`fw-light text-primary todo-desc-body overflow-hidden ${
              tododone ? `checkedtodo` : ``
            }`}
          >
            {desc}
          </p>
        </div>
        <div className="todo-footer d-flex align-items-center pt-4">
          <div className={`tag tag-${tagObject[tag]} rounded-circle`}></div>
          <Form className="ms-auto" onChange={todocheck}>
            <Form.Check type="checkbox" id="default-checkbox"></Form.Check>
          </Form>
        </div>
      </div>
    </div>
  );
};
