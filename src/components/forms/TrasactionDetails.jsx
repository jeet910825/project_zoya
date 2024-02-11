import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./EmployeeRegistration.css";
import api from "../../api/api";

function TrasactionDetails() {
  const [url,setUrl] = useState("");
  const [err,setErr] = useState("");
  const [transaction, setTransaction] = useState({
    e_id: "",
    t_date: "",
    t_amount: "",
    t_description: "",
  });

  const handleSubmitForm = async(e) => {
    e.preventDefault();
    if (
      transaction.e_id.trim() === "" ||
      transaction.t_date.trim() === "" ||
      transaction.t_amount.trim() === ""
    ) {
      setErr("please enter all fields")
    } else {
      setErr("");

       await api.post("api/"+url,transaction)
      .then(res=>{
        if(res.status === 200){
          setErr(res?.data?.message);
        }
      })
      .catch(err=>{
        setErr(err?.response?.data?.message);
      })
    }
  };

  return (
    <div className="form-container">
      <Form className="form" onSubmit={handleSubmitForm}>
        <h3 className="text-center mt-4 mb-5">Transaction details</h3>
        <Form.Group>
          <Row className="mb-3">
            <Col>
              <Form.Label>Transaction date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) =>
                  setTransaction((pre) => {
                    return { ...pre, t_date: e.target.value };
                  })
                }
              ></Form.Control>
            </Col>
            <Col></Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Employee ID</Form.Label>
          <Form.Control type="text" placeholder="Name"  onChange={(e) =>
                  setTransaction((pre) => {
                    return { ...pre, e_id: e.target.value};
                  })
                }></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number" placeholder="0"  onChange={(e) =>
                  setTransaction((pre) => {
                    return { ...pre, t_amount: e.target.value };
                  })
                }></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text"  onChange={(e) =>
                  setTransaction((pre) => {
                    return { ...pre, t_description: e.target.value };
                  })
                }></Form.Control>
        </Form.Group>
        <div className="submit-button">
          <Button variant="primary" type="submit" onClick={()=>{setUrl("transaction/credit")}}>
            Credit
          </Button>
          <Button variant="danger" type="submit" onClick={()=>{setUrl("transaction/debit")}}>
            Debit
          </Button>
        </div>
        {err === "" ? "": <p className="err">{err} </p>}
      </Form>
    </div>
  );
}

export default TrasactionDetails;
