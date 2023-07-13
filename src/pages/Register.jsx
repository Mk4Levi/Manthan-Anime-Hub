import React from "react";
import "../css/Register.css";
import "../css/Form.css";
import { Form } from "../components";

const Register = () => {
  return (
    <div className="registerPage" id="register">
      <div className="registerContainer">
        <h1 className="page-title" style={{ color: "blue" }}>
          Join this Community
        </h1>
        <Form />
      </div>
    </div>
  );
};

export default Register;
