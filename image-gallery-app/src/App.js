import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import Pagination from "./components/Pagination";
import axios from "axios";
import { HashLoader } from "react-spinners";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=30&page=${page}`
      )
      .then((res) => {
        const photos = res.data;
        console.log("Photos", photos);
        setImages(photos);
        setIsLoading(false);
      })
      .catch((err) => console.log("The data was not returned", err));
  }, [page]);

  return (
    <div>
      <Header />
      <ImageSearch />
      <Pagination page={page} setPage={setPage} />
      <div>
        {!isLoading && images.length === 0 && <h1>No Images Found</h1>}

        {isLoading ? (
          <div className="spinner">
            <HashLoader color={"#f2f2f2"} loading={isLoading} size={175} />
          </div>
        ) : (
          <div className="card-wrap">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
