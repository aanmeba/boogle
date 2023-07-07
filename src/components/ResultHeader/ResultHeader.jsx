import { useContext } from "react";
import styles from "./ResultHeader.module.scss";
import { SearchQueryContext } from "../../context/SearchQueryContextProvider";

const ResultHeader = () => {
  const { query } = useContext(SearchQueryContext);
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_results}>
        <p>Search results for</p>
        <h2>{query}</h2>
      </div>
      <div className={styles.wrapper_pagenation}></div>
    </div>
  );
};

export default ResultHeader;
