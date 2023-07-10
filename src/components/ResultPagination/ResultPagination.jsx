import { useContext, useEffect, useState } from "react";
import { SearchQueryContext } from "../../context/SearchQueryContextProvider";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { IconButton } from "@mui/material";
import styles from "./ResultPagination.module.scss";

const ResultPagination = () => {
  const {
    query: { page },
    handleInputs,
  } = useContext(SearchQueryContext);
  const [currentPage, setCurrentPage] = useState(page);

  const handleButtonClick = (e) => {
    // event delegation - check the currentTarget
    const clickedBtn = e.currentTarget.id;

    if (clickedBtn === "prev") {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    handleInputs({ page: currentPage });
  }, [currentPage]);

  return (
    <section className={styles.container}>
      <IconButton
        onClick={handleButtonClick}
        id="prev"
        disabled={currentPage === 1}
      >
        <NavigateBeforeIcon />
      </IconButton>
      <span className={styles.current}>Page {currentPage}</span>

      <IconButton onClick={handleButtonClick} id="next">
        <NavigateNextIcon />
      </IconButton>
    </section>
  );
};

export default ResultPagination;
