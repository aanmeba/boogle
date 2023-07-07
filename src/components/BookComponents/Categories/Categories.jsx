import styles from "./Categories.module.scss";

const Categories = ({ categories }) => {
  return (
    <div className={styles.details_categories}>
      {categories &&
        categories.map((c, i) => (
          <span key={i} className={styles.details_categories_item}>
            {c}
          </span>
        ))}
    </div>
  );
};

export default Categories;
