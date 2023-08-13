import { HashRouter, Route, Routes } from "react-router-dom";
import SearchQueryContextProvider from "./context/SearchQueryContextProvider";
import LandingPage from "./pages/LandingPage/LandingPage";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import ErrorContextProvider from "./context/ErrorContextProvider";

function App() {
  return (
    <main className={styles.main}>
      <HashRouter>
        <SearchQueryContextProvider>
          <ErrorContextProvider>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/results">
                <Route path=":searchTerm" element={<SearchResultPage />} />
                {/* <Route
                  path=":searchTerm/:page"
                  element={<SearchResultPage />}
                /> */}
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ErrorContextProvider>
        </SearchQueryContextProvider>
      </HashRouter>
      <Footer />
    </main>
  );
}

export default App;
