// import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

const handleSubmit = (searchTerm) => { 
  console.log('Search for', searchTerm)
};

function App() {
  return (
    <div>
      <SearchBar whenPressEnter={handleSubmit}/>
    </div>
  );
}

export default App;
