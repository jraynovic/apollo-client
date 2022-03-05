import React from "react";
import { Row, Col } from "reactstrap";

const BodyComponent = () => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Bibendum neque egestas congue quisque egestas diam in. Neque vitae tempus quam pellentesque nec nam aliquam. Mattis enim ut tellus elementum. Pretium nibh ipsum consequat nisl vel pretium lectus. Ut placerat orci nulla pellentesque dignissim. Sapien eget mi proin sed libero enim sed. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Tellus elementum sagittis vitae et leo duis ut diam. Quam quisque id diam vel. Tortor at risus viverra adipiscing at. Arcu cursus vitae congue mauris rhoncus. Sed nisi lacus sed viverra tellus in hac habitasse. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Leo vel orci porta non. Sed viverra ipsum nunc aliquet bibendum.`;
  return (
    <Row>
      <Col xs={12} lg={6}>
        {text}
      </Col>
      <Col xs={12} lg={6}>
        image
      </Col>
    </Row>
  );
};

export default BodyComponent;
