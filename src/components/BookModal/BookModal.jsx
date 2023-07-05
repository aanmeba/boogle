import { Link } from "react-router-dom";
import {
  formatePublishedDate,
  // getPublishedYear,
  printAuthors,
} from "../../helpers/helpers";
import styles from "./BookModal.module.scss";

const BookModal = ({ book, isOpen }) => {
  const {
    saleInfo: { buyLink },
    // searchInfo: { textSnippet = "" } = {},
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

  return (
    <>
      {/* <div className={isOpen ? styles.backdrop : styles.backdrop_hidden}></div> */}
      {/* <div className={isOpen ? styles.modal : styles.modal_hidden}> */}
      <article className={styles.container}>
        <figure className={styles.pics}>
          {thumbnail && (
            <img className={styles.pics_img} src={thumbnail} alt={title} />
          )}
        </figure>
        <div className={styles.details}>
          <h3 className={styles.details_title}>{title}</h3>
          {subtitle && <h4 className={styles.details_subtitle}>{subtitle}</h4>}
          {authors && (
            <p className={styles.details_authors}>{printAuthors(authors)}</p>
          )}
          {averageRating && (
            <p className={styles.details_rating}>⭐️ {averageRating}</p>
          )}

          {buyLink && (
            <a href={buyLink} rel="noreferrer" target="_blank">
              Buy
            </a>
          )}

          {publisher && (
            <p className={styles.details_publisher}>Published by {publisher}</p>
          )}
          {publishedDate && (
            <p className={styles.details_publishedDate}>
              {formatePublishedDate(publishedDate)}
            </p>
          )}

          {categories &&
            categories.map((c, i) => (
              <p key={i} className={styles.details_categories}>
                {c}
              </p>
            ))}
        </div>
        <div className={styles.bottom}>
          {description && <p className={styles.details_desc}>{description}</p>}
          {infoLink && <a href={infoLink}>Read More</a>}
        </div>
      </article>
      {/* </div> */}
    </>
  );
};

export default BookModal;
