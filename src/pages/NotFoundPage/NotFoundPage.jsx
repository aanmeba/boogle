import AlertMessage from "../../components/AlertMessage/AlertMessage";
import Header from "../../components/Header/Header";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <section className={styles.container}>
      <Header />
      <AlertMessage
        alertMsg="The page you're looking for is not found"
        severity="error"
      />
    </section>
  );
};

export default NotFoundPage;
