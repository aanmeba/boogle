import styles from "./Thumbnail.module.scss";

const Thumbnail = ({ thumbnail, title, isList }) => {
  // no img -> isList -> placeholder
  // no img -> !isList -> hidden
  return (
    <>
      <figure
        className={
          isList
            ? styles.pics__list
            : thumbnail
            ? styles.pics
            : styles.pics__hidden
        }
      >
        {thumbnail ? (
          <img
            className={isList ? styles.pics__list__img : styles.pics__img}
            src={thumbnail}
            alt={title}
          />
        ) : (
          <div className={styles.pics__list__img__placeholder}></div>
        )}
      </figure>
    </>
  );
};

export default Thumbnail;
