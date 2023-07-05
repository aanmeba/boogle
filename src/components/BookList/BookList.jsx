import { useContext } from "react";
import BookCard from "../BookCard/BookCard";
import styles from "./BookList.module.scss";
import { BooksContext } from "../../context/BooksContext";

const BookList = () => {
  const { books } = useContext(BooksContext);

  console.log(books, books.length, "---- bookList");
  return (
    <section className={styles.container}>
      {books.length > 0 &&
        books.map((book) => <BookCard key={book.id} book={book} />)}
    </section>
  );
};

export default BookList;
