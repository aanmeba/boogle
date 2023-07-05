import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchQueryContext = createContext(null);

const SearchQueryContextProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    setQuery(data);
    navigate("/results");
  };
  return (
    <SearchQueryContext.Provider value={{ query, handleSubmit }}>
      {children}
    </SearchQueryContext.Provider>
  );
};

export default SearchQueryContextProvider;
