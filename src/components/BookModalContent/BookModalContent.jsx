import Authors from "../BookComponents/Authors/Authors";
import IconsGroup from "../BookComponents/IconsGroup/IconsGroup";
import PublishingInfo from "../BookComponents/PublishingInfo/PublishingInfo";
import Thumbnail from "../BookComponents/Thumbnail/Thumbnail";
import Categories from "../BookComponents/Categories/Categories";
import DescriptionTitle from "../BookComponents/DescriptionTitle/DescriptionTitle";
import styles from "./BookModalContent.module.scss";

const BookModalContent = ({ book }) => {
  const {
    isEbook,
    authors,
    averageRating,
    description,
    categories,
    thumbnail,
    publishingInfo,
    infoLink,
    title,
    subtitle,
    pageCount,
    ratingsCount,
  } = book;

  return (
    <article className={styles.container}>
      <section className={styles.container__header}>
        <Thumbnail thumbnail={thumbnail} title={title} isList={false} />

        <div className={styles.details}>
          <div className={styles.details__titles}>
            <h3 className={styles.details__titles__title}>{title}</h3>
            {subtitle && (
              <h4 className={styles.details__titles__subtitle}>{subtitle}</h4>
            )}
          </div>
          <Authors authors={authors} />
          <PublishingInfo publishingInfo={publishingInfo} />

          <IconsGroup
            averageRating={averageRating}
            isEbook={isEbook}
            pageCount={pageCount}
            ratingsCount={ratingsCount}
          />
          <Categories categories={categories} />
        </div>
      </section>
      <section className={styles.container__body}>
        <DescriptionTitle infoLink={infoLink} />
        <p
          className={
            description
              ? styles.container__body__desc
              : styles.container__body__desc__empty
          }
        >
          {description}
        </p>
      </section>
    </article>
  );
};

export default BookModalContent;
