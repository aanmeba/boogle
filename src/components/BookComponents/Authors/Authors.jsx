import styles from "./Authors.module.scss";

const Authors = ({ authors, isList }) => {
  return (
    <>
      {authors && (
        <p className={styles.details__authors}>
          {isList ? authors.authorsInList : authors.authorsInModal}
        </p>
      )}
    </>
  );
};

export default Authors;
