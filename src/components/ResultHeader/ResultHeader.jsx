import { useContext } from "react";
import styles from "./ResultHeader.module.scss";
import { SearchQueryContext } from "../../context/SearchQueryContextProvider";
// import { ErrorContext } from "../../context/ErrorsContextProvider";

const ResultHeader = () => {
  const { query, handleInputs } = useContext(SearchQueryContext);

  const handleChange = (e) => {
    handleInputs({ [e.target.id]: e.target.value });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__results}>
        <p>Search results for</p>
        <h2>{query.searchTerm}</h2>
      </div>
      <div className={styles.wrapper__maxResults}>
        <select id="maxResults" onChange={handleChange}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
    </div>
  );
};

export default ResultHeader;
