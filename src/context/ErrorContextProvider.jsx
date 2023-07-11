import { createContext, useState } from "react";

export const ErrorContext = createContext(false);

const ErrorContextProvider = ({ children }) => {
  const [error, setError] = useState(false);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorContextProvider;
