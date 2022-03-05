import React from "react";
import { Row, Col } from "reactstrap";
const InputComponent = () => {
  return (
    <>
      <Col xs={12} md={4}>
        Url input
      </Col>
      <Col xs={12} md={4}>
        {" "}
        Slug
      </Col>
      <Col xs={12} md={4}>
        Button
      </Col>
    </>
  );
};

export default InputComponent;
