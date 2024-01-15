import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
export const Todo = () => {
  return (
    <div>
      <div className="container">
        <div className="nav-container mt-3 d-flex align-items-center">
          <p className="fs-2 fw-bold text-primary">todo</p>
          <i className="fa fa-plus text-primary icon ms-auto pt-2"></i>
        </div>
        <div className="row pt-md-7 pt-5">
          <div className="col-md-2">
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
          <div className="col-md-10"></div>
        </div>
      </div>
    </div>
  );
};
