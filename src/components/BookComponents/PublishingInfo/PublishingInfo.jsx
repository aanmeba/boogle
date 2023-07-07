import { formatePublishedDate } from "../../../helpers/helpers";
import styles from "./PublishingInfo.module.scss";

const PublishingInfo = ({ publishedDate, publisher }) => {
  console.log(publishedDate, publisher);
  return (
    <div className={styles.details_publish}>
      {publishedDate && <span>{formatePublishedDate(publishedDate)}</span>}
      {publishedDate && publisher ? <span> · </span> : null}
      {publisher && <span>{publisher}</span>}
    </div>
  );
};

export default PublishingInfo;
