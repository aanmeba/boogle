import { useContext, useEffect, useState } from "react";
import { searchBooks } from "../../services/books-services";
import BookList from "../../components/BookList/BookList";
import { SearchQueryContext } from "../../context/SearchQueryContextProvider";
import Loading from "../../components/Loading/Loading";
import SearchResult from "../../components/SearchResult/SearchResult";
import AlertMessage from "../../components/AlertMessage/AlertMessage";
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
    //  else {
    //   setFetchState("ERROR");
    //   setError({ message: "Please enter keywords you're looking for" });
    // }
  }, [searchTerm, page, maxResults]);

  return (
    <>
      {fetchState === "LOADING" && !searchTerm && (
        <AlertMessage
          alertMsg="Please enter keywords you're looking for"
          severity="warning"
        />
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
