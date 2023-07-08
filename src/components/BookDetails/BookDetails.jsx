import Authors from "../BookComponents/Authors/Authors";
import Rating from "../BookComponents/Rating/Rating";
import Thumbnail from "../BookComponents/Thumbnail/Thumbnail";
import styles from "./BookDetails.module.scss";

const BookDetails = ({ onClick, book }) => {
  const {
    volumeInfo: {
      authors,
      averageRating,
      imageLinks: { thumbnail = "" } = {},
      title,
    },
  } = book;

  return (
    <article onClick={onClick} className={styles.container}>
      <Thumbnail thumbnail={thumbnail} title={title} isList />
      <div className={styles.details}>
        <h3 className={styles.details__title}>{title}</h3>
        <Authors authors={authors} isList />
        <Rating averageRating={averageRating} isList />
      </div>
    </article>
  );
};

export default BookDetails;
