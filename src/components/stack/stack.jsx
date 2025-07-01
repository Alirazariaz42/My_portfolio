import React from "react";
import "./stack.css";
export const Stack = (props) => {
  return (
    <>
      <div data-aos="fade-up-left" className="card1">
        <span></span>
        <div className="content">
          <div>
            {" "}
            <img src={props.logo} className="" alt="" />
          </div>
          <p className=" text-center  m-0 ">{props.title}</p>
        </div>
      </div>
    </>
  );
};
