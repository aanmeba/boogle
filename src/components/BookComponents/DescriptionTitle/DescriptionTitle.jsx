// import { Link } from "react-router-dom";
import styles from "./DescriptionTitle.module.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const DescriptionTitle = ({ infoLink }) => {
  return (
    <div className={styles.container__body__title}>
      <h4>About this book</h4>
      {infoLink && (
        <>
          {/* <Link to={{ pathname: infoLink }} target="_blank">
            <ArrowForwardIcon sx={{ alignItems: "flex-end" }} />
          </Link> */}
          <a href={infoLink} rel="noreferrer" target="_blank">
            <ArrowForwardIcon sx={{ alignItems: "flex-end" }} />
          </a>
        </>
      )}
    </div>
  );
};

export default DescriptionTitle;
