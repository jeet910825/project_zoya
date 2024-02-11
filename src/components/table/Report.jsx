import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Form, Row as R, Col } from "react-bootstrap";
import Row from "./row/Row";

function Report() {
  const data = useState([]);

  useEffect(() => {}, []);

  return (
    <div>
      <div>
        <Form className="date-form">
          <R className="mb-3">
            <Col>
             <Form.Group className="p-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date"></Form.Control>
              </Form.Group>
            </Col>
            <Col>
            <Form.Group className="p-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date"></Form.Control>
              </Form.Group>
            </Col>
          </R>
        </Form>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>Date</th>
            <th>Employee name</th>
            <th>Opening balance</th>
            <th>Closing balance</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          { (data.length > 0) ?data.map((value, index) => {
            return <Row employee={value}>{console.log(value)} key = {index}</Row>;
          }) : ""};
        </tbody>
      </Table>
    </div>
  );
}

export default Report;
