import { useContext, useEffect, useState } from "react";
import { delay, searchBooks } from "../../services/books-services";
import BookList from "../../components/BookList/BookList";
import { SearchQueryContext } from "../../context/SearchQueryContextProvider";
import Loading from "../../components/Loading/Loading";
import SearchResult from "../../components/SearchResult/SearchResult";
import AlertMessage from "../../components/AlertMessage/AlertMessage";
import { BooksContext } from "../../context/BooksContextProvider";
import { ErrorContext } from "../../context/ErrorContextProvider";

const SearchResultLoader = () => {
  const { query } = useContext(SearchQueryContext);
  const { books, setBooks, setTotalItems } = useContext(BooksContext);
  const { error, setError } = useContext(ErrorContext);
  const { searchTerm, page, maxResults } = query;

  const [fetchState, setFetchState] = useState("LOADING");

  useEffect(() => {
    setFetchState("LOADING");
    if (!searchTerm) {
      setError({ message: "Please enter keywords you're looking for" });
    }

    if (searchTerm) {
      searchBooks(searchTerm, page, maxResults)
        .then((result) => delay(result, 1500))
        .then((result) => {
          setBooks(result.data);
          setTotalItems(result.totalItems);
          setFetchState("SUCCESS");
          setError(false);
        })
        .catch((err) => {
          setError(err);
          setFetchState("ERROR");
        });
    }
  }, [searchTerm, page, maxResults]);

  return (
    <>
      {fetchState === "LOADING" && !searchTerm && (
        <AlertMessage alertMsg={error.message} severity="warning" />
      )}
      <SearchResult>
        {fetchState === "LOADING" && <Loading />}
        {fetchState === "SUCCESS" && books && <BookList />}
      </SearchResult>
      {fetchState === "ERROR" && error && (
        <AlertMessage alertMsg={error.message} severity="error" />
      )}
    </>
  );
};

export default SearchResultLoader;
