import { Alert, AlertTitle } from "@mui/material";

const ErrorMessage = ({ errorMsg }) => {
  return (
    <Alert severity="error">
      <AlertTitle>Oops!</AlertTitle>
      <p>
        Something went wrong - <strong>{errorMsg}</strong>
      </p>
    </Alert>
  );
};

export default ErrorMessage;
