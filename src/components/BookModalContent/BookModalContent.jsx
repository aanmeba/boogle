import Authors from "../BookComponents/Authors/Authors";
import IconsGroup from "../BookComponents/IconsGroup/IconsGroup";
import PublishingInfo from "../BookComponents/PublishingInfo/PublishingInfo";
import Thumbnail from "../BookComponents/Thumbnail/Thumbnail";
import Categories from "../BookComponents/Categories/Categories";
import DescriptionTitle from "../BookComponents/DescriptionTitle/DescriptionTitle";
import styles from "./BookModalContent.module.scss";

const BookModalContent = ({ book }) => {
  const {
    saleInfo: { isEbook },
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
      pageCount,
      ratingsCount = 0,
    },
  } = book;

  return (
    <article className={styles.container}>
      <section className={styles.container_header}>
        <Thumbnail thumbnail={thumbnail} title={title} isList={false} />

        <div className={styles.details}>
          <h3 className={styles.details_title}>{title}</h3>
          {subtitle && <h4 className={styles.details_subtitle}>{subtitle}</h4>}
          <Authors authors={authors} />
          <PublishingInfo publishedDate={publishedDate} publisher={publisher} />

          <IconsGroup
            averageRating={averageRating}
            isEbook={isEbook}
            pageCount={pageCount}
            ratingsCount={ratingsCount}
          />
          <Categories categories={categories} />
        </div>
      </section>
      <section className={styles.container_body}>
        <DescriptionTitle infoLink={infoLink} />
        {description ? (
          <p className={styles.container_body_desc}>{description}</p>
        ) : (
          <p className={styles.container_body_desc_empty}>
            Description is not available
          </p>
        )}
      </section>
    </article>
  );
};

export default BookModalContent;
