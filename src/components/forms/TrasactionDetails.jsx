import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./EmployeeRegistration.css";
import { useNavigate } from "react-router-dom";

function TrasactionDetails() {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    t_name: "",
    t_date: "",
    t_amount: "",
    t_description: "",
  });
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(transaction);
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
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name"  onChange={(e) =>
                  setTransaction((pre) => {
                    return { ...pre, t_name: e.target.value};
                  })
                }></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Paid Amount</Form.Label>
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="danger" onClick={() => navigate("/")}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default TrasactionDetails;
