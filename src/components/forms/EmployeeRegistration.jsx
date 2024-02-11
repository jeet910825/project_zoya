import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./EmployeeRegistration.css";
import { useNavigate } from "react-router-dom";

import api from "../../api/api";
function EmployeeRegistration() {

  const navigate = useNavigate();
  const [err,setErr] = useState("");
  const [employee, setEmployee] = useState({
    e_id:"",
    e_name: "",
    e_number: "",
    e_msi_id: "",
    e_passport: "",
    e_password: "",
  });


  const formHandlefunc = async(e) => {
    e.preventDefault();
    if (
      employee.e_name.trim() === "" ||
      employee.e_number.trim() === "" ||
      employee.e_passport.trim() === "" ||
      employee.e_msi_id.trim() === "" ||
      employee.e_password.trim() === ""
    ) {
      setErr("please enter all fields")
    } else {
      setErr("");
       await api.post("api/employeeRegistration",employee)
      .then(res=>{
        if(res.status === 200){
          setErr(res.data.message);
        }
      })
      .catch(err=>{
        setErr(err.response.data.error);
      })
    }
  };

 

  return (
    <div className=" form-container">
      <Form className="form" onSubmit={formHandlefunc}>
        <h3 className="text-center mt-4 mb-5">Employee registration</h3>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={employee.e_name}
            onChange={(e) =>
              setEmployee((pre) => {
                return { ...pre, e_name: e.target.value };
              })
            }
            placeholder="Employee Name"
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>MSI ID</Form.Label>
          <Form.Control
            value={employee.msi_id}
            onChange={(e) =>
              setEmployee((pre) => {
                return { ...pre, e_msi_id: e.target.value };
              })
            }
            placeholder="MSI ID"
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mobile number</Form.Label>
          <Form.Control
            value={employee.e_number}
            onChange={(e) =>
              setEmployee((pre) => {
                return { ...pre, e_number: e.target.value };
              })
            }
            placeholder="+91"
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Passport number</Form.Label>
          <Form.Control
            value={employee.e_passport}
            onChange={(e) =>
              setEmployee((pre) => {
                return { ...pre, e_passport: e.target.value };
              })
            }
            placeholder="Passport number"
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={employee.e_password}
            onChange={(e) =>
              setEmployee((pre) => {
                return { ...pre, e_password: e.target.value };
              })
            }
            type="password"
            placeholder="password"
            autoComplete="off"
          />
        </Form.Group>
        <div className="submit-button">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="danger" onClick={() => navigate("/")}>
            Cancel
          </Button>
        </div>
        {err === "" ? "": <p className="err">{err} </p>}
      </Form>
    </div>
  );
}

export default EmployeeRegistration;
