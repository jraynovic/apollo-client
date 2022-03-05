import React from "react";
import NavComponent from "./NavComonent";
import BodyComponent from "./BodyComponent";
import InputComponent from "./InputComponent";
import { Row } from "reactstrap";

const Main = () => {
  return (
    <div>
      <Row style={{ height: "10vh" }}>
        <NavComponent />
      </Row>
      <Row style={{ height: "80vh" }}>
        <BodyComponent />
      </Row>
      <Row style={{ height: "10vh" }}>
        <InputComponent />
      </Row>
    </div>
  );
};

export default Main;
