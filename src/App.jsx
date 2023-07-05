import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchQueryContextProvider from "./context/SearchQueryContextProvider";
import LandingPage from "./pages/LandingPage/LandingPage";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import styles from "./App.module.scss";

function App() {
  return (
    <main className={styles.main}>
      <BrowserRouter>
        <SearchQueryContextProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/results" element={<SearchResultPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </SearchQueryContextProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
