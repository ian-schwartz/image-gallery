import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=30`
      )
      .then((res) => {
        const photos = res.data;
        console.log("Photos", photos);
        setImages(photos);
        setIsLoading(false);
      })
      .catch((err) => console.log("The data was not returned", err));
  }, []);

  return (
    <div>
      <Header />
      <ImageSearch />
      <div>
        {!isLoading && images.length === 0 && <h1>No Images Found</h1>}

        {isLoading ? (
          <h1 className="loading-text">Loading...</h1>
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
