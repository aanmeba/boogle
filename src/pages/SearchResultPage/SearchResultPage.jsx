import Header from "../../components/Header/Header";
import SearchResultLoader from "../../containers/SearchResultLoader/SearchResultLoader";
import BooksContextProvider from "../../context/BooksContext";
import styles from "./SearchResultPage.module.scss";

const SearchResultPage = () => {
  return (
    <section className={styles.container}>
      <Header />
      <BooksContextProvider>
        <SearchResultLoader />
      </BooksContextProvider>
    </section>
  );
};

export default SearchResultPage;
