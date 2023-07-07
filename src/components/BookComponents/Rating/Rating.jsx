// import {StarIcon, StarOutlineIcon} from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import styles from "./Rating.module.scss";

const Rating = ({ averageRating }) => {
  return (
    <>
      {averageRating ? (
        <div className={styles.details_rating}>
          <StarIcon sx={{ color: "#ffea00" }} />
          <p className={styles.details_rating_num}>{averageRating}</p>
        </div>
      ) : (
        <div className={styles.details_rating}>
          <StarOutlineIcon />
          <p className={styles.details_rating_text}>No rating available</p>
        </div>
      )}
    </>
  );
};

export default Rating;
