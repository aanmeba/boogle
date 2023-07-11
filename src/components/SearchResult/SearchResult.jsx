import styles from "./SearchResult.module.scss";

const SearchResult = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};

export default SearchResult;
