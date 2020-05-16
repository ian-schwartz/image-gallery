import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import ImageCard from "./ImageCard";

const ImageSearch = () => {
  const [searchImages, setSearchImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("");
  const [term, setTerm] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=30&query=${term}&page=${page}`
      )
      .then((res) => {
        const searchedPhotos = res.data;
        console.log("Searched Photos", searchedPhotos);
        setSearchImages(searchedPhotos);
        setIsLoading(false);
      })
      .catch((err) => console.log("The data was not returned", err));
  }, [term, page]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
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
      {/* {!isLoading && searchImages.results.length === 0 && <h1 className="title">No Images Found</h1>} */}
      {isLoading ? (
        <></>
      ) : (
        <div className="card-wrap">
          {searchImages.results.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSearch;
