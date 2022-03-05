import React, { useState } from "react";
import { Row, Col, Input, Button, FormGroup, FormFeedback } from "reactstrap";

const InputComponent = () => {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [alreadyTaken, setAlreadyTaken] = useState(false);

  const submitHandler = () => {
    if (url) {
      alert(`URL entered: ${url} Slug entered: ${slug}`);
    }
  };

  return (
    <>
      <Col xs={12} md={4} style={{ margin: 10 }}>
        <Input
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </Col>
      <Col xs={12} md={4} style={{ margin: 10 }}>
        <Input
          placeholder="Custom Slug"
          value={slug}
          invalid={alreadyTaken}
          onChange={(e) => setSlug(e.target.value)}
        />
        <div style={{ textAlign: "left", fontSize: ".9rem", marginLeft: 10 }}>
          {alreadyTaken ? "*not required" : "Looks like that is already taken"}
        </div>
      </Col>
      <Col xs={12} md={3} style={{ margin: 10 }}>
        <Button onClick={() => submitHandler()} color="primary">
          Shorten URL
        </Button>
      </Col>
    </>
  );
};

export default InputComponent;
