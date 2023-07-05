import styles from "./BookDetails.module.scss";
import StarIcon from "@mui/icons-material/Star";

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
      <figure className={styles.pics}>
        {thumbnail ? (
          <img className={styles.pics_img} src={thumbnail} alt={title} />
        ) : (
          <div className={styles.pics_img_placeholder}></div>
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
          <div className={styles.details_rating}>
            <StarIcon sx={{ color: "#ffea00" }} />
            <p>{averageRating}</p>
          </div>
        ) : (
          <p className={styles.details_rating}>No rating available</p>
        )}
      </div>
    </article>
  );
};

export default BookDetails;
