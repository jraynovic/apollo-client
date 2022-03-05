import React from "react";
import { Row, Col, Container } from "reactstrap";
const NavComponent = () => {
  return (
    <>
      <Row
        style={{ borderBottom: "1px solid", paddingBottom: 20, paddingTop: 20 }}
      >
        <Col xs={5} md={3}>
          Brand
        </Col>
        <Col xs={2} md={6}></Col>
        <Col xs={5} md={3}>
          Login SignUp
        </Col>
      </Row>
    </>
  );
};

export default NavComponent;
