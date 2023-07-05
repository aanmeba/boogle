import { formatePublishedDate, printAuthors } from "../../helpers/helpers";
import styles from "./BookModalContent.module.scss";
import StarIcon from "@mui/icons-material/Star";

const BookModalContent = ({ book }) => {
  const {
    saleInfo: { buyLink },
    volumeInfo: {
      authors,
      averageRating,
      categories,
      description,
      imageLinks: { thumbnail = "" } = {},
      infoLink,
      publisher,
      publishedDate,
      title,
      subtitle,
    },
  } = book;

  return (
    <>
      <article className={styles.container}>
        <section className={styles.container_header}>
          <figure className={styles.pics}>
            {thumbnail ? (
              <img className={styles.pics_img} src={thumbnail} alt={title} />
            ) : (
              <div className={styles.pics_img_hidden}></div>
            )}
          </figure>

          <div className={styles.details}>
            <h3 className={styles.details_title}>{title}</h3>
            {subtitle && (
              <h4 className={styles.details_subtitle}>{subtitle}</h4>
            )}
            {authors && (
              <p className={styles.details_authors}>{printAuthors(authors)}</p>
            )}
            {averageRating && (
              <>
                <StarIcon />
                <p className={styles.details_rating}>{averageRating}</p>
              </>
            )}

            {buyLink && (
              <a href={buyLink} rel="noreferrer" target="_blank">
                Buy
              </a>
            )}

            {publisher && (
              <p className={styles.details_publisher}>
                Published by {publisher}
              </p>
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
        </section>
        <section className={styles.container_body}>
          <h4>Description</h4>
          {description && (
            <p className={styles.container_body_desc}>{description}</p>
          )}
          {infoLink && (
            <a className={styles.container_body_link} href={infoLink}>
              Read More
            </a>
          )}
        </section>
      </article>
    </>
  );
};

export default BookModalContent;
