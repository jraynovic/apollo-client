import React from "react";
import { Row, Col, Image } from "reactstrap";

const BodyComponent = () => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Bibendum neque egestas congue quisque egestas diam in. Neque vitae tempus quam pellentesque nec nam aliquam. Mattis enim ut tellus elementum. Pretium nibh ipsum consequat nisl vel pretium lectus. Ut placerat orci nulla pellentesque dignissim. Sapien eget mi proin sed libero enim sed. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Tellus elementum sagittis vitae et leo duis ut diam. Quam quisque id diam vel. Tortor at risus viverra adipiscing at. Arcu cursus vitae congue mauris rhoncus. Sed nisi lacus sed viverra tellus in hac habitasse. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Leo vel orci porta non. Sed viverra ipsum nunc aliquet bibendum.`;
  return (
    <Row style={{ marginTop: 50 }}>
      <Col xs={12} lg={6}>
        <div style={{ textAlign: "center" }}>{text}</div>
      </Col>
      <Col xs={12} lg={6}>
        <img src="https://hdwy.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F56993b52-55ed-45c4-8db7-d1c6a3f62cbc%2Fperson.png?table=block&id=6c79c066-cbf7-4d1f-9cb5-fa31a2152d08&spaceId=425f0f1f-eb89-41cf-b925-85e46de334af&width=730&userId=&cache=v2" />
      </Col>
    </Row>
  );
};

export default BodyComponent;
