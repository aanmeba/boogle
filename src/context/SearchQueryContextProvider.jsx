import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchQueryContext = createContext(null);

const SearchQueryContextProvider = ({ children }) => {
  const [query, setQuery] = useState({
    searchTerm: "",
    page: 1,
    maxResults: 10,
  });

  const navigate = useNavigate();

  const handleInputs = (obj) => {
    const [key, value] = Object.entries(obj).flat();
    setQuery({ ...query, [key]: value });

    if (key === "searchTerm") {
      navigate(`/results/${value}`);
    }
  };

  return (
    <SearchQueryContext.Provider value={{ query, handleInputs }}>
      {children}
    </SearchQueryContext.Provider>
  );
};

export default SearchQueryContextProvider;
