import { useState } from "react";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

function App() {
  const [images, setImages] = useState([]);
  
  const handleSubmit = async (searchTerm) => {      // pass handleSubmit function to SearchBar.js through props
    const result = await searchImages(searchTerm)   // searchImages from api.js is an asynchronous function, so it needs to get AWAIT here (if AWAIT then also ASYNC)
    setImages(result)
    // console.log('Search for', searchTerm)
    // console.log(result)
  };

  return (
    <div>
      <SearchBar whenPressEnter={handleSubmit}/>
      <ImageList images={images}/>
    </div>
  );
}

export default App;
