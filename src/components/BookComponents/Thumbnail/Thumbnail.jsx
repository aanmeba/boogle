import styles from "./Thumbnail.module.scss";

const Thumbnail = ({ thumbnail, title, isList }) => {
  // no img -> isList -> placeholder
  // no img -> !isList -> hidden
  return (
    <>
      <figure
        className={
          isList
            ? styles.pics_list
            : thumbnail
            ? styles.pics
            : styles.pics_hidden
        }
      >
        {thumbnail ? (
          <img
            className={isList ? styles.pics_list_img : styles.pics_img}
            src={thumbnail}
            alt={title}
          />
        ) : (
          <div className={styles.pics_list_img_placeholder}></div>
        )}
      </figure>
    </>
  );
};

export default Thumbnail;
