import { useContext, useState } from "react";
import { SearchQueryContext } from "../../context/SearchQueryContextProvider";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const { handleSubmit } = useContext(SearchQueryContext);
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(input);
    setInput("");
  };
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        type="text"
        name="search"
        id="search"
        value={input}
        onChange={onChange}
        className={styles.input}
        placeholder="Search..."
      />
      <button className={styles.button}>
        <SearchIcon sx={{ height: "100%", color: "gray" }} />
      </button>
    </form>
  );
};

export default SearchBar;
