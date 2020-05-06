import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/?per_page=30&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      )
      .then((res) => {
        const photos = res.data;
        console.log("photos", photos);
        setImages(photos);
        setIsLoading(false);
      })
      .catch((err) => console.log("The data was not returned", err));
  }, []);

  return (
    <div>
      <Header />
      <div>
        {!isLoading && images.length === 0 && <h1>No Images Found</h1>}

        {isLoading ? (
          <h1>Loading...</h1>
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
