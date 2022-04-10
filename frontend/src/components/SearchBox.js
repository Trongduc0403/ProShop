import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const SearchBox = (animate ) => {
  let params = useParams();
  let location = useLocation();
  const [keyword, setKeyword] = useState("");
  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline='true'>
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Control
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Tìm kiếm sản phẩm..."
            className="mr-sm-2 "
          ></Form.Control>
        </Col>
        <Col xs="auto"></Col>
        <Button type="submit" variant="outline-success" className="p-2">
          Tìm kiếm
        </Button>
      </Row>
    </Form>
  );
};

export default SearchBox;
