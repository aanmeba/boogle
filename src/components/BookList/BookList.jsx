import { useContext } from "react";
import BookCard from "../BookCard/BookCard";
import { BooksContext } from "../../context/BooksContextProvider";

const BookList = () => {
  const { books } = useContext(BooksContext);

  return (
    <>
      {books.length > 0 &&
        books.map((book) => {
          return <BookCard key={book.id} book={book} />;
        })}
    </>
  );
};

export default BookList;
