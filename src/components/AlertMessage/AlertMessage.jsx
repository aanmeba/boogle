import { Alert, AlertTitle } from "@mui/material";

const AlertMessage = ({ alertMsg, severity }) => {
  const message = severity === "error" ? "Something went wrong - " : "";
  return (
    <Alert severity={severity}>
      <AlertTitle>Oops!</AlertTitle>
      <p>
        {message} <strong>{alertMsg}</strong>
      </p>
    </Alert>
  );
};

export default AlertMessage;
