import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchQueryContextProvider from "./context/SearchQueryContextProvider";
import LandingPage from "./pages/LandingPage/LandingPage";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";

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
      <Footer />
    </main>
  );
}

export default App;
