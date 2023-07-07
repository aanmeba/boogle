import Header from "../../components/Header/Header";
import ResultHeader from "../../components/ResultHeader/ResultHeader";
import SearchResultLoader from "../../containers/SearchResultLoader/SearchResultLoader";
import BooksContextProvider from "../../context/BooksContext";
import styles from "./SearchResultPage.module.scss";

const SearchResultPage = () => {
  return (
    <section className={styles.container}>
      <Header />
      <ResultHeader />
      <BooksContextProvider>
        <SearchResultLoader />
      </BooksContextProvider>
    </section>
  );
};

export default SearchResultPage;
