import styles from "./Categories.module.scss";

const Categories = ({ categories }) => {
  return (
    <div className={styles.details__categories}>
      {categories &&
        categories.map((c, i) => (
          <span key={i} className={styles.details__categories__item}>
            {c}
          </span>
        ))}
    </div>
  );
};

export default Categories;
