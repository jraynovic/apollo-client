import React from "react";
import { Row, Col, Container, NavLink } from "reactstrap";
const NavComponent = () => {
  return (
    <>
      <Row
        style={{ borderBottom: "1px solid", paddingBottom: 20, paddingTop: 20 }}
      >
        <Col xs={5} md={3}>
          <img src="https://hdwy.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd0c0ab6a-6f1a-4fdb-b38b-7223aa096fa5%2Flogo.png?table=block&id=1b004435-6c35-4867-8c1d-0ef846c623a4&spaceId=425f0f1f-eb89-41cf-b925-85e46de334af&width=200&userId=&cache=v2" />
        </Col>
        <Col xs={2} md={6}></Col>
        <Col xs={5} md={3}>
          <NavLink href="#">SignUp</NavLink>
        </Col>
      </Row>
    </>
  );
};

export default NavComponent;
