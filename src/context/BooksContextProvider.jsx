import { createContext, useState } from "react";

export const BooksContext = createContext(null);

const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  return (
    <BooksContext.Provider
      value={{ books, setBooks, totalItems, setTotalItems }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
