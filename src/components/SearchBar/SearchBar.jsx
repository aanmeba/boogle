import { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(input);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="search"
        id="search"
        value={input}
        onChange={onChange}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
