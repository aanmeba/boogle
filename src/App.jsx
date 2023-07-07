import { useState } from "react";
import "./App.css";
import SearchResultLoader from "./containers/SearchResultLoader/SearchResultLoader";
import { searchBooks } from "./services/books-services";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [query, setQuery] = useState("");
  // searchBooks("harry potter").then((data) => console.log(data, "000000 "));

  const handleSubmit = (data) => setQuery(data);

  return (
    <>
      <h1>Boogle</h1>
      <SearchBar handleSubmit={handleSubmit} />
      <SearchResultLoader query={query} />
    </>
  );
}

export default App;
