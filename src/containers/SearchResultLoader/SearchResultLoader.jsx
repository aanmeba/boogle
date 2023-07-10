import { useContext, useEffect, useState } from "react";
import { searchBooks } from "../../services/books-services";
import BookList from "../../components/BookList/BookList";
import { SearchQueryContext } from "../../context/SearchQueryContextProvider";
import Loading from "../../components/Loading/Loading";
import SearchResult from "../../components/SearchResult/SearchResult";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { BooksContext } from "../../context/BooksContext";

const SearchResultLoader = () => {
  const { query } = useContext(SearchQueryContext);
  const { books, setBooks } = useContext(BooksContext);
  const { searchTerm, page, maxResults } = query;

  const [error, setError] = useState(false);
  const [fetchState, setFetchState] = useState("LOADING");

  useEffect(() => {
    if (searchTerm) {
      searchBooks(searchTerm, page, maxResults)
        .then((data) => {
          setBooks(data);
          setFetchState("SUCCESS");
        })
        .catch((err) => {
          setError(err);
          setFetchState("ERROR");
        });
    }
  }, [searchTerm, page, maxResults]);

  return (
    <>
      <SearchResult>
        {fetchState === "LOADING" && <Loading />}
        {fetchState === "SUCCESS" && books && <BookList />}
      </SearchResult>
      {fetchState === "ERROR" && error && (
        <ErrorMessage errorMsg={error.message} />
      )}
    </>
  );
};

export default SearchResultLoader;
