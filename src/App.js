// import ImageList from "./components/ImageList";
import searchImages from "./api";
import SearchBar from "./components/SearchBar";

const handleSubmit = (searchTerm) => { // pass this function to SearchBar.js through props
  searchImages(searchTerm)
  
  // console.log('Search for', searchTerm)
};

function App() {
  return (
    <div>
      <SearchBar whenPressEnter={handleSubmit}/>
    </div>
  );
}

export default App;
