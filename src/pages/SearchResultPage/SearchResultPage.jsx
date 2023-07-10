import { useContext } from "react";
import Header from "../../components/Header/Header";
import ResultHeader from "../../components/ResultHeader/ResultHeader";
import ResultPagination from "../../components/ResultPagination/ResultPagination";
import SearchResultLoader from "../../containers/SearchResultLoader/SearchResultLoader";
import BooksContextProvider from "../../context/BooksContextProvider";
import styles from "./SearchResultPage.module.scss";
import { ErrorContext } from "../../context/ErrorContextProvider";

const SearchResultPage = () => {
  const { error } = useContext(ErrorContext);

  return (
    <section className={styles.container}>
      <Header />
      {error ? null : <ResultHeader />}
      <BooksContextProvider>
        <SearchResultLoader />
        {error ? null : <ResultPagination />}
      </BooksContextProvider>
    </section>
  );
};

export default SearchResultPage;
