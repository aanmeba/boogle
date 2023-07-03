const BookCard = ({ book }) => {
  const {
    volumeInfo: {
      authors,
      categories,
      description,
      imageLinks,
      infoLink,
      publisher,
      publishedDate,
      title,
      subtitle,
    },
  } = book;

  // need to handle each el has value and then render them
  return (
    <article>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </article>
  );
};

export default BookCard;
