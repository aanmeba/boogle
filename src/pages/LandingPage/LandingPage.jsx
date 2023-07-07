import SearchBar from "../../components/SearchBar/SearchBar";
import Title from "../../components/Title/Title";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  // hit enter -> if data -> redirect to results page
  return (
    <section className={styles.landing}>
      <Title />
      <SearchBar />
    </section>
  );
};

export default LandingPage;
