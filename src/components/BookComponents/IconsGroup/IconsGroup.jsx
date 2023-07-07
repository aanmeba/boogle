import Rating from "../Rating/Rating";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styles from "./IconsGroup.module.scss";

const IconsGroup = ({ isEbook, pageCount, averageRating, buyLink }) => {
  console.log(isEbook, pageCount, averageRating);
  return (
    <div className={styles.icons_group}>
      <Rating averageRating={averageRating} />
      {isEbook ? (
        <div className={styles.icons}>
          <BookOutlinedIcon />
          <span>eBook</span>
        </div>
      ) : null}
      {pageCount ? (
        <div className={styles.icons}>
          <span>{pageCount}</span>
          <span>Pages</span>
        </div>
      ) : null}
      {buyLink ? (
        <div className={styles.icons}>
          <a href={buyLink} rel="noreferrer" target="_blank">
            <ShoppingCartOutlinedIcon />
          </a>
          {/* <span>get one</span> */}
        </div>
      ) : null}
    </div>
  );
};

export default IconsGroup;
