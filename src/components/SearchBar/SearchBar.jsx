import { useContext, useState } from "react";
import { SearchQueryContext } from "../../context/SearchQueryContextProvider";
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
      />
      <button className={styles.button}>Search</button>
    </form>
  );
};

export default SearchBar;
