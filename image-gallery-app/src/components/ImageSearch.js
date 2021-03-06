import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ImageSearch = ({ setTerm, setPage, setIsLoading }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    searchText(text);
    setPage(1);
  };

  const searchText = (text) => {
    setTerm(text);
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1%",
        }}
      >
        <Form.Group controlId="formSearch" style={{ width: "30%" }}>
          <Form.Control
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          variant="secondary"
          type="submit"
          className="search-button"
          style={{ fontFamily: "Roboto" }}
        >
          Search
        </Button>
      </Form>
    </div>
  );
};

export default ImageSearch;
