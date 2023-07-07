import { useContext } from "react";
import BookCard from "../BookCard/BookCard";
import styles from "./BookList.module.scss";
import { BooksContext } from "../../context/BooksContext";
import { Skeleton } from "@mui/material";

const BookList = ({ fetchState }) => {
  const { books } = useContext(BooksContext);

  return (
    <section className={styles.container}>
      {(fetchState === "LOADING" ? Array.from(new Array(4)) : books).map(
        (item, index) =>
          item ? (
            <BookCard key={item.id} book={item} />
          ) : (
            <>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={200}
                sx={{ borderRadius: "0.7rem", marginBottom: "0.5rem" }}
                key={index}
              />
              <Skeleton />
              <Skeleton width="60%" />
            </>
          )
      )}
      {/* {books.length > 0 &&
        books.map((book) => <BookCard key={book.id} book={book} />)} */}
    </section>
  );
};

export default BookList;
