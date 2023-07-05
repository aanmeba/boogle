import { addEllipsis, handleEscapedChars } from "../../helpers/helpers";
import styles from "../BookCard/BookCard.module.scss";

const BookDetails = ({ onClick, book }) => {
  const {
    searchInfo: { textSnippet = "" } = {},
    volumeInfo: {
      authors,
      averageRating,
      categories,
      description,
      imageLinks: { thumbnail },
      infoLink,
      publisher,
      publishedDate,
      title,
      subtitle,
    },
  } = book;
  const newDesc = handleEscapedChars(textSnippet);

  return (
    <article onClick={onClick} className={styles.container}>
      <figure className={styles.pics}>
        {thumbnail && (
          <img className={styles.pics_img} src={thumbnail} alt={title} />
        )}
      </figure>
      <div className={styles.details}>
        <h3 className={styles.details_title}>{title}</h3>
        {authors &&
          (authors.length > 1 ? (
            <p
              className={styles.details_authors}
            >{` ${authors[0]} and more`}</p>
          ) : (
            <p className={styles.details_authors}>{authors[0]}</p>
          ))}
        {averageRating ? (
          <p className={styles.details_rating}>⭐️ {averageRating}</p>
        ) : (
          <p className={styles.details_rating}>No rating available</p>
        )}
        {textSnippet && (
          <p className={styles.details_short}>{addEllipsis(newDesc, 60)}</p>
        )}
      </div>
    </article>
  );
};

export default BookDetails;
