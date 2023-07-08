import StarIcon from "@mui/icons-material/Star";
import styles from "./Rating.module.scss";

const Rating = ({ averageRating, isList }) => {
  return (
    <>
      {averageRating ? (
        <div className={isList ? styles.details__rating : styles.icons_rating}>
          <StarIcon sx={{ fontSize: isList ? "small" : "medium" }} />
          <span
            className={
              isList ? styles.details__rating__num : styles.icons_rating_num
            }
          >
            {averageRating}
          </span>
        </div>
      ) : null}
    </>
  );
};

export default Rating;
