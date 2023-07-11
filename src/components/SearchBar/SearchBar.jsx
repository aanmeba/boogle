import { useContext, useState } from "react";
import { SearchQueryContext } from "../../context/SearchQueryContextProvider";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const { handleInputs } = useContext(SearchQueryContext);
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    handleInputs({ searchTerm: input });
    setInput("");
  };
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        type="text"
        name="searchTerm"
        id="searchTerm"
        value={input}
        onChange={onChange}
        className={styles.form__input}
        placeholder="Search..."
        required
      />
      <button className={styles.form__button}>
        <SearchIcon sx={{ height: "100%", color: "gray" }} />
      </button>
    </form>
  );
};

export default SearchBar;
