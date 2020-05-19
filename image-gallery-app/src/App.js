import React, { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";
import axios from "axios";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import Pagination from "./components/Pagination";

function App() {
  const [images, setImages] = useState([]);
  const [searchImages, setSearchImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [term, setTerm] = useState("");

  useEffect(() => {
    axios
      .get(
        term === ""
          ? `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=30&page=${page}`
          : `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=30&page=${page}&query=${term}`
      )
      .then((res) => {
        term === "" ? setImages(res.data) : setSearchImages(res.data.results);
        setIsLoading(false);
        // console.log("Photos", res.data, "Search Photos", res.data.results);
      })
      .catch((err) => console.log("The data was not returned", err));
  }, [term, page]);

  return (
    <div>
      <Header />
      <ImageSearch
        page={page}
        setPage={setPage}
        term={term}
        setTerm={setTerm}
      />
      <Pagination page={page} setPage={setPage} />
      <div>
        {!isLoading && term !== "" && searchImages.length === 0 && (
          <h1 className="not-found-text">No Images Found</h1>
        )}

        {isLoading ? (
          <div className="spinner">
            <HashLoader color={"#f2f2f2"} loading={isLoading} size={175} />
          </div>
        ) : term === "" ? (
          <div className="card-wrap">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        ) : (
          <div className="card-wrap">
            {searchImages.map((searchImage) => (
              <ImageCard key={searchImage.id} image={searchImage} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
