import BookCard from "../BookCard/BookCard";

const BookList = ({ books }) => {
  console.log(books, books.length, "---- bookList");
  return (
    <section>
      {books.length > 0 &&
        books.map((book) => <BookCard key={book.id} book={book} />)}
    </section>
  );
};

export default BookList;
