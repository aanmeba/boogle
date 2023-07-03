import { useEffect, useState } from "react";
import { searchBooks } from "../../services/books-services";
import BookList from "../../components/BookList/BookList";

const SearchResultLoader = ({ query }) => {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query) {
      searchBooks(query)
        .then((data) => setBooks(data))
        .catch((err) => setError(err))
        .finally(() => {
          console.log(books);
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error.message}</p>}
      {!loading && books && <BookList books={books} />}
    </>
  );
};

export default SearchResultLoader;
