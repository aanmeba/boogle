import { printAuthors } from "../../../helpers/helpers";
import styles from "./Authors.module.scss";

const Authors = ({ authors, isList }) => {
  // authors && isList
  // - authors ? and more : [0]
  // no authors || no list
  // - authors ? printAu : null
  return (
    <>
      {authors && isList ? (
        authors.length > 1 ? (
          <p className={styles.details_authors}>{` ${authors[0]} and more`}</p>
        ) : (
          <p className={styles.details_authors}>{authors[0]}</p>
        )
      ) : authors ? (
        <p className={styles.details_authors}>{printAuthors(authors)}</p>
      ) : null}
    </>
  );
};

export default Authors;
