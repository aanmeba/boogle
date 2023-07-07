import { useContext, useEffect, useState } from "react";
import { searchBooks } from "../../services/books-services";
import BookList from "../../components/BookList/BookList";
import { SearchQueryContext } from "../../context/SearchQueryContextProvider";
import { BooksContext } from "../../context/BooksContext";

const SearchResultLoader = () => {
  const { query } = useContext(SearchQueryContext);
  const { books, setBooks } = useContext(BooksContext);

  const [error, setError] = useState(false);
  const [fetchState, setFetchState] = useState("LOADING");

  useEffect(() => {
    if (query) {
      searchBooks(query)
        .then((data) => {
          setBooks(data);
          setFetchState("SUCCESS");
        })
        .catch((err) => {
          setError(err);
          setFetchState("ERROR");
        })
        .finally(() => {
          console.log(books && books, "-- books");
        });
    }
  }, [query]);

  return (
    <>
      {/* {fetchState === "LOADING" && <p>Loading...</p>} */}
      {fetchState === "LOADING" && <BookList fetchState={fetchState} />}
      {fetchState === "ERROR" && error && <p>{error.message}</p>}
      {fetchState === "SUCCESS" && books && <BookList />}
    </>
  );
};

export default SearchResultLoader;
