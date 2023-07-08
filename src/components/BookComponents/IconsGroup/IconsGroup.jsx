import Rating from "../Rating/Rating";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import styles from "./IconsGroup.module.scss";
import { handleReviews } from "../../../helpers/helpers";

const IconsGroup = ({ isEbook, pageCount, averageRating, ratingsCount }) => {
  console.log(isEbook, pageCount, averageRating);
  // ratingsCount
  return (
    <>
      <div className={styles.icons__group}>
        {averageRating ? (
          <div className={styles.icons}>
            <Rating averageRating={averageRating} ratingsCount={ratingsCount} />
            <span className={styles.details__rating__num}>
              {handleReviews(ratingsCount)}
            </span>
          </div>
        ) : null}

        {isEbook ? (
          <div className={styles.icons}>
            <BookOutlinedIcon
              sx={{ fontSize: "large", paddingTop: "0.2rem" }}
            />
            <span>eBook</span>
          </div>
        ) : null}
        {isEbook && pageCount ? (
          <div className={styles.icons}>
            <span className={styles.icons__pages}>{pageCount}</span>
            <span>Pages</span>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default IconsGroup;
