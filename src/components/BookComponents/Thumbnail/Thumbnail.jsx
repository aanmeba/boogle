import styles from "./Thumbnail.module.scss";

const Thumbnail = ({ thumbnail, title, isList }) => {
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
        <img
          className={isList ? styles.pics__list__img : styles.pics__img}
          src={thumbnail}
          alt={title}
        />
      </figure>
    </>
  );
};

export default Thumbnail;
